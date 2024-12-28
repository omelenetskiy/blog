import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { StorybookWrapper } from '@/stories/components/utils';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const InputComponent = (args: Story) => {
  return (
    <StorybookWrapper>
      <Input {...args} />
    </StorybookWrapper>
  );
};

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
  render: InputComponent,
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  render: InputComponent,
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: InputComponent,
};
