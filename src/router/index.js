import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Login from '../components/Login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
     path: '/login',
     name: 'login',
   //route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../components/Login-web.vue')
   },
   {
    path: '/register',
    name: 'register',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register-web.vue')
  },
  {
    path: '/popup',
    name: 'popup',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register-popup.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Navbar-web.vue')
  },
  {
    path: '/select',
    name: 'select',

    component: () => import(/* webpackChunkName: "about" */ '../components/Select-web.vue')
  },
  {
  path: '/navhome',
  name: 'navhome',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Nav-home.vue')
  },
  {
  path: '/location',
  name: 'location',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Location-web.vue')
  },
  {
    path: '/review',
    name: 'review',
    //route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Review-web.vue')
    },
    {
      path: '/menumap',
      name: 'menumap',
      //route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/Menu-map.vue')
      },
      {
        path: '/city',
        name: 'city',
        //route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../components/City-web.vue')
        },
        {
          path: '/gl',
          name: 'gl',
          //route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../citymain/Cityimg-web.vue')
          },
          {
            path: '/ct',
            name: 'ct',
            //route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../citymain/Citytext-web.vue')
            },
            {
              path: '/citynext',
              name: 'citynext',
              //route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../components/City-next.vue')
              },
              {
                path: '/glfac',
                name: 'glfac',
                //route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                  component: () => import(/* webpackChunkName: "about" */ '../citymain/Cityimgfac-web.vue')
                },
                {
                  path: '/ctnav',
                  name: 'ctnav',
                  //route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../citymain/Citynav-web.vue')
                  },
                  {
                    path: '/selectmap',
                    name: 'selectmap',
                    //route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ '../components/Map-web.vue')
                    },
                    {
                      path: '/selectmapz',
                      name: 'selectmapz',
                      //route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "about" */ '../components/Logintest-web.vue')
                      },
                      {
                        path: '/selectmap1',
                        name: 'selectmap1',
                        //route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                          // which is lazy-loaded when the route is visited.
                          component: () => import(/* webpackChunkName: "about" */ '../components/Map-web1.vue')
                        },
                        {
                          path: '/selectmap2',
                          name: 'selectmap2',
                          //route level code-splitting
                          // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () => import(/* webpackChunkName: "about" */ '../components/Map-web2.vue')
                          },
                          {
                            path: '/selectmap3',
                            name: 'selectmap3',
                            //route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                              // which is lazy-loaded when the route is visited.
                              component: () => import(/* webpackChunkName: "about" */ '../components/Map-web3.vue')
                            },
                            {
                              path: '/selectmap4',
                              name: 'selectmap4',
                              //route level code-splitting
                              // this generates a separate chunk (about.[hash].js) for this route
                                // which is lazy-loaded when the route is visited.
                                component: () => import(/* webpackChunkName: "about" */ '../components/Map-web4.vue')
                              },
                              {
                                path: '/citynextreview',
                                name: 'citynextreview',
                                //route level code-splitting
                                // this generates a separate chunk (about.[hash].js) for this route
                                  // which is lazy-loaded when the route is visited.
                                  component: () => import(/* webpackChunkName: "about" */ '../components/Reviewmain-web.vue')
                                },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
