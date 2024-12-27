import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import NextLink from 'next/link';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
};

export const Icon: Story = {
  parameters: {
    controls: { exclude: ['children'] },
  },
  args: {
    variant: 'default',
    size: 'icon',
    children: <ChevronRight />,
  },
};

export const IconWithText: Story = {
  parameters: {
    controls: { exclude: ['children'] },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Mail /> Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  parameters: {
    controls: { exclude: ['children'] },
  },
  args: {
    disabled: true,
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Loader2 className="animate-spin" /> Please wait
      </>
    ),
  },
};

export const AsChild: Story = {
  parameters: {
    controls: { exclude: ['children'] },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: <NextLink href="/#">Login</NextLink>,
    asChild: true,
  },
};
