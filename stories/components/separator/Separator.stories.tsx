import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import { StorybookWrapper } from '@/stories/components/utils';

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

export const Default: Story = {
  args: {
    className: '',
    orientation: 'horizontal',
    decorative: true,
  },
  render: () => (
    <StorybookWrapper>
      <div className="space-y-1">
        <Typography variant="h4" component="h4">
          Separator
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Typography variant="body1">Blog</Typography>
        <Separator orientation="vertical" />
        <Typography variant="body1">Docs</Typography>
        <Separator orientation="vertical" />
        <Typography variant="body1">Source</Typography>
      </div>
    </StorybookWrapper>
  ),
};
