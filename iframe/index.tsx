import { createRoot } from 'react-dom/client';

import { ChatConfig } from '@/common';

import { fetchConfig, WIDGET_URL } from './config';
import App from './src/app';

const VOICEFLOW_ID = 'voiceflow-chat';

const rootEl = document.createElement('div');
rootEl.id = VOICEFLOW_ID;
document.body.appendChild(rootEl);

const root = createRoot(rootEl);

window.voiceflow ??= {} as any;
window.voiceflow.chat ??= {} as any;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
window.voiceflow.chat.open ??= noop;
window.voiceflow.chat.close ??= noop;
window.voiceflow.chat.show ??= noop;
window.voiceflow.chat.hide ??= noop;
window.voiceflow.chat.interact ??= noop;

window.voiceflow.chat.load = async (loadConfig: Partial<ChatConfig>) => {
  const config = await fetchConfig(loadConfig);

  root.render(<App {...config} widgetURL={WIDGET_URL} />);
};
