/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Move from '@/components/Move.vue';
import Rotate from '@/components/RotateScale.vue';
import Clock from '@/components/Clock.vue';
import Gsap from '@/components/Gsap.vue';
import Obj from '@/components/Obj.vue';

Vue.use(VueRouter);

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: Home },
    { path: '/move', component: Move },
    { path: '/rotate', component: Rotate },
    { path: '/clock', component: Clock },
    { path: '/gsap', component: Gsap },
    { path: '/obj', component: Obj },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = new VueRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

export default router;
