const topMenuBarItems = [
  {
    href: '/app/home',
    title: 'Home  '
  },
  {
    href: '/app/about-us',
    title: 'About Us '
  },
  {
    href: '/app/services',
    title: 'Services'
  },
  {
    href: '/app/blog?id=1',
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
