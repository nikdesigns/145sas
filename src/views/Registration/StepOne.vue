<template>
  <div>
    <div class="sm:rounded-md sm:overflow-hidden">
      <div class="py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Create an account
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Use a permanent address where you can recieve mail.
          </p>
        </div>

        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-4">
            <label
              for="company-name"
              class="block text-sm font-medium text-gray-700"
              >Company name</label
            >
            <input
              v-model="formData.companyName"
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
              v-model="formData.firstName"
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
              v-model="formData.lastName"
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
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              v-model="formData.emailAddress"
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
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              v-model="formData.password"
              type="password"
              name="password"
              id="password"
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
              for="confirm-password"
              class="block text-sm font-medium text-gray-700"
              >Confirm password</label
            >
            <input
              v-model="formData.confirmPassword"
              type="password"
              name="confirm-password"
              id="confirm-password"
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
            <label
              for="contact-number"
              class="block text-sm font-medium text-gray-700"
              >Contact number</label
            >
            <input
              v-model="formData.contactNumber"
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
        </div>
        <div>
          <label class="text-base font-medium text-gray-900"
            >Company type</label
          >
          <p class="text-sm leading-5 text-gray-500">
            Please select your company type?
          </p>
          <fieldset class="mt-4">
            <legend class="sr-only">Notification method</legend>
            <div
              class="
                space-y-4
                sm:flex sm:items-center sm:space-y-0 sm:space-x-10
              "
            >
              <div
                v-for="companyType in companyTypes"
                :key="companyType.id"
                class="flex items-center"
              >
                <input
                  :id="companyType.id"
                  name="notification-method"
                  type="radio"
                  :checked="companyType.id === 'supplier'"
                  class="
                    focus:ring-indigo-500
                    h-4
                    w-4
                    text-indigo-600
                    border-gray-300
                  "
                />
                <label
                  :for="companyType.id"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  {{ companyType.title }}
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["formData", "companyTypes"],
};
</script>

<style>
</style>