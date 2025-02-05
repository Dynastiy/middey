<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import Sidebar from 'primevue/sidebar'
import tokens from '@/mockdata/token.json'
import { computed } from 'vue'
// import { encryptToken } from '@/plugins/filters'
import { useRouter, useRoute } from 'vue-router'
// import { profile } from '@/services/user'
// import { login } from '@/services/auth'
// import store from '@/store'

const router = useRouter()
const route = useRoute()

const isLoading = ref(false)
const isAutoConvert = ref(false)
const hasFixedAmount = ref(false)
const visible = ref(false)
const fiatVisible = ref(false)

const onSubmit = async (values) => {
  return router.push('/app/link-created')
}

const toggleAutoConvert = () => {
  isAutoConvert.value = !isAutoConvert.value
}

const toggleHasFixedAmount = () => {
  hasFixedAmount.value = !hasFixedAmount.value
}

const selectCurrency = () => {
  return (visible.value = true)
}

const selectFiat = () => {
  return (fiatVisible.value = true)
}

const cryptoTokens = computed(() => {
  return tokens.filter((item) => item.currency_type == 'cryptocurrency')
})

const fiatTokens = computed(() => {
  return tokens.filter((item) => item.currency_type !== 'cryptocurrency')
})
</script>

<style></style>

<template>
  <div class="">
    <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3">
      <div>
        <label for="">Name</label>
        <vField name="name" class="input" placeholder="Invoice name" type="text" rules="required" />
        <ErrorMessage name="name" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <label for="">Description</label>
        <vField
          name="description"
          as="textarea"
          class="input"
          placeholder="Description"
          rules="required"
        />
        <ErrorMessage name="description" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <label for="">Select Currency</label>
        <button
          @click.prevent="selectCurrency"
          class="flex items-center gap-3 justify-between input"
        >
          <span class="text-[14px]">Currency</span>
          <Icon icon="ph:caret-down-bold" />
        </button>
      </div>

      <div>
        <div class="flex mb-3 items-center gap-1">
          <button @click.prevent="toggleAutoConvert">
            <Icon
              icon="mdi:tick-circle"
              width="25px"
              :class="[isAutoConvert ? 'text-secondary' : 'text-gray-400']"
            />
          </button>
          <label for="">Auto convert to Fiat</label>
        </div>
        <div v-if="isAutoConvert" class="rounded-lg bg-accent p-4">
          <div class="text-[#8C8C8C] flex gap-1 mb-2">
            <span>
              <Icon icon="material-symbols:info-rounded" />
            </span>
            <h6 class="text-sm">
              We will auto convert your crypto to fiat after receiving payment
            </h6>
          </div>
          <button
            @click.prevent="selectFiat"
            class="flex items-center gap-3 justify-between input p-2 md:w-7/12 w-10/12"
          >
            <span class="text-[14px]">Select Fiat to Convert to</span>
            <Icon icon="ph:caret-down-bold" />
          </button>
        </div>
      </div>

      <div>
        <div class="flex mb-3 items-center gap-1">
          <button @click.prevent="toggleHasFixedAmount">
            <Icon
              icon="mdi:tick-circle"
              width="25px"
              :class="[hasFixedAmount ? 'text-secondary' : 'text-gray-400']"
            />
          </button>
          <label for="">I want a fixed amount on this page</label>
        </div>
        <div v-if="hasFixedAmount">
          <input type="text" name="" id="" placeholder="Enter Fixed Amount" class="input" />
        </div>
      </div>

      <div class="text-center mt-3 flex flex-col gap-4">
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
          <i-icon v-if="isLoading" icon="eos-icons:three-dots-loading" width="30px" />
          <span v-else class="font-semibold"> Create </span>
        </button>
        <button
          @click.prevent="$router.go(-1)"
          class="brand-btn brand-outline w-full border-gray600 text-gray600"
        >
          Cancel
        </button>
      </div>
    </vForm>

    <!-- Modal For Currency -->
    <Sidebar
      v-model:visible="visible"
      blockScroll
      header=""
      position="bottom"
      class="rounded-tr-2xl h-max rounded-tl-2xl"
    >
      <template #container="{ closeCallback }">
        <div class="p-4">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold text-lg">Select Currency</h4>
            <button @click.prevent="closeCallback">
              <Icon icon="zondicons:close" />
            </button>
          </div>
          <div class="flex flex-col max-h-[500px] p-4 overflow-auto gap-4 mt-1">
            <div
              class="bg-accent rounded-lg flex gap-2 pl-2 items-center lg:w-5/12 md:w-5/12 w-full ml-auto"
            >
              <span>
                <Icon class="text-xl text-gray-300" icon="mingcute:search-line" />
              </span>
              <input
                type="text"
                placeholder="Search Currency"
                class="flex-1 rounded-lg text-[14px] placeholder:text-[13px] outline-none bg-transparent pr-3 py-3"
              />
            </div>
            <h6 class="text-sm font-medium">All Currency</h6>
            <div class="flex justify-between" v-for="(item, idx) in cryptoTokens" :key="idx">
              <div>
                <span class="flex gap-2">
                  <img class="h-6 w-6" :src="item?.icon_url" alt="" />
                  <div>
                    <h5 class="font-medium text-sm">{{ item?.symbol }}</h5>
                    <h6 class="text-sm text-gray500">{{ item?.name }}</h6>
                  </div>
                </span>
              </div>
              <input type="radio" class="accent-amber-600" />
            </div>
          </div>
        </div>
      </template>
    </Sidebar>

    <!-- Modal for fiat conversion  -->
    <Sidebar
      v-model:visible="fiatVisible"
      blockScroll
      header=""
      position="bottom"
      class="rounded-tr-2xl h-max rounded-tl-2xl"
    >
      <template #container="{ closeCallback }">
        <div class="p-4">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold text-lg">Select FIat to Convert to</h4>
            <button @click.prevent="closeCallback">
              <Icon icon="zondicons:close" />
            </button>
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex justify-between" v-for="(item, idx) in fiatTokens" :key="idx">
              <div>
                <span class="flex gap-2">
                  <img class="h-6 w-6" :src="item?.icon_url" alt="" />
                  <div>
                    <h5 class="font-medium text-sm">{{ item?.symbol }}</h5>
                    <h6 class="text-sm text-gray500">{{ item?.name }}</h6>
                  </div>
                </span>
              </div>
              <input type="radio" class="accent-amber-600" />
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>
