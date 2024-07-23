export type SocialLink ={
  platform: string;
  href: string;
  text: string;
  icon: string;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src:string;
    alt:string;
  };
  socialLink: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: 'Mental Health Clinic of Idaho',
  title: 'Psychiatry & Mental Health Clinic located in Boise, Meridian and Boise, ID',
  description: 'Trusted Psychiatry & Mental Health Clinic serving the patients of Boise, Meridian and Boise, ID. Contact us at 208-506-3618 or visit us at 3919 East Overland Road, Meridian, ID 83642.',
  image: {
    src: '/og.png',
    alt: 'Mental Health Clinic of Idaho',
  },
  socialLink: [
    {
      platform: 'facebook',
      href: 'https://www.facebook.com/MHCIDAHO/',
      text: 'Go to Facebook',
      icon: '@icons/facebook.svg',
    },
  ]
};

export default siteInfo;
