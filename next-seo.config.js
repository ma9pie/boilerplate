import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  TWITTER_URERNAME,
} from '@/constants';

const seoConfig = {
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: OG_IMAGE,
        alt: 'og image',
      },
    ],
  },
  twitter: {
    site: TWITTER_URERNAME,
    handle: TWITTER_URERNAME,
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
