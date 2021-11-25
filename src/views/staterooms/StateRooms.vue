<template>
  <div v-if="staterooms.length">
    <div
      class="max-w-xl mx-auto py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Shop by Collection
      </h2>
      <p class="mt-4 text-base text-gray-500">
        Each season, we collaborate with world-class designers to create a
        collection inspired by the natural world.
      </p> -->

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
</template>

<script>
export default {
  data() {
    return {
      staterooms: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/staterooms")
      .then((res) => res.json())
      .then((data) => (this.staterooms = data))
      .catch((err) => console.log(err.message));
  },
};
</script>