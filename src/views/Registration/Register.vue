<template>
  <!-- Background color split screen for large screens -->
  <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
  <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
  <div class="relative min-h-screen flex flex-col">
    <!-- Navbar -->
    <Disclosure as="nav" class="flex-shrink-0 bg-indigo-600" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo section -->
          <div class="flex items-center px-2 lg:px-0 xl:w-64">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                alt="Workflow"
              />
            </div>
          </div>

          <!-- Search section -->
          <div class="flex-1 flex justify-center lg:justify-end">
            <div class="w-full px-2 lg:px-6">
              <label for="search" class="sr-only">Search projects</label>
              <div class="relative text-indigo-200 focus-within:text-gray-400">
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
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  class="
                    block
                    w-full
                    pl-10
                    pr-3
                    py-2
                    border border-transparent
                    rounded-md
                    leading-5
                    bg-indigo-400 bg-opacity-25
                    text-indigo-100
                    placeholder-indigo-200
                    focus:outline-none
                    focus:bg-white
                    focus:ring-0
                    focus:placeholder-gray-400
                    focus:text-gray-900
                    sm:text-sm
                  "
                  placeholder="Search projects"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="
                bg-indigo-600
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-indigo-400
                hover:text-white hover:bg-indigo-600
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-indigo-600
                focus:ring-white
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuAlt1Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Links section -->
          <div class="hidden lg:block lg:w-80">
            <div class="flex items-center justify-end">
              <div class="flex">
                <a
                  href="#"
                  class="
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    text-indigo-200
                    hover:text-white
                  "
                  >Documentation</a
                >
                <a
                  href="#"
                  class="
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                    text-indigo-200
                    hover:text-white
                  "
                  >Support</a
                >
              </div>
              <!-- Profile dropdown -->
              <Menu as="div" class="ml-4 relative flex-shrink-0">
                <div>
                  <MenuButton
                    class="
                      bg-indigo-700
                      flex
                      text-sm
                      rounded-full
                      text-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-offset-indigo-700
                      focus:ring-white
                    "
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="
                      origin-top-right
                      absolute
                      z-10
                      right-0
                      mt-2
                      w-48
                      rounded-md
                      shadow-lg
                      py-1
                      bg-white
                      ring-1 ring-black ring-opacity-5
                      focus:outline-none
                    "
                  >
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >View Profile</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >Settings</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                        >Logout</a
                      >
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="px-2 pt-2 pb-3">
          <DisclosureButton
            as="a"
            href="#"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-white
              bg-indigo-800
            "
            >Dashboard</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="
              mt-1
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-indigo-200
              hover:text-indigo-100 hover:bg-indigo-600
            "
            >Support</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="px-2">
            <DisclosureButton
              as="a"
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-indigo-200
                hover:text-indigo-100 hover:bg-indigo-600
              "
              >Your Profile</DisclosureButton
            >
            <DisclosureButton
              as="a"
              href="#"
              class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-indigo-200
                hover:text-indigo-100 hover:bg-indigo-600
              "
              >Settings</DisclosureButton
            >
            <DisclosureButton
              as="a"
              href="#"
              class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-indigo-200
                hover:text-indigo-100 hover:bg-indigo-600
              "
              >Sign out</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 3 column wrapper -->
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 min-w-0 bg-white xl:flex">
        <div
          class="
            border-b border-gray-200
            xl:border-b-0
            xl:flex-shrink-0
            xl:w-64
            xl:border-r
            xl:border-gray-200
            bg-white
          "
        >
          <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <!-- Start left column area -->
            <nav aria-label="Progress">
              <ol role="list" class="overflow-hidden">
                <li
                  v-for="(step, stepIdx) in steps"
                  :key="step.name"
                  :class="[
                    stepIdx !== steps.length - 1 ? 'pb-10' : '',
                    'relative',
                  ]"
                >
                  <template v-if="stepIdx === currentStep - 2">
                    <div
                      v-if="stepIdx !== completedStep"
                      class="
                        -ml-px
                        absolute
                        mt-0.5
                        top-4
                        left-4
                        w-0.5
                        h-full
                        bg-indigo-600
                      "
                      aria-hidden="true"
                    />
                    <a class="relative flex items-start group">
                      <span class="h-9 flex items-center">
                        <span
                          class="
                            relative
                            z-10
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            bg-indigo-600
                            rounded-full
                            group-hover:bg-indigo-800
                          "
                        >
                          <CheckIcon
                            class="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span
                          class="text-xs font-semibold tracking-wide uppercase"
                          >{{ step.name }}</span
                        >
                        <span class="text-sm text-gray-500">{{
                          step.description
                        }}</span>
                      </span>
                    </a>
                  </template>
                  <template
                    v-else-if="stepIdx === currentStep - 1"
                    condition="stepIdx === currentStep - 1"
                  >
                    <div
                      v-if="stepIdx !== currentStep"
                      class="
                        -ml-px
                        absolute
                        mt-0.5
                        top-4
                        left-4
                        w-0.5
                        h-full
                        bg-gray-300
                      "
                      aria-hidden="true"
                    />
                    <a
                      class="relative flex items-start group"
                      aria-current="step"
                    >
                      <span class="h-9 flex items-center" aria-hidden="true">
                        <span
                          class="
                            relative
                            z-10
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            bg-white
                            border-2 border-indigo-600
                            rounded-full
                          "
                        >
                          <span
                            class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                          />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span
                          class="
                            text-xs
                            font-semibold
                            tracking-wide
                            uppercase
                            text-indigo-600
                          "
                          >{{ step.name }}</span
                        >
                        <span class="text-sm text-gray-500">{{
                          step.description
                        }}</span>
                      </span>
                    </a>
                  </template>
                  <template v-else>
                    <div
                      v-if="stepIdx !== steps.length - 1"
                      class="
                        -ml-px
                        absolute
                        mt-0.5
                        top-4
                        left-4
                        w-0.5
                        h-full
                        bg-gray-300
                      "
                      aria-hidden="true"
                    />
                    <a
                      :href="step.href"
                      class="relative flex items-start group"
                    >
                      <span class="h-9 flex items-center" aria-hidden="true">
                        <span
                          class="
                            relative
                            z-10
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            bg-white
                            border-2 border-gray-300
                            rounded-full
                            group-hover:border-gray-400
                          "
                        >
                          <span
                            class="
                              h-2.5
                              w-2.5
                              bg-transparent
                              rounded-full
                              group-hover:bg-gray-300
                            "
                          />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span
                          class="
                            text-xs
                            font-semibold
                            tracking-wide
                            uppercase
                            text-gray-500
                          "
                          >{{ step.name }}</span
                        >
                        <span class="text-sm text-gray-500">{{
                          step.description
                        }}</span>
                      </span>
                    </a>
                  </template>
                </li>
              </ol>
            </nav>
            <!-- End left column area -->
          </div>
        </div>

        <div class="bg-white lg:min-w-0 lg:flex-1">
          <div class="h-full px-4 py-6 sm:px-6 lg:px-8">
            <!-- Start main area-->

            <form action="#" method="POST">
              <!-- Step-1 start -->
              <step-one
                v-if="currentStep === 1"
                :form-data="formData"
                :company-types="companyTypes"
              ></step-one>

              <!-- Step-2 start -->
              <step-two v-if="currentStep === 2"></step-two>

              <!-- Step-3 start -->

              <step-three
                v-if="currentStep === 3"
                :rooms="rooms"
                :selected-rooms="selectedRooms"
                :selected="selected"
                :plans="plans"
              ></step-three>

              <!-- Step-4 start -->

              <step-four
                v-if="currentStep === 4"
                :other-person="otherPerson"
                :genders="genders"
                :selected="selected"
                :selected-country="selectedCountry"
                :selected-size="selectedSize"
                :sizes="sizes"
                :countries="countries"
              ></step-four>
              <div class="px-4 py-3 text-right sm:px-6">
                <div class="space-x-4">
                  <div class="inline-block">
                    <button
                      v-show="this.currentStep == 3 || this.currentStep == 4"
                      @click.prevent="prev()"
                      type="submit"
                      class="
                        bg-indigo-600
                        border border-transparent
                        rounded-md
                        shadow-sm
                        py-2
                        px-4
                        inline-flex
                        justify-center
                        text-sm
                        font-medium
                        text-white
                        hover:bg-indigo-700
                        focus:outline-none
                      "
                    >
                      Prev
                    </button>
                  </div>
                  <div class="inline-block">
                    <button
                      @click.prevent="next()"
                      type="submit"
                      class="
                        bg-indigo-600
                        border border-transparent
                        rounded-md
                        shadow-sm
                        py-2
                        px-4
                        inline-flex
                        justify-center
                        text-sm
                        font-medium
                        text-white
                        hover:bg-indigo-700
                        focus:outline-none
                      "
                    >
                      <span
                        v-if="
                          this.currentStep == 3 ||
                          this.currentStep == 2 ||
                          this.currentStep == 1
                        "
                        >Next</span
                      >
                      <span v-if="this.currentStep == 4">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <!-- End main area -->
          </div>
        </div>
      </div>

      <div
        class="
          bg-gray-50
          pr-4
          sm:pr-6
          lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200
          xl:pr-0
        "
      >
        <div class="h-full py-6 lg:w-80">
          <!-- Start right column area -->
          <order-details
            :products="products"
            :subtotal="subtotal"
            :discount="discount"
            :taxes="taxes"
            :shipping="shipping"
            :total="total"
          ></order-details>
          <!-- End right column area -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";
