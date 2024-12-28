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

export const Heading: Story = {
  args: {
    variant: 'h1',
    component: 'h1',
    children: 'Heading',
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

export const List: Story = {
  args: {},
  render: () => (
    <>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ol>
    </>
  ),
};

export const Blockquote: Story = {
  args: {},
  render: () => (
    <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </blockquote>
  ),
};
