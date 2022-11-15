import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import UserHome from '../views/UserHome'
import LogoPage from '../views/LogoPage'
import UserGetdool from '../components/user/UserGetdool'
import SellPage from '../components/user/SellPage'
import ShionPage from '../components/user/ShionPage'
import Getgood from '../components/user/GetGood'
import InFormation from '../components/user/InFormation'
import MessagePAge from '../components/user/MessagePage'
import InCome from '../components/user/InCome'
import CollectionPage from '../components/user/CollectionPage'
import SetUp from '../components/user/SetUp'
import TingHom from '../views/TingHom'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/tinghom', component: TingHom },
  {
    path: '/user',
    component: UserHome,
    redirect: '/sell',
    children: [
      { path: '/getdool', component: UserGetdool },
      { path: '/sell', component: SellPage },
      { path: '/shion', component: ShionPage },
      { path: '/getgood', component: Getgood },
      { path: '/information', component: InFormation },
      { path: '/message', component: MessagePAge },
      { path: '/income', component: InCome },
      { path: '/collection', component: CollectionPage },
      { path: '/setup', component: SetUp }

    ]

  },
  { path: '/logo', component: LogoPage }
]

const router = new VueRouter({
  routes
})

export default router
