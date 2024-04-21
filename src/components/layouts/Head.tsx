import { NextSeo } from 'next-seo';
import React from 'react';

import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants';

interface Props {
  title?: string;
  description?: string;
}

const Component = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
}: Props) => {
  return <NextSeo title={title} description={description}></NextSeo>;
};

export default Component;
