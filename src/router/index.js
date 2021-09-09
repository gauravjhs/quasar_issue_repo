import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '',
        redirect: '/home/borrower-kpi/BCD/documents'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'borrower-kpi',
                component: () => import(/* webpackChunkName: "kpi" */ '../components/TestKPIDashboard.vue'),
                redirect: 'borrower-kpi/list',
                children: [
                    {
                        path: 'list',
                        name: 'TestKPI',
                        component: () => import(/* webpackChunkName: "kpi" */ '../components/TestKPI.vue')
                    },
                    {
                        path: ':testParam',
                        name: 'TestKPIDetailsDashboard',
                        props: (route) => ({ testParam: route.params.testParam }),
                        component: () => import(/* webpackChunkName: "kpi" */ '../components/TestKPIDetailsDashboard.vue'),
                        children: [
                            {
                                path: 'kpi',
                                name: 'TestKPIDetails',
                                props: (route) => ({ testParam: route.params.testParam }),
                                component: () => import(/* webpackChunkName: "kpi" */ '../components/TestKPIDetails.vue')
                            },
                            {
                                path: 'documents',
                                name: 'TestPageDocuments',
                                props: (route) => ({ testParam: route.params.testParam }),
                                component: () => import(/* webpackChunkName: "kpi" */ '../components/TestPageDocuments.vue')
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
