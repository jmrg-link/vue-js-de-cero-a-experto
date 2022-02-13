export default {
    name: 'auth' ,
    component: () => import( /* webpackChunckName:'Auth Layout' */ '@/modules/auth/layouts/AuthLayout' ) ,
    children: []
}