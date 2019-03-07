import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
    path: '/admin/',
    component: MainPage,
    meta: {
            title: "Главная",
            kind: "main",
            col: ""
           },
    },
    { 
    path: '/admin/attributes',
    component: () => import('./views/AttributesPage.vue'),
    meta: {
            title: "Атрибуты",
            kind: "attribute",
            col: "Единица измерения"
          },
    },    
    { 
        path: '/admin/lists',
        component: () => import('./views/ListsPage.vue'),
        meta: {
                title: "Наборы атрибутов",
                kind: "attrlists",
                col: ""
               },
    },
    { 
        path: '/admin/filters',
        component: () => import('./views/FiltersPage.vue'),
        meta: {
                title: "Наборы фильтрации",
                kind: "attrfilters",
                col: ""
               },
    },  
  ]
})
