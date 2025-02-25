import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import CODE_RESPONSE_FIXTURE from '@/__fixtures__/markdown/code-response.md?raw';
import CODE_SNIPPET_FIXTURE from '@/__fixtures__/markdown/inline-code.md?raw';
import LISTS_FIXTURE from '@/__fixtures__/markdown/lists.md?raw';
import TABLES_QUOTES_RULES from '@/__fixtures__/markdown/tables-quotes-rules.md?raw';
import TEXT_TREATMENT_MARKDOWN from '@/__fixtures__/markdown/text-treatment.md?raw';
import { SAMPLE_SLATE_TEXT } from '@/__fixtures__/messages';

import tiledBg from '../../__fixtures__/tiled-bg.png';
import { LinkPreview } from '../LinkPreview';
import { AgentMessage } from '.';

type Story = StoryObj<typeof AgentMessage>;

const shortMessage = 'Howdy folks how yall doing out there?';

const meta: Meta<typeof AgentMessage> = {
  title: 'Core/AgentMessage',
  component: AgentMessage,
};
export default meta;

export const Small: Story = {
  args: {
    text: SAMPLE_SLATE_TEXT,
  },
};

export const AIGenerated: Story = {
  args: {
    text: SAMPLE_SLATE_TEXT as unknown as string,
    aiGenerated: true,
    generatedMessage: 'Generated by AI, double-check for accuracy.',
  },
};

export const WithLink: Story = {
  args: {
    text: SAMPLE_SLATE_TEXT,
    aiGenerated: true,
    generatedMessage: 'Generated by AI, double-check for accuracy.',
    children: (
      <>
        <LinkPreview
          image={tiledBg}
          inline
          title={
            'Lorem ipsum dolor sit amet consectetur. Quis risus nibh tincidunt platea. A donec amet gravida aliquam sed eget aliquet sollicitudin turpis.'
          }
          link="voiceflow.com"
        />
        <LinkPreview
          image={tiledBg}
          inline
          title={
            'Lorem ipsum dolor sit amet consectetur. Quis risus nibh tincidunt platea. A donec amet gravida aliquam sed eget aliquet sollicitudin turpis.'
          }
          link="voiceflow.com"
        />
        <LinkPreview
          image={tiledBg}
          inline
          title={
            'Lorem ipsum dolor sit amet consectetur. Quis risus nibh tincidunt platea. A donec amet gravida aliquam sed eget aliquet sollicitudin turpis.'
          }
          link="voiceflow.com"
        />
      </>
    ),
  },
};

export const Markdown: Story = {
  args: {
    text: TEXT_TREATMENT_MARKDOWN,
  },
};

export const InlineCode: Story = {
  args: {
    text: CODE_SNIPPET_FIXTURE,
  },
};

export const CodeResponse: Story = {
  args: {
    text: CODE_RESPONSE_FIXTURE,
  },
  render: ({ children, ...rest }) => {
    return (
      <div style={{ maxWidth: '300px' }}>
        <AgentMessage {...rest} />
      </div>
    );
  },
};

export const Tables: Story = {
  args: {
    text: TABLES_QUOTES_RULES,
  },
};

export const Lists: Story = {
  args: {
    text: LISTS_FIXTURE,
  },
};

const StreamingExample = ({ message }: { message: string }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, index + 1));
      index++;
      if (index === message.length) {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [message]);

  return <AgentMessage text={text} />;
};

export const Streaming: Story = {
  render: () => <StreamingExample message={shortMessage} />,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const StreamingFullMarkdown: Story = {
  render: () => <StreamingExample message={TEXT_TREATMENT_MARKDOWN} />,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
