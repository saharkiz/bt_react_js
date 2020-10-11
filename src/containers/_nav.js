export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Projects']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Projects List',
    to: '/projects/list_projects',
    icon: 'cil-user',
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Job Orders']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Tasks']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['V-Members']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['V-Tube']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['V-News']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['V-Events']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['V-Shoppe']
  },


  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administration']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'System User',
    to: '/users/list_admin',
    icon: 'cil-user',
  },
]

