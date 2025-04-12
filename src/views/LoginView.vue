<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // ✅ add router
import AppSidebar from "@/components/AppSidebar.vue";
import { API_BASE_URL_LOGIN, API_ENDPOINTS } from "@/utils/apiConfig";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

// console.log(email.value);

const login = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL_LOGIN}${API_ENDPOINTS.LOGIN}`,
      {
        email: email.value,
        password: password.value,
      }
    );

    const access = response.data.access;
    const refresh = response.data.refresh;

    // ✅ Store tokens manually
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    // ✅ Optional: use this for future axios calls if needed
    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    router.push("/dashboard"); // Go to dashboard or home
  } catch (err) {
    error.value = "Invalid credentials";
    console.error("Login error:", err);
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="w-full max-w-md p-6 bg-white rounded-lg shadow-md inset-shadow-sm"
    >
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <p v-if="error" class="text-red-600 text-sm mb-2">{{ error }}</p>
        <button
          type="submit"
          class="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
