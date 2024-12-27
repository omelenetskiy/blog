import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: { control: 'boolean' },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    className: '',
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <>
      <div>
        <Typography variant="body1" className="text-muted-foreground">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor
          sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Typography>
      </div>
      <Separator {...args} className="my-4" />
      <div>
        <Typography variant="body1" className="text-muted-foreground">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor
          sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Typography>
      </div>
    </>
  ),
};

export const Vertical: Story = {
  args: {
    className: '',
    orientation: 'vertical',
    decorative: true,
  },
  render: (args) => (
    <div className="flex h-10 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};
