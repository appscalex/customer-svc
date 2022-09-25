const topMenuBarItems = [
  {
    href: '/landing-page1',
    title: 'Home  ',
    isCurrent: true
  },
  {
    href: '/about-us/about-us-two',
    title: 'About Us '
  },
  {
    href: '/landing-page5',
    title: 'Services'
  },
  {
    href: '/blog',
    title: 'Blog'
  },
  {
    href: '/pages/our-team',
    title: 'Company ',
    submenu: [
      {
        href: '/pages/our-team',
        title: 'Our Team'
      },
      {
        href: '/pages/client',
        title: 'Clients'
      },
      {
        href: '/pages/career',
        title: 'Careers',
      },
      {
        href: '/pages/contact-us',
        title: 'Contact Us',
      }
    ]
  }
];

const servicesMenu =  [
  {
    href: '/services/data-analytics',
    title: 'Data Analytics'
  }
];

export { servicesMenu, topMenuBarItems };
