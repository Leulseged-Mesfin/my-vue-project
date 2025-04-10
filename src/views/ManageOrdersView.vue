<script setup>
import DataTableOrders from "@/components/DataTableOrders.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "@/utils/apiConfig";

const items = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.ORDERS}`);
    items.value = response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
  }
});
</script>

<template>
  <div class="p-4 bg-gray-100 min-h-screen">
    <DataTableOrders :items="items" />
  </div>
</template>
