<template>
  <section
    aria-labelledby="summary-heading"
    class="hidden bg-gray-50 w-full max-w-md flex-col lg:flex"
  >
    <h2 id="summary-heading" class="sr-only">Order summary</h2>

    <ul
      role="list"
      class="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="flex py-6 space-x-6"
      >
        <div class="flex flex-col justify-between space-y-4">
          <div class="text-sm font-medium space-y-1">
            <h3 class="text-gray-900">{{ product.name }}</h3>
            <p class="text-gray-900">{{ product.price }}</p>
            <p class="text-gray-500">{{ product.color }}</p>
            <p class="text-gray-500">{{ product.size }}</p>
          </div>
          <div class="flex space-x-4">
            <button
              type="button"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Edit
            </button>
            <div class="flex border-l border-gray-300 pl-4">
              <button
                type="button"
                class="
                  text-sm
                  font-medium
                  text-indigo-600
                  hover:text-indigo-500
                "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div
      class="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6"
    >
      <form>
        <label
          for="discount-code"
          class="block text-sm font-medium text-gray-700"
          >Discount code</label
        >
        <div class="flex space-x-4 mt-1">
          <input
            type="text"
            id="discount-code"
            name="discount-code"
            class="
              block
              w-full
              border-gray-300
              rounded-md
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
          <button
            type="submit"
            class="
              bg-gray-200
              text-sm
              font-medium
              text-gray-600
              rounded-md
              px-4
              hover:bg-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-50
              focus:ring-indigo-500
            "
          >
            Apply
          </button>
        </div>
      </form>

      <dl class="text-sm font-medium text-gray-500 mt-10 space-y-6">
        <div class="flex justify-between">
          <dt>Subtotal</dt>
          <dd class="text-gray-900">{{ subtotal }}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="flex">
            Discount
            <span
              class="
                ml-2
                rounded-full
                bg-gray-200
                text-xs text-gray-600
                py-0.5
                px-2
                tracking-wide
              "
              >{{ discount.code }}</span
            >
          </dt>
          <dd class="text-gray-900">-{{ discount.amount }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Taxes</dt>
          <dd class="text-gray-900">{{ taxes }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Shipping</dt>
          <dd class="text-gray-900">{{ shipping }}</dd>
        </div>
        <div
          class="
            flex
            items-center
            justify-between
            border-t border-gray-200
            text-gray-900
            pt-6
          "
        >
          <dt>Total</dt>
          <dd class="text-base">{{ total }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  props: ["products", "subtotal", "discount", "taxes", "shipping", "total"],
};
</script>

<style>
</style>