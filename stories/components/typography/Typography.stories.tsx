import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@/components/ui/typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
    },
    component: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    component: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    component: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    component: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    component: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    component: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    component: 'h6',
    children: 'Heading 6',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    component: 'h6',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    component: 'h6',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    component: 'p',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    component: 'p',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    component: 'span',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    component: 'span',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
