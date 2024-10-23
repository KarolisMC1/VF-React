import type { BaseRequest } from '@voiceflow/dtos-interact';
import type { PrototypeVerify, PublicVerify, RuntimeOptions as SDKRuntimeOptions } from '@voiceflow/sdk-runtime';
import { z } from 'zod';

import type { RawAssistantSettings } from './AssistantSettings.dto';
import { RenderMode, RenderOptions } from './RenderOptions.dto';

export const RUNTIME_URL = 'https://general-runtime.voiceflow.com';

const tryDecodeURIComponent = (str: string) => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};

export type VerifyOptions = z.infer<typeof VerifyOptions>;
export type UserOptions = z.infer<typeof UserOptions>;
export type LaunchOptions = z.infer<typeof LaunchOptions>;

export const VerifyOptions = z.union([
  z.object({ projectID: z.string() }),
  z.object({ projectID: z.string(), versionID: z.string(), prototype: z.literal(true) }),
]);

export const LaunchOptions = z
  .object({
    event: z
      .object({ type: z.string() })
      .passthrough()
      .transform((x) => x as unknown as BaseRequest),
  })
  .partial();

export const UserOptions = z
  .object({
    name: z.string(),
    image: z.string(),
  })
  .partial();

type Config<T extends SDKRuntimeOptions<PublicVerify | PrototypeVerify>> = T;

export interface ChatConfig extends Config<z.infer<typeof ChatConfig>> {}

export interface LoadConfig extends Omit<ChatConfig, 'url'> {
  url?: ChatConfig['url'];
  assistant?: RawAssistantSettings;
}

export const ChatConfig = z
  .object({
    autostart: z.boolean().optional(),
    // default to true during migration period, turn off later
    allowDangerousHTML: z.boolean().default(true),

    url: z.string().default(RUNTIME_URL),
    userID: z
      .union([z.number(), z.string()])
      .transform((x) => {
        if (typeof x === 'number') return String(x);
        return tryDecodeURIComponent(x);
      })
      .optional(),
    versionID: z.string().optional(),

    verify: VerifyOptions,
    user: UserOptions.optional(),
    render: RenderOptions,
    launch: LaunchOptions.optional(),
  })
  .transform((config) => ({
    ...config,

    // if not configured default to enabling autostart during overlay mode and disabling it otherwise
    autostart: config.autostart ?? config.render.mode === RenderMode.OVERLAY,
  }));
