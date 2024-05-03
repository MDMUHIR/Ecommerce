import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Support from "./views/Support.vue";
import Contact from "./views/Contact.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";
import Product from "./views/Product.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/all-products",
        name: "products",
        component: Products,
      },
      {
        path: "/product/:id",
        name: "product",
        component: Product,
      },
      {
        path: "/support",
        name: "support",
        component: Support,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/cart",
        name: "cart",
        component: Cart,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
