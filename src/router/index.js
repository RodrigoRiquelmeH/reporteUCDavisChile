// import Home from '../pages/Home'
import projects from '@/store/projects.js';
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */"../pages/Home.vue"),
        children: [
            {
                path: '/presentacion',
                name: 'Presentacion',
                // component: Home,
            },
            {
                path: '/uc-davis-eeuu',
                name: 'UCDavisEEEUU',
                // component: Home,
            },
            {
                path: '/relacion-historica',
                name: 'RelacionHistorica',
                // component: Home,
            },
            {
                path: '/uc-davis-chile',
                name: 'UCDavisChile',
                // component: Home,
            },
            {
                path: '/nuestra-mision',
                name: 'Mision',
                // component: Home,
            },
            {
                path: '/impacto',
                name: 'Impacto',
                // component: Home,
            },
            {
                path: '/quienes-somos',
                name: 'QuienesSomos',
                // component: Home,
            },
            {
                path: '/areas-trabajo',
                name: 'AreasTrabajo',
                // component: Home,
            },
            {
                path: '/aporte-simetrico',
                name: 'AporteSimetrico',
                // component: Home,
            },
            {
                path: '/cifras',
                name: 'Cifras',
                // component: Home,
            },
            {
                path: '/proyectos',
                name: 'Proyectos',
                // component: Home,
            },
            {
                path: '/reporte/',
                name: 'Reporte',
                // component: Home,
            }
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import("../pages/elements/404"),
    },
    {
        path: '/proyectos/:slug',
        name: 'ProjectDetail',
        component: () => import(/* webpackChunkName: "ProjectDetail" */"../pages/ProjectDetail.vue"),
        beforeEnter: (to, from, next) => {
            const exists = projects.list.find(
                project => project.slug === to.params.slug
            );
            if (exists) {
                next();
            } else {
                next({ name: "NotFound" });
            }
        }
    },
    {
        path: '/impacto/:anexo',
        name: 'Anexo',
        component: () => import("../pages/Anexo")
    },
    {
        path: '/uc-davis-chile/linea-tiempo',
        name: 'TimeLine',
        component: () => import("../pages/TimeLinePage.vue")
    },
    {
        path: '/relacion-historica/hitos',
        name: 'Hitos',
        component: () => import("../pages/HitosPage.vue")
    }
];