import StepFour from "./StepFour.vue";
import OrderDetails from "./OrderDetails.vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  SearchIcon,
  CheckIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  SelectorIcon,
  LockClosedIcon,
} from "@heroicons/vue/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
const subtotal = "$108.00";
const discount = { code: "CHEAPSKATE", amount: "$16.00" };
const taxes = "$9.92";
const shipping = "$8.00";
const total = "$141.92";
const products = [
  {
    id: 1,
    name: "Mountain Mist Artwork Tee",
    href: "#",
    price: "$36.00",
    color: "Birch",
    size: "L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg",
    imageAlt:
      "Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.",
  },
  // More products...
];

const countries = [
  { id: 1, name: "America" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Britain" },
  { id: 4, name: "England" },
];

const sizes = [
  { id: 1, name: "XS" },
  { id: 2, name: "S" },
  { id: 3, name: "M" },
  { id: 4, name: "L" },
  { id: 5, name: "XL" },
  { id: 6, name: "XXL" },
];

const companyTypes = [
  { id: "airline", title: "Airline" },
  { id: "supplier", title: "Repair Center" },
];
const rooms = [
  {
    id: 1,
    title: "Private room",
    description: "Four installments payments, Every other month",
    users: "1462.50",
  },
  {
    id: 2,
    title: "Shared room",
    description: "Four installments payments, Every other month",
    users: "1462.50",
  },
];

const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    // href: "#",
    // status: "complete",
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    // href: "#",
    // status: "current",
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    // href: "#",
    // status: "upcoming",
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    // href: "#",
    // status: "upcoming",
  },
  {
    name: "Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    // href: "#",
    // status: "upcoming",
  },
];
const plans = [
  {
    name: "Balcony view room",
    ram: "Reserve a Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room.",
    cpus: "4 CPUs",
    disk: "160 GB SSD disk",
    price: "294",
  },
  {
    name: "Ocean view room",
    ram: "Spend the day exploring the sites and sounds of Cozumel, then retreat to your comfortable, well-appointed stateroom to relax.",
    cpus: "6 CPUs",
    disk: "256 GB SSD disk",
    price: "63",
  },
];
const genders = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
];

