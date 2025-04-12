<!-- <script setup lang="ts"> -->
<!-- <script setup>
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
    href: "/dashboard",
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
         -- No sub items --
        <SidebarMenuItem v-if="!item.children">
          <SidebarMenuButton asChild>
            <RouterLink :to="item.href" class="flex items-center w-full">
              <component :is="item.icon" class="w-4 h-4" />
              <span>{{ item.title }}</span>
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

        -- With sub items --
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
</template> -->

<!-- <script setup lang="ts"> -->
<script setup>
import {
  Home,
  Package,
  ShoppingCart,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  User,
  Menu,
} from "lucide-vue-next";

import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RouterLink } from "vue-router";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const logoIcon = ChevronRight;

const props = defineProps({
  userEmail: {
    type: String,
  },
  userName: {
    type: String,
  },
});

const logout = () => {
  console.log("Clicked from AppSidebar");
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  axios.defaults.headers.common["Authorization"] = undefined;
  router.push("/");
};

// Sidebar menu structure
const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
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
    <SidebarHeader class="bg-gray-100 rounded-lg border mb-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Menu :size="36" class="mr-auto" />
                Poo Tech
                <ChevronDown class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--bits-dropdown-menu-anchor-width]">
              <DropdownMenuItem>
                <span>Acme Inc</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Acme Corp.</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
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
    <SidebarFooter class="bg-gray-100 rounded-lg border mt-auto mb-0 ml-0 mr-0">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton class="p-4">
                <User :size="28" class="mr-auto" />
                <div class="flex flex-col">
                  <span class="text-xs">Email: {{ props.userEmail }}</span>
                  <span class="text-xs">Name: {{ props.userName }}</span>
                </div>
                <ChevronRight class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              class="w-[--reka-popper-anchor-width] ml-3 mb-7"
            >
              <DropdownMenuItem>
                <SidebarMenuButton @click="logout">
                  <span class="m-auto">Logout</span>
                </SidebarMenuButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
