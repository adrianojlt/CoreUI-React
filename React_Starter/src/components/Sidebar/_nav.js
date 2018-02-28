export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Wizard',
      url: '/wizard',
      icon: 'icon-drawer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Profiles',
      url: '/profiles',
      icon: 'icon-list'
    },
    {
      name: 'List',
      url: '/list',
      icon: 'icon-list'
    },
    {
      name: 'Frameworks',
      url: '/frameworks',
      icon: 'icon-list',
      children: [
        {
          name: 'Knockout',
          url: '/frameworks/Knockout',
          icon: 'icon-puzzle'
        },
        {
          name: 'Angular',
          url: '/frameworks/Angular',
          icon: 'icon-puzzle'
        },
        {
          name: 'Handlebars',
          url: '/frameworks/Handlebars',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
};
