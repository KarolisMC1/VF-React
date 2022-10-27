/* eslint-disable no-console */
import { VoiceflowRuntime } from '@voiceflow/sdk-runtime';
import type { PartialDeep } from 'type-fest';

import { Assistant, ChatConfig, ChatPersistence, ChatPosition, isEnumValue, isObject } from '@/common';
import { RUNTIME_URL } from '@/constants';
import { PRIMARY } from '@/styles/color';

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/44123967';

const DEFAULT_ASSISTANT = {
  title: 'Voiceflow Assistant',
  image: DEFAULT_AVATAR,
  avatar: DEFAULT_AVATAR,
  color: PRIMARY,
  description: '',
  position: ChatPosition.RIGHT,
  watermark: true,
  persistence: ChatPersistence.LOCAL_STORAGE,
  spacing: { bottom: 30, side: 30 },
};

const sanitizeAssistant = (assistant: unknown): PartialDeep<Assistant> => {
  const ref = isObject(assistant) ? assistant : {};
  const { title, watermark, description, image, launcher, avatar, spacing, color, position, persistence } = ref;

  return {
    ...(typeof title === 'string' && { title }),
    ...(typeof color === 'string' && { color }),
    ...(typeof image === 'string' && { image }),
    ...(typeof avatar === 'string' && { avatar }),
    ...(typeof launcher === 'string' && { launcher }),
    ...(typeof watermark === 'boolean' && { watermark }),
    ...(typeof description === 'string' && { description }),
    ...(isEnumValue(position, ChatPosition) && { position }),
    ...(isEnumValue(persistence, ChatPersistence) && { persistence }),
    ...(isObject(spacing) && {
      spacing: {
        ...(typeof spacing?.side === 'number' && { side: spacing.side }),
        ...(typeof spacing?.bottom === 'number' && { bottom: spacing.bottom }),
      },
    }),
  };
};

export const fetchAssistant = async (config: ChatConfig): Promise<Assistant> => {
  const { url = RUNTIME_URL, versionID } = config;

  // fetch remote publishing config
  const runtime = new VoiceflowRuntime({ ...config, url });
  const publishing = await runtime.getPublishing({ ...(versionID && { versionID }) }).catch((error) => {
    console.error(error);
    return null;
  });

  const configAssistant = sanitizeAssistant(config.assistant);
  const publishingAssistant = sanitizeAssistant(publishing);

  return {
    ...DEFAULT_ASSISTANT,
    ...publishingAssistant,
    ...configAssistant,
    watermark: publishingAssistant.watermark ?? DEFAULT_ASSISTANT.watermark, // watermark can not be determined by config
    spacing: {
      ...DEFAULT_ASSISTANT.spacing,
      ...publishingAssistant.spacing,
      ...configAssistant.spacing,
    },
  };
};
