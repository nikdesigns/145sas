<template>
  <div class="my-12">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 class="sr-only">Products</h2>
      <div
        class="
          pb-5
          border-b border-gray-200
          sm:flex sm:items-center sm:justify-between
        "
      >
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Promotional Sponsorship
        </h3>
        <div class="sm:mt-0 sm:ml-4">
          <label for="mobile-search-candidate" class="sr-only">Search</label>
          <label for="desktop-search-candidate" class="sr-only">Search</label>
          <div class="flex rounded-md shadow-sm">
            <div class="relative flex-grow focus-within:z-10">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="mobile-search-candidate"
                id="mobile-search-candidate"
                class="
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:hidden
                  border-gray-300
                "
                placeholder="Search"
              />
              <input
                type="text"
                name="desktop-search-candidate"
                id="desktop-search-candidate"
                class="
                  hidden
                  focus:ring-indigo-500 focus:border-indigo-500
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:block sm:text-sm
                  border-gray-300
                "
                placeholder="Search candidates"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span class="ml-2">Sort</span>
              <ChevronDownIcon
                class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        class="
          -mx-px
          border-l border-gray-200
          grid grid-cols-2
          sm:mx-0
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative p-4 border-r border-b border-gray-200 sm:p-6"
        >
          <div
            class="
              rounded-lg
              overflow-hidden
              bg-gray-200
              aspect-w-1 aspect-h-1
              group-hover:opacity-75
            "
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="w-full h-full object-center object-cover"
            />
            <avatar-icon class="m-2"></avatar-icon>
          </div>
          <div class="pt-10 pb-4 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>

            <p class="mt-4 text-base font-medium text-gray-900">
              {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StarIcon,
  ChevronDownIcon,
  SearchIcon,
  SortAscendingIcon,
} from "@heroicons/vue/solid";
import AvatarIcon from "../../global/AvatarIcon.vue";

const products = [
  {
    id: 1,
    name: "Widebody Ballpoint Pen",
    price: "$750",
    rating: 5,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_9875_1627906531.jpg",
    imageAlt: "TODO",
    href: "#",
    airlines: true,
  },
  {
    id: 2,
    name: "Lip Balm",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_8770_1627459260.jpg",
    imageAlt: "TODO",
    href: "#",
    airlines: false,
  },
  {
    id: 3,
    name: "Mini Hinged Mint Tin",
    price: "$1800",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_4809_1627477081.jpg",
    imageAlt: "TODO",
    href: "#",
    airlines: false,
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
    airlines: true,
  },
  // More products...
];

export default {
  components: {
    StarIcon,
    AvatarIcon,
    ChevronDownIcon,
    SearchIcon,
    SortAscendingIcon,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>