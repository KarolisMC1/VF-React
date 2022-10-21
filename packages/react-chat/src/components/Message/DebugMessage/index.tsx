import { VariantProps } from '@stitches/react';

import { topCaret as TopCaret } from '@/assets/svg';

import { Container } from './styled';

export interface DebugMessageProps extends React.PropsWithChildren, VariantProps<typeof Container> {}

const DebugMessage: React.FC<DebugMessageProps> = ({ children, ...props }) => (
  <Container {...props}>
    <TopCaret />
    {children}
  </Container>
);

export default Object.assign(DebugMessage, {
  Container,
});
