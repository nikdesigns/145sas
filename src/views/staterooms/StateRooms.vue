<template>
  <div
    v-if="error"
    class="max-w-xl mx-auto py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div class="rounded-md bg-red-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <ExclamationIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Error</h3>
          <div class="mt-2 text-sm text-red-700">
            <p>
              {{ error }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="staterooms.length">
    <div
      class="max-w-xl mx-auto py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <router-link
          :to="{ name: 'RoomDetails', params: { id: stateroom.id } }"
          v-for="stateroom in staterooms"
          :key="stateroom.name"
          class="group block"
        >
          <div
            aria-hidden="true"
            class="
              aspect-w-3 aspect-h-2
              rounded-lg
              overflow-hidden
              group-hover:opacity-75
            "
          >
            <img
              :src="stateroom.imageSrc"
              :alt="stateroom.imageAlt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            {{ stateroom.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ stateroom.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <SkeletonStaterooms />
  </div>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/solid";
import SkeletonStaterooms from "@/components/Loaders/SkeletonStaterooms";
import getStaterooms from "@/composables/getStaterooms";

export default {
  components: {
    SkeletonStaterooms,
    ExclamationIcon,
  },
  setup() {
    const { staterooms, error, load } = getStaterooms();
    load();

    return { staterooms, error };
  },
};
</script>