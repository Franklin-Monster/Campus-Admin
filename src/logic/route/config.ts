import { lazy } from 'react'

const EnterCollege = lazy(() => import('@/pages/enter-info/EnterCollege'))
const EnterTeacher = lazy(() => import('@/pages/enter-info/EnterTeacher'))
const EnterStudent = lazy(() => import('@/pages/enter-info/EnterStudent'))
const College = lazy(() => import('@/pages/enter-info/College'))

interface RouteType {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    exact?: boolean,
}

const routes: RouteType[] = [
    {
        path: '/entercollege',
        component: EnterCollege,
        root: [],
    },
    {
        path: '/enterteacher',
        component: EnterTeacher,
        root: [],
    },
    {
        path: '/enterstudent',
        component: EnterStudent,
        root: [],
    },
    {
        path: '/college',
        component: College,
        root: []
    }
    
]

export default routes