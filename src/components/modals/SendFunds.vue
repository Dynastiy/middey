<template>
  <vDialog
    v-model:visible="visible"
    :style="{ width: '25rem' }"
    modal
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(2px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <div
        class="flex flex-col px-5 py-5 gap-4"
        style="
          border-radius: 12px;
          background-image: radial-gradient(circle at left top, var(---primary), var(---secondary));
        "
      >
        <div>
          <span class="flex justify-between mb-4">
            <h1 class="font-bold text-xl">Send Funds</h1>
            <span role="button" class="text-sm underline font-semibold text-red-600" @click="$emit('close')"
              >Close</span
            >
          </span>
          <span class="bg-gray-200 w-full rounded-lg mt-3 block p-3">
            <h6 class="text-[13px]">Wallet Balance</h6>
            <h1 class="font-bold text-2xl">N34,000</h1>
          </span>
        </div>
        <div>
          <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3">
            <div>
              <vField
                name="identifier"
                class="input"
                placeholder="Amount"
                type="tel"
                rules="required"
              />
              <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <vField class="input" name="bank" as="select" rules="required">
                <option value="">Bank1</option>
              </vField>
              <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <vField
                name="identifier"
                class="input"
                placeholder="Recipient's Account Number"
                type="tel"
                rules="required"
              />
              <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <vField
                name="identifier"
                class="input"
                placeholder="Account Name"
                type="text"
                readonly
                rules="required"
              />
              <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
            </div>

            <div>
              <vField
                name="identifier"
                class="input"
                placeholder="Naration"
                type="text"
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
        <!-- <div class="flex align-items-center gap-3">
          <button
            @click="$emit('close')"
            text
            class="p-[10px] w-full bg-red-500 rounded-lg text-white"
          >
            Cancel
          </button>
          <button @click="closeCallback" class="p-[10px] w-full bg-green-700 text-white rounded-lg">
            Continue
          </button>
        </div> -->
      </div>
    </template>
  </vDialog>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      visible: false,
      isLoading: false
    }
  },

  methods: {
    onSubmit(){
        alert('Hello World')
    }
  },

  watch: {
    isVisible: {
      handler(val) {
        this.visible = val
      }
    }
  }
}
</script>

<style>
/* MODALS  */
</style>
