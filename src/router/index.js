import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home.vue";
import Login from "./../pages/Login.vue";
import store from "./../store";

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			name: "home",
			meta: { auth: true, guest: false },
			component: Home,
		},
		{
			path: "/login",
			name: "login",
			meta: { guest: true, auth: false },
			component: Login,
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth) {
		if (!store.getters.userStatus) {
			router.push({ name: "login" });
		}
	}

	if (to.meta.guest) {
		if (store.getters.userStatus) {
			router.push({ name: "home" });
		}
	}

	next();
});

export default router;
