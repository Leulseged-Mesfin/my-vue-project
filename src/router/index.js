// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import AddProductView from "@/views/AddProductView.vue";
import ManageProductsView from "@/views/ManageProductsView.vue";
import AddOrderView from "@/views/AddOrderView.vue";
import ManageOrdersView from "@/views/ManageOrdersView.vue";
import OrderDetailView from "@/views/OrderDetailView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import EditProductView from "@/views/EditProductView.vue";
import EditOrderView from "@/views/EditOrderView.vue";
import LoginView from "@/views/LoginView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          component: DashboardView,
        },
        {
          path: "/products/add",
          component: AddProductView,
        },
        {
          path: "/products/manage",
          component: ManageProductsView,
        },
        {
          path: "/orders/add",
          component: AddOrderView,
        },
        {
          path: "/orders/manage",
          component: ManageOrdersView,
        },
        {
          path: "/orders/:id",
          component: OrderDetailView,
        },
        {
          path: "/orders/:id/edit",
          component: EditOrderView,
        },
        {
          path: "/products/:id",
          component: ProductDetailView,
        },
        {
          path: "/products/:id/edit",
          component: EditProductView,
        },
        {
          path: "/profile",
          component: ProfileView,
        },
      ],
    },
  ],
});

export default router;
