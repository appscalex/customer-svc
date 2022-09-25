const topMenuBarItems = [
  {
    href: '/home',
    title: 'Home  '
  },
  {
    href: '/about-us',
    title: 'About Us '
  },
  {
    href: '/services',
    title: 'Services'
  },
  {
    href: '/blog',
    title: 'Blog'
  },
  {
    href: '/company/our-team',
    title: 'Company ',
    submenu: [
      {
        href: '/company/our-team',
        title: 'Our Team'
      },
      {
        href: '/company/client',
        title: 'Clients'
      },
      {
        href: '/company/career',
        title: 'Careers',
      },
      {
        href: '/company/contact-us',
        title: 'Contact Us',
      }
    ]
  }
];

const servicesMenu =  [
];

export { servicesMenu, topMenuBarItems };
