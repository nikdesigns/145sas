<template>
  <div class="">
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
          :to="{ name: 'RoomDetails', params: { id: category.id } }"
          v-for="category in categories"
          :key="category.name"
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
              :src="category.imageSrc"
              :alt="category.imageAlt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            {{ category.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ category.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const categories = [
  {
    id: 1,
    name: "Ocean View Stateroom",
    price: 5850,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "As you sail to Cozumel, you won’t want to miss a single moment. In an Ocean View stateroom, you’ll be treated to a beautiful new view every day! Spend the day exploring the sites and sounds of Cozumel, then retreat to your comfortable, well-appointed stateroom to relax.",
  },
  {
    id: 2,
    name: "Balcony Stateroom",
    price: 5850,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "Imagine waking up every morning, opening your balcony door, and being greeted with views of a brand-new and breathtaking part of the world. Reserve a Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room",
    amenities: [
      { id: 1, desc: "Max: 2 Passengers" },
      { id: 2, desc: "Luxurious Bedding" },
      { id: 3, desc: "Two twin beds or one queen-size bed" },
      { id: 4, desc: "Sitting Area" },
      { id: 5, desc: "Private bath with shower, vanity area, and hair dryer" },
      { id: 6, desc: "24-Hour Room Service*" },
      { id: 7, desc: "Round-the-Clock Stateroom Attendant" },
      { id: 8, desc: "Nightly Turn-Down Service" },
      { id: 9, desc: "Interactive TV & Movies" },
      { id: 10, desc: "In-Room Safe" },
      { id: 11, desc: "Phone and Voicemail Service" },
    ],
  },
];

export default {
  setup() {
    return {
      categories,
    };
  },
};
</script>