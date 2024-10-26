import clsx from 'clsx';
import { useContext } from 'react';
import * as R from 'remeda';
import { match } from 'ts-pattern';

import { ClassName } from '@/constants';
import { RuntimeStateAPIContext } from '@/contexts';

import { AgentMessage } from '../AgentMessage';
import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Carousel } from '../Carousel';
import { FeedbackButton } from '../FeedbackButton';
import type { IFeedbackButton } from '../FeedbackButton/FeedbackButton.interface';
import { Image } from '../Image';
import { MessageType } from './constants';
import { ExtensionMessage } from './ExtensionMessage';
import EndState from './state/end';
import { messageAvatar, messageContainer, systemMessageContainer } from './styles.css';
import type { MessageProps } from './types';

export interface SystemMessageProps extends React.PropsWithChildren {
  /**
   * An image URL for an avatar to associate this message with.
   */
  avatar: string;

  /**
   * A unix timestamp indicating when this message was sent.
   */
  timestamp?: number;

  /**
   * A single message to render.
   */
  message?: MessageProps;

  /**
   * If true, renders an avatar next to the message.
   */
  withImage: boolean;

  /**
   * If provided, will display {@link FeedbackButton} component.
   * @default false
   */
  feedback?: IFeedbackButton | undefined;
}

/**
 * An individual message within a system response.
 */
export const SystemMessage: React.FC<SystemMessageProps> = ({ avatar, feedback, message, children }) => {
  const { config } = useContext(RuntimeStateAPIContext);

  if (!children && message?.type === MessageType.END) {
    return <EndState />;
  }

  return (
    <div className={clsx(ClassName.SYSTEM_RESPONSE, systemMessageContainer())}>
      <Avatar className={messageAvatar} avatar={avatar} />
      <div className={messageContainer}>
        {children ??
          match(message)
            .with({ type: MessageType.TEXT }, ({ text, ai }) => <AgentMessage text={text} aiGenerated={ai} />)
            .with({ type: MessageType.IMAGE }, ({ url }) => <Image image={url} mode={config.render?.mode} />)
            .with({ type: MessageType.CARD }, (props) => <Card {...R.omit(props, ['type'])} />)
            .with({ type: MessageType.CAROUSEL }, (props) => <Carousel {...R.omit(props, ['type'])} />)
            .with({ type: MessageType.EXTENSION }, ({ payload }) => (
              <ExtensionMessage extension={payload.extension} trace={payload.trace} />
            ))
            .otherwise(() => null)}
        <AgentMessage text="Yo yo yo" />
        <AgentMessage text="Yo yo yo" />
        <AgentMessage text="Yo yo yo" />
        {feedback && <FeedbackButton {...feedback} />}
      </div>
    </div>
  );
};