export default {
  data() {
    return {
      currentStep: 1,
      completedStep: 1,
      totalSteps: 4,
      formData: {
        companyName: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        companyType: "",
      },
      otherPerson: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        gender: "",
        contactNumber: "",
        dateOfBirth: "",
        citizenship: "",
        shirtSize: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("submitted");
    },
    next() {
      if (this.currentStep == this.totalSteps) {
        this.submitForm();
      } else {
        // let navStatus = this.steps[this.currentStep].status;
        this.currentStep += 1;
      }
    },
    prev() {
      if (this.currentStep === 1) {
        return;
      } else {
        this.currentStep -= 1;
      }
    },
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuAlt1Icon,
    SearchIcon,
    XIcon,
    CheckIcon,
    ExclamationCircleIcon,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckCircleIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    LockClosedIcon,
    SelectorIcon,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    OrderDetails,
  },
  setup() {
    const selectedRooms = ref(rooms[0]);
    const selected = ref(plans[0]);
    const selectedCountry = ref(countries[3]);
    const selectedSize = ref(sizes[3]);
    return {
      steps,
      companyTypes,
      rooms,
      selectedRooms,
      plans,
      selected,
      genders,
      selectedCountry,
      countries,
      sizes,
      selectedSize,
      subtotal,
      discount,
      taxes,
      shipping,
      total,
      products,
    };
  },
};
</script>