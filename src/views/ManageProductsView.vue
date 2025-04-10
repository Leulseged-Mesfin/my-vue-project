<script setup>
import DataTable from "@/components/DataTable.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "@/utils/apiConfig";

const items = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}`
    );
    items.value = response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
  }
};

onMounted(async () => {
  await fetchProducts();
});
</script>

<template>
  <div class="p-4 bg-gray-30 mt-20 overflow-y-auto h-[80vh]">
    <DataTable :items="items" :fetchProducts="fetchProducts" />
  </div>
</template>
