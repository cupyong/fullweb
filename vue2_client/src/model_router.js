'use strict';

module.exports=[
   {
     path:'teacher',
     component: require('./views/model_view/teacher.vue'),
     alias: '/teacher'
   }
,   {
     path:'user',
     component: require('./views/model_view/user.vue'),
     alias: '/user'
   }
,   {
     path:'zhike',
     component: require('./views/model_view/zhike.vue'),
     alias: '/zhike'
   }
]