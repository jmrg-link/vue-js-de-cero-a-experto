export default {
    name: 'auth' ,
    component: () => import( /* webpackChunckName:'Auth Layout' */ '@/modules/auth/layouts/AuthLayout' ) ,
    children: [
        {
            path: '' ,
            name: 'login' ,
            component: () => import( /* webpackChunckName:'Login' */ '@/modules/auth/views/Login.vue' ) ,
        } ,
        {
            path: '/register' ,
            name: 'register' ,
            component: () => import( /* webpackChunckName:'Register' */ '@/modules/auth/views/Register.vue' ) ,
        } ,
    ]
}