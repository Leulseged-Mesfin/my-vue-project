<script setup>
import { useToast } from "vue-toastification";
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, reactive, onMounted, computed } from "vue";
import { API_BASE_URL, API_ENDPOINTS } from "@/utils/apiConfig";

const router = useRouter();

const toast = useToast();

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  fetchProducts: {
    type: Function,
    required: true,
  },
});

const productId = props.productId;

const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

const state = reactive({
  product: {},
});

// console.log(state.product);

const form = reactive({
  name: "",
  category: "",
  description: "",
  stock: "",
  price: "",
});

console.log(form.category);

const handleSubmit = async () => {
  const newProduct = {
    name: form.name,
    category: form.category,
    stock: form.stock,
    description: form.description,
    price: form.price,
  };

  try {
    const response = await axios.put(
      `${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}${productId}`,
      newProduct
    );
    toast.success("Product Updated successfully");
    closeModal();
    props.fetchProducts();
  } catch (error) {
    toast.error("Error adding product");
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}${productId}`
    );
    state.product = response.data;
    // Populate the inputs
    form.name = state.product.name;
    form.category = state.product.category;
    form.description = state.product.description;
    form.stock = state.product.stock;
    form.price = state.product.price;
  } catch (error) {
    console.log("Error fetching product");
  }
});
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center drop-shadow-sm backdrop-blur-xl backdrop-opacity-90 z-50"
  >
    <div
      class="bg-white w-[600px] px-6 py-7 mb-4 rounded-lg border m-4 md:m-0 h-[600px] overflow-hidden"
    >
      <div class="overflow-scroll h-full">
        <!-- Modal Content Goes Here -->

        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Product</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Product Name"
              required
            />
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >Category</label
            >
            <select
              id="category"
              name="category"
              v-model="form.category"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Machinary">Machinary</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Stock</label>
            <input
              type="text"
              id="stock"
              name="stock"
              v-model="form.stock"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 10"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              v-model="form.description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add Description about the Product"
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Price </label>
            <input
              type="text"
              id="price"
              name="price"
              v-model="form.price"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Price"
              required
            />
          </div>

          <div>
            <button
              class="w-1/2 mx-auto flex justify-center bg-black hover:bg-gray-800 text-white font-bold mb-2 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
            <button
              @click="closeModal"
              class="w-1/2 mx-auto mt-1 flex justify-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
