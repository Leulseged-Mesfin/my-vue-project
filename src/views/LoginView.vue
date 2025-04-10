<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  router.push("/");
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
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            type="text"
            id="username"
            class="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
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
