<template>
  <div
    v-if="error"
    class="
      max-w-xl
      mx-auto
      py-2
      px-4
      sm:py-8 sm:px-6
      lg:max-w-7xl lg:px-8
      min-h-screen
    "
  >
    <div class="rounded-md bg-red-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <QuestionMarkCircleIcon
            class="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">
            Looking for something?
          </h3>
          <div class="mt-2 text-sm text-red-700">
            <p>
              {{ error }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/">
      <p class="text-sm underline font-normal text-gray-500 m-2">
        Click here to go back to the home page
      </p>
    </router-link>
  </div>
  <div v-if="stateroom">
    <div
      class="
        max-w-2xl
        mx-auto
        py-2
        px-4
        sm:py-8 sm:px-6
        lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8
      "
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4">
          <h1
            class="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            {{ stateroom.name }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">
            Stateroom information
          </h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">
              ${{ stateroom.price }}
            </p>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ stateroom.description }}</p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img
            :src="stateroom.imageSrc"
            :alt="stateroom.imageAlt"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product form -->
      <div
        class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start"
      >
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <div class="mt-1">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                <li
                  v-for="amen in stateroom.amenities"
                  :key="amen.id"
                  class="text-gray-400"
                >
                  <span class="text-gray-600">{{ amen.desc }}</span>
                </li>
              </ul>
            </div>
          </div>

          <form>
            <div class="mt-4">
              <a
                href="#"
                class="
                  group
                  inline-flex
                  text-sm text-gray-500
                  hover:text-gray-700
                "
              >
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon
                  class="
                    flex-shrink-0
                    ml-2
                    h-5
                    w-5
                    text-gray-400
                    group-hover:text-gray-500
                  "
                  aria-hidden="true"
                />
              </a>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="
                  w-full
                  bg-indigo-600
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-indigo-500
                "
              >
                Add to bag
              </button>
            </div>
            <div class="mt-6 text-center">
              <a href="#" class="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  class="
                    flex-shrink-0
                    mr-2
                    h-6
                    w-6
                    text-gray-400
                    group-hover:text-gray-500
                  "
                  aria-hidden="true"
                />
                <span class="text-gray-500 hover:text-gray-700"
                  >Lifetime Guarantee</span
                >
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  <div v-if="loading">
    <SkeletonRoomDetails />
  </div>
</template>

<script>
import getStateroom from "@/composables/getStateroom";
import SkeletonRoomDetails from "@/components/Loaders/SkeletonRoomDetails";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  ExclamationIcon,
} from "@heroicons/vue/solid";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import {
  ShieldCheckIcon,
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/vue/outline";

export default {
  props: ["id"],

  setup(props) {
    const { stateroom, error, loading, load } = getStateroom(props.id);
    load();

    return { stateroom, error, loading };
  },

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    StarIcon,
    HeartIcon,
    MinusSmIcon,
    ExclamationIcon,
    PlusSmIcon,
    SkeletonRoomDetails,
  },
};
</script>