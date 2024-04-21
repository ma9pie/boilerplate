import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ className, children }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  ${tw``};
`;
