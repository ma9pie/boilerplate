import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layouts/Head';
import Layout from '@/components/layouts/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page Not Found"></Head>
      <Container>
        <Text>404</Text>
        <Text>Page Not Found</Text>
      </Container>
    </Layout>
  );
};

export default NotFound;

const Container = styled.div`
  ${tw``};
`;
const Text = styled.p`
  ${tw``};
`;
