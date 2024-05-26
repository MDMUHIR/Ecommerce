import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Support from "./views/Support.vue";
import Contact from "./views/Contact.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Cart from "./views/Cart.vue";
import Product from "./views/Product.vue";
import Categories from "./views/Categories.vue";

import AdminLayout from "./views/admin/AdminLayout.vue";
import ProductManage from "./views/admin/ProductManage.vue";

import { isAuthenticated, getUserType } from "../store/store";
import AdminDashboard from "./views/admin/AdminDashboard.vue";
import Navbar from "../components/Navbar.vue";
import AdminNavbar from "./views/admin/AdminNavbar.vue";
import CategoryManage from "./views/admin/CategoryManage.vue";
import UserControl from "./views/admin/UserControl.vue";
const routes = [
  {
    path: "/",
    components: {
      default: DefaultLayout,
    },
    children: [
      {
        path: "/",
        name: "home",
        components: {
          default: Home,
          NavigationBar: Navbar,
        },
      },

      {
        path: "/categories",
        name: "categories",
        components: {
          default: Categories,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/all-products",
        name: "products",
        components: {
          default: Products,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/product/:id",
        name: "product",
        components: {
          default: Product,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/support",
        name: "support",
        components: {
          default: Support,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/contact",
        name: "contact",
        components: {
          default: Contact,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/login",
        name: "login",
        components: {
          default: Login,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/register",
        name: "register",
        components: {
          default: Register,
          NavigationBar: Navbar,
        },
      },
      {
        path: "/cart",
        name: "cart",
        components: {
          default: Cart,
          NavigationBar: Navbar,
        },
      },

      // admin __________-__-__-___--_
      {
        path: "/admin",
        name: "admin",
        components: {
          default: AdminLayout,
          NavigationBar: AdminNavbar,
        },
        meta: {
          requiresAuth: true,
          type: "admin",
        },
        children: [
          {
            path: "",
            name: "adminDashboard",
            components: {
              default: AdminDashboard,
            },
          },
          {
            path: "categories",
            name: "categoryManage",
            components: {
              default: CategoryManage,
            },
          },
          {
            path: "products",
            name: "productManage",
            components: {
              default: ProductManage,
            },
          },
          {
            path: "users",
            name: "userControl",
            components: {
              default: UserControl,
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresAuth && to.meta.type != getUserType()) {
    next("/");
  } else {
    next();
  }
});

export default router;
