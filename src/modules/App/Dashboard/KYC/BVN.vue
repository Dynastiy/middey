<template>
  <div class="flex flex-col gap-4">
    <h4 class="font-semibold text-lg flex gap-1 items-start flex-wrap">
      Settlement Account Details
      <span
        v-if="user.user_kyc_level >= 1"
        class="text-[12px] bg-green-100 text-green-600 block px-2 rounded-md"
        >completed</span
      >
    </h4>

    <span class="block text-sm bg-gray-100 p-3 rounded-md font-medium">
      This is the default Account we will send payments to once you receive money through Middey,
      for your verification to be successful ensure the Account is linked to the BVN provided & also
      bears the Name you used when registering on Middey. Once we verify your settlement account, we
      will provide you with Middey Account to receive payments through Middey.
    </span>

    <div>
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3">
        <div>
          <vField class="input" name="bank" as="select" rules="required">
            <option value="">Select Bank</option>
          </vField>
          <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
        </div>

        <div>
          <vField
            name="identifier"
            class="input"
            placeholder="Account Number"
            type="tel"
            rules="required"
          />
          <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
        </div>

        <div>
          <vField
            name="identifier"
            class="input"
            placeholder="Enter BVN"
            type="tel"
            rules="required"
          />
          <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
        </div>

        <div class="text-center mt-3">
          <button
            class="brand-btn w-full"
            :disabled="isLoading || !meta.valid"
            :class="[
              isLoading
                ? 'bg-gray400 text-gray600'
                : meta.valid
                  ? 'brand-primary'
                  : 'bg-gray400 text-gray600'
            ]"
          >
            Proceed
          </button>
        </div>
      </vForm>
    </div>

    <span class="block text-sm font-semibold">
      <span class="font-semibold text-red-500">Note:</span> You can dial
      <a href="tel:*565*0#" class="text-primary font-semibold">*565*0#</a> on your phone to retrieve
      your BVN
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },

  methods: {
    onSubmit() {
      return
    }
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
