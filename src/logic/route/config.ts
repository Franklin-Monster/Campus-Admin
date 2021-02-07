import { lazy } from 'react'

const EnterCollege = lazy(() => import('@p/enter-info/EnterCollege'))
const EnterStaff = lazy(() => import('@p/enter-info/EnterStaff'))
const College = lazy(() => import('@p/enter-info/College'))
const Institute = lazy(() => import('@p/enter-info/Institute'))
const Specialty = lazy(() => import('@p/enter-info/Specialty'))
const Student = lazy(() => import('@p/enter-info/Student'))
const EnterStudent = lazy(() => import('@p/enter-info/EnterStudent'))
const Teacher = lazy(() => import('@p/enter-info/Teacher'))
const EnterTeacher = lazy(() => import('@p/enter-info/EnterTeacher'))
const Statistics = lazy(() => import('@p/statistics/Satistics'))
const InstituteAvgMark = lazy(() => import('@p/statistics/InstituteAvgMark'))
const SpecialtyAvgMark = lazy(() => import('@p/statistics/SpecialtyAvgMark'))
const StudentMarkWithOnline = lazy(() => import('@p/statistics/StudentMarkWithOnline'))

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
    {
        path: '/student',
        component: Student,
        root: []
    },
    {
        path: '/enterstudent',
        component: EnterStudent,
        root: []
    },
    {
        path: '/teacher',
        component: Teacher,
        root: []
    },
    {
        path: '/enterteacher',
        component: EnterTeacher,
        root: []
    },
    {
        path: '/statistics',
        component: Statistics,
        root: []
    },
    {
        path: '/instituteavgmark',
        component: InstituteAvgMark,
        root: []
    },
    {
        path: '/specialtyavgmark',
        component: SpecialtyAvgMark,
        root: []
    },
    {
        path: '/studentmarkwithonline',
        component: StudentMarkWithOnline,
        root: []
    }

]

export default routes