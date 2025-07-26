const topMenuBarItems = [
  {
    href: '#/home',
    title: 'Home  '
  },
  {
    href: '#/about-us',
    title: 'About Us '
  },
  {
    href: '#/services',
    title: 'Services'
  },
  {
    href: '#/blog?id=1',
    title: 'Blogs'
  },
  {
    href: '#',
    title: 'Company ',
    submenu: [
      // {
      //   href: '/company/client',
      //   title: 'Clients'
      // },
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
