import Entity from './components/Entity'
import Profiles from './components/Profiles'
import Supervision from './components/Supervision'
import Security from './components/Security'
import Notifications from './components/Notifications'
import Display from './components/Display'

const routes = [
  {
    path: '/',
    name: 'Entity',
    component: Entity,
    exact: true
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles,
    exact: false
  },
  {
    path: '/supervision',
    name: 'Supervision',
    component: Supervision,
    exact: false
  },
  {
    path: '/security',
    name: 'Security',
    component: Security,
    exact: false
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    exact: false
  },
  {
    path: '/display',
    name: 'Display',
    component: Display,
    exact: false
  }
]

export default routes