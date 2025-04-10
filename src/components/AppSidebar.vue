<!-- <script setup lang="ts"> -->
<script setup>
import {
  Home,
  Package,
  ShoppingCart,
  Settings,
  ChevronDown,
} from "lucide-vue-next";

import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import { RouterLink } from "vue-router";

// Sidebar menu structure
const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Category",
    icon: Package,
    children: [
      { title: "Add Category", href: "/categories/add" },
      { title: "Manage Categories", href: "/categories/manage" },
    ],
  },
  {
    title: "Product",
    icon: Package,
    children: [
      { title: "Add Product", href: "/products/add" },
      { title: "Manage Products", href: "/products/manage" },
    ],
  },
  {
    title: "Order",
    icon: ShoppingCart,
    children: [
      { title: "Add Orders", href: "/orders/add" },
      { title: "Manage Orders", href: "/orders/manage" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Profile", href: "/profile" },
      { title: "Preferences", href: "/settings/preferences" },
    ],
  },
];
</script>
<template>
  <Sidebar variant="floating" collapsible="icon">
    <SidebarMenu>
      <template v-for="item in menuItems" :key="item.title">
        <!-- No sub items -->
        <SidebarMenuItem v-if="!item.children">
          <SidebarMenuButton asChild>
            <RouterLink :to="item.href" class="flex items-center w-full">
              <component :is="item.icon" class="w-4 h-4" />
              <span>{{ item.title }}</span>
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <!-- With sub items -->
        <Collapsible v-else defaultOpen class="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton asChild>
                <a :href="item.href" class="flex items-center w-full">
                  <component :is="item.icon" class="w-4 h-4" />
                  <span>{{ item.title }}</span>
                  <ChevronDown
                    class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                  />
                </a>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem
                  v-for="(child, i) in item.children"
                  :key="i"
                >
                  <SidebarMenuSubButton asChild>
                    <RouterLink :to="child.href">
                      <span>{{ child.title }}</span>
                    </RouterLink>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </template>
    </SidebarMenu>
  </Sidebar>
</template>
