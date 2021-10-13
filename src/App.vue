<template>
  <div class="max-w-500 px-8 py-20 mx-auto">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1 py-2">A:</div>
      <div class="col-span-2 md:col-span-1">
        <div class="border border-solid border-gray-300 p-2">
          <input
            @input="onInputA"
            type="number"
            class="bg-transparent outline-none w-full border-none"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4 mt-4">
      <div class="col-span-1 py-2">B:</div>
      <div class="col-span-2 md:col-span-1">
        <div class="border border-solid border-gray-300 p-2">
          <input
            @input="onInputB"
            type="number"
            class="bg-transparent outline-none w-full border-none"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4 mt-4">
      <div class="col-span-1 py-2">Sum:</div>
      <div class="col-span-2">
        <div class="border border-solid border-gray-300 p-2">
          <input
            type="number"
            class="bg-transparent outline-none w-full border-none"
            :value="sum"
          />
        </div>
      </div>
      <div class="relative col-span-3">
        <button
          @click="onSum"
          class="
            md:absolute md:bottom-full md:right-0
            border border-solid border-blue-300
            py-3
            px-10
          "
        >
          Click
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const a = ref("0");
    const b = ref("0");
    const sum = computed<number>(() => {
      return store.state.sum;
    });

    const onSum = () => {
      store.dispatch("setSum", parseInt(a.value) + parseInt(b.value));
    };

    const onInputA = (e: any) => {
      a.value = e.target.value;
    };

    const onInputB = (e: any) => {
      b.value = e.target.value;
    };

    return {
      sum,
      a,
      b,
      onSum,
      onInputA,
      onInputB,
    };
  },
};
</script>

<style></style>
