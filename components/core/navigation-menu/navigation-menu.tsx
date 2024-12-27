'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plane, Menu } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/posts/2', label: 'Posts' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Plane className="h-6 w-6" />
          <span className="font-bold">TravelBlog</span>
        </Link>
        <nav className="ml-auto mr-4 hidden items-center gap-4 sm:gap-6 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium underline-offset-4 hover:underline"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <ModeToggle />
          {/*<LanguageSwitcher />*/}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-4 flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
