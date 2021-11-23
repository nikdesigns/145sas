<template>
  <div>
    <RadioGroup v-model="selectedRooms">
      <RadioGroupLabel class="text-base font-medium text-gray-900">
        Select room options
      </RadioGroupLabel>

      <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <RadioGroupOption
          as="template"
          v-for="room in rooms"
          :key="room.id"
          :value="room"
          v-slot="{ checked, active }"
        >
          <div
            :class="[
              checked ? 'border-transparent' : 'border-gray-300',
              active ? 'ring-2 ring-indigo-500' : '',
              'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none',
            ]"
          >
            <div class="flex-1 flex">
              <div class="flex flex-col">
                <RadioGroupLabel
                  as="span"
                  class="block text-sm font-medium text-gray-900"
                >
                  {{ room.title }}
                </RadioGroupLabel>
                <RadioGroupDescription
                  as="span"
                  class="mt-1 flex items-center text-sm text-gray-500"
                >
                  {{ room.description }}
                </RadioGroupDescription>
                <RadioGroupDescription
                  as="span"
                  class="mt-6 text-xl font-medium text-gray-900"
                >
                  <span class="text-sm text-gray-500 m-0 p-0">$</span>
                  {{ room.users }}
                  <span class="text-sm font-normal text-gray-500"
                    >x 4 payments</span
                  >
                </RadioGroupDescription>
              </div>
            </div>
            <CheckCircleIcon
              :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']"
              aria-hidden="true"
            />
            <div
              :class="[
                active ? 'border' : 'border-2',
                checked ? 'border-indigo-500' : 'border-transparent',
                'absolute -inset-px rounded-lg pointer-events-none',
              ]"
              aria-hidden="true"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
  <div class="mt-6 pb-6">
    <label class="text-base font-medium my-36 text-gray-900"
      >Room configuration</label
    >
    <p class="text-sm leading-5 text-gray-500 mb-4">Select room type</p>
    <RadioGroup v-model="selected">
      <RadioGroupLabel class="sr-only"> Server size </RadioGroupLabel>
      <div class="space-y-4">
        <RadioGroupOption
          as="template"
          v-for="plan in plans"
          :key="plan.name"
          :value="plan"
          v-slot="{ checked, active }"
        >
          <div
            :class="[
              checked ? 'border-transparent' : 'border-gray-300',
              active ? 'ring-2 ring-indigo-500' : '',
              'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none',
            ]"
          >
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel as="p" class="font-medium text-gray-900">
                  {{ plan.name }}
                </RadioGroupLabel>
                <RadioGroupDescription as="div" class="text-gray-500">
                  <p class="sm:inline">
                    {{ plan.ram }}
                  </p>
                </RadioGroupDescription>
              </div>
            </div>
            <RadioGroupDescription
              as="div"
              class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
            >
              <div class="ml-1 text-gray-500 sm:ml-0">Qty.</div>
              <div class="font-medium text-gray-900">
                {{ plan.price }}
              </div>
            </RadioGroupDescription>
            <div
              :class="[
                active ? 'border' : 'border-2',
                checked ? 'border-indigo-500' : 'border-transparent',
                'absolute -inset-px rounded-lg pointer-events-none',
              ]"
              aria-hidden="true"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script>
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/solid";
export default {
  props: ["rooms", "selectedRooms", "plans", "selected"],
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckCircleIcon,
  },
};
</script>

<style>
</style>