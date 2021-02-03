import { lazy } from 'react'

const EnterCollege = lazy(() => import('@p/enter-info/EnterCollege'))
const EnterStaff = lazy(() => import('@p/enter-info/EnterStaff'))
const College = lazy(() => import('@p/enter-info/College'))
const Institute = lazy(() => import('@p/enter-info/Institute'))
const Specialty = lazy(() => import('@p/enter-info/Specialty'))

interface RouteType {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    exact?: boolean,
}

const routes: RouteType[] = [
    {
        path: '/college',
        component: College,
        root: []
    },
    {
        path: '/institute',
        component: Institute,
        root: []
    },
    {
        path: '/specialty',
        component: Specialty,
        root: []
    },
    {
        path: '/entercollege',
        component: EnterCollege,
        root: [],
    },
    {
        path: '/enterstaff',
        component: EnterStaff,
        root: [],
    },

]

export default routes