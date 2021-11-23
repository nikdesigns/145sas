<template>
  <div>
    <div class="sm:rounded-md sm:overflow-hidden">
      <div class="py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Primary Guest
          </h3>
          <p class="mt-1 text-sm text-gray-500">Who is traveling detail</p>
        </div>

        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-4">
            <label
              for="company-name"
              class="block text-sm font-medium text-gray-700"
              >Company name</label
            >
            <input
              v-model="otherPerson.companyName"
              type="text"
              name="company-name"
              id="company-name"
              autocomplete="organization"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First name</label
            >
            <input
              v-model="otherPerson.firstName"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last name</label
            >
            <input
              v-model="otherPerson.lastName"
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-4">
            <p class="block text-sm font-medium text-gray-700">Gender:</p>
            <fieldset class="mt-4">
              <legend class="sr-only">Notification method</legend>
              <div
                class="
                  space-y-4
                  sm:flex sm:items-center sm:space-y-0 sm:space-x-10
                "
              >
                <div
                  v-for="gender in genders"
                  :key="gender.id"
                  class="flex items-center"
                >
                  <input
                    :id="gender.id"
                    name="notification-method"
                    type="radio"
                    :checked="gender.id === 'male'"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label
                    :for="gender.id"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {{ gender.title }}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              v-model="otherPerson.emailAddress"
              type="text"
              name="email-address"
              id="email-address"
              autocomplete="email"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="contact-number"
              class="block text-sm font-medium text-gray-700"
              >Contact number</label
            >
            <input
              v-model="otherPerson.contactNumber"
              type="text"
              name="contact-number"
              id="contact-number"
              autocomplete="tel"
              class="
                mt-1
                block
                w-full
                border border-gray-300
                rounded-md
                shadow-sm
                py-2
                px-3
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <Listbox as="div" v-model="selectedCountry">
              <ListboxLabel class="block text-sm font-medium text-gray-700">
                Select citizenship
              </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton
                  class="
                    bg-white
                    relative
                    w-full
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    pl-3
                    pr-10
                    py-2
                    text-left
                    cursor-default
                    focus:outline-none
                    focus:ring-1
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                  "
                >
                  <span class="block truncate">{{ selectedCountry.name }}</span>
                  <span
                    class="
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      pr-2
                      pointer-events-none
                    "
                  >
                    <SelectorIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="
                      absolute
                      z-10
                      mt-1
                      w-full
                      bg-white
                      shadow-lg
                      max-h-60
                      rounded-md
                      py-1
                      text-base
                      ring-1 ring-black ring-opacity-5
                      overflow-auto
                      focus:outline-none
                      sm:text-sm
                    "
                  >
                    <ListboxOption
                      as="template"
                      v-for="country in countries"
                      :key="country.id"
                      :value="country"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          ]"
                        >
                          {{ country.name }}
                        </span>

                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <Listbox as="div" v-model="selectedSize">
              <ListboxLabel class="block text-sm font-medium text-gray-700">
                Select shirt size
              </ListboxLabel>
              <div class="mt-1 relative">
                <ListboxButton
                  class="
                    bg-white
                    relative
                    w-full
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    pl-3
                    pr-10
                    py-2
                    text-left
                    cursor-default
                    focus:outline-none
                    focus:ring-1
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                  "
                >
                  <span class="block truncate">{{ selectedSize.name }}</span>
                  <span
                    class="
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      pr-2
                      pointer-events-none
                    "
                  >
                    <SelectorIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="
                      absolute
                      z-10
                      mt-1
                      w-full
                      bg-white
                      shadow-lg
                      max-h-60
                      rounded-md
                      py-1
                      text-base
                      ring-1 ring-black ring-opacity-5
                      overflow-auto
                      focus:outline-none
                      sm:text-sm
                    "
                  >
                    <ListboxOption
                      as="template"
                      v-for="size in sizes"
                      :key="size.id"
                      :value="size"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          ]"
                        >
                          {{ size.name }}
                        </span>

                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  props: [
    "otherPerson",
    "genders",
    "selected",
    "selectedCountry",
    "selectedSize",
    "sizes",
    "countries",
  ],
};
</script>

<style>
</style>