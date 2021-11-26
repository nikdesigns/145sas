<template>
  <div
    class="
      max-w-2xl
      mx-auto
      py-2
      px-4
      sm:py-8 sm:px-6
      lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8
      animate-pulse
    "
  >
    <!-- Product details -->
    <div class="lg:max-w-lg lg:self-end">
      <div class="mt-4">
        <div class="bg-gray-300 h-10 w-7/12 rounded-md"></div>
      </div>

      <section class="mt-4">
        <div class="flex items-center">
          <div class="bg-gray-300 h-6 w-24 rounded-md mb-4"></div>
        </div>

        <div class="mt-4 space-y-6">
          <div class="flex flex-col space-y-2 my-4">
            <div class="w-11/12 bg-gray-300 h-3 rounded-md"></div>
            <div class="w-11/12 bg-gray-300 h-3 rounded-md"></div>
            <div class="w-10/12 bg-gray-300 h-3 rounded-md"></div>
            <div class="w-9/12 bg-gray-300 h-3 rounded-md"></div>
          </div>
        </div>
      </section>
    </div>

    <!-- Product image -->
    <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <div class="w-full h-full object-center object-cover bg-gray-300"></div>
      </div>
    </div>

    <!-- Product form -->
    <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
      <section aria-labelledby="options-heading">
        <div class="mt-1">
          <div class="bg-gray-300 h-3 w-12 rounded-md"></div>

          <div class="mt-4">
            <div class="flex flex-col space-y-2 my-4">
              <div class="w-44 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-36 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-40 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-44 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-32 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-40 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-36 bg-gray-300 h-2 rounded-md"></div>
              <div class="w-44 bg-gray-300 h-2 rounded-md"></div>
            </div>
          </div>
        </div>

        <div>
          <div class="mt-10">
            <div class="bg-gray-300 h-12 w-full rounded-md"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>