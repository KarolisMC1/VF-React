import type { Meta, StoryObj } from '@storybook/react';

import { COLOR_FIXTURE } from '@/__fixtures__/colors';
import { RuntimeProvider } from '@/contexts';

import { FeedbackButton } from './FeedbackButton.component';

const MOCK_CONFIG = { render: { mode: 'embedded' }, verify: { projectID: ' ' } } as any;

const meta: Meta<typeof FeedbackButton> = {
  title: 'Button/FeedbackButton',
  component: FeedbackButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof FeedbackButton>;

const VariantRenderer = ({ title, active }: { title: string; active?: boolean }) => {
  return (
    <>
      <h1>{title}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        {COLOR_FIXTURE.map((color, index) => (
          <RuntimeProvider config={MOCK_CONFIG} assistant={{ persistence: {}, extensions: [], color } as any}>
            <FeedbackButton
              variant={index % 2 === 0 ? 'up' : 'down'}
              active={active}
              key={index}
              onClick={() => null}
              testID={`feedback-button--${index}`}
            />
          </RuntimeProvider>
        ))}
      </div>
    </>
  );
};

export const Base: Story = {
  render: () => <VariantRenderer title="Base" />,
};

export const ActiveExamples: Story = {
  render: () => <VariantRenderer title="Active state" active={true} />,
};
