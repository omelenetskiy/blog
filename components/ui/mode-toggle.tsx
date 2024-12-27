'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  if (!isMounted) return null;

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isDark}
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
      />
      <div className="after:bg-dark peer relative flex h-6 w-11 items-center rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700 rtl:peer-checked:after:-translate-x-full">
        <Sun
          className={`absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 transition-opacity duration-300 dark:text-gray-400 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Moon
          className={`absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 transition-opacity duration-300 dark:text-gray-200 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </label>
  );
}
