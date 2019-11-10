
import Home from '../page/Home'
const router=[
    {
        path:'/home',
        component:Home
    },
    {
        from:'/',
        to:'/home'
    }
]
export default router