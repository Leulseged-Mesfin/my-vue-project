<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ProductBackButton from "./ProductBackButton.vue";

const route = useRoute();

const product = ref([]);
// console.log(product.value);

const productId = route.params.id;

const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
  }
};

// Fetch product on component mount
onMounted(() => {
  fetchProduct(productId);
});
</script>

<template>
  <ProductBackButton />
  <div class="container m-auto max-w-2xl py-24">
    <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
      <h2 class="text-3xl text-center font-semibold mb-6">Product Details</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg mb-2">
            <span class="text-lg font-semibold mb-2">Product: </span
            >{{ product.name }}
          </h3>
          <p class="text-lg text-black mb-2">
            <span class="text-lg font-semibold mb-2">Category: </span
            >{{ product.category }}
          </p>
          <p class="text-lg text-black mb-2">
            <span class="text-lg font-semibold mb-2">Stock: </span
            >{{ product.stock }}
          </p>
          <p class="text-lg text-black mb-2">
            <span class="text-lg font-semibold mb-2">Price: </span
            >{{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
