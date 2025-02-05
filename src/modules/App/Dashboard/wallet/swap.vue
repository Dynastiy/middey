<script setup>
import { Icon } from '@iconify/vue'
import OverlayPanel from 'primevue/overlaypanel'
import { ref, computed } from 'vue'

import tokens from '@/mockdata/token.json'

const op = ref()

const activeToken = ref({
  name: 'USD Coin',
  symbol: 'USDC',
  icon_url: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
  currency_type: 'cryptocurrency'
})

const toggle = (event) => {
  op.value.toggle(event)
}

const selectToken = (token) => {
  activeToken.value = token
  op.value.hide() // Close the overlay panel after selection
}

const cryptoTokens = computed(() => {
  return tokens.filter((item) => item.currency_type === 'cryptocurrency')
})
</script>

<template>
  <div class="relative flex flex-col gap-4">
    <div class="bg-white rounded-[12px] p-6 border border-gray-200 flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <span class="text-[12px]">You Pay</span>
        <span class="text-[12px]">Balance: 10,600.00</span>
      </div>
      <div class="flex gap-8">
        <button @click="toggle" class="flex w-fit items-center gap-2">
          <img width="22" :src="activeToken?.icon_url" alt="" />
          <span class="flex items-center gap-3">
            <span class="text-[14px]">{{ activeToken?.symbol }}</span>
            <Icon icon="ph:caret-down-bold" />
          </span>
        </button>
        <OverlayPanel ref="op">
          <div class="flex flex-col gap-4 w-[140px] p-3">
            <button
              @click="selectToken(item)"
              class="flex items-center gap-4"
              v-for="(item, idx) in cryptoTokens"
              :key="idx"
            >
              <img width="18" :src="item?.icon_url" alt="" />
              <span class="text-[12px]">{{ item?.symbol }}</span>
            </button>
          </div>
        </OverlayPanel>

        <div class="">
          <input
            type="number"
            class="text-right text-3xl py-1 pr-0 font-bold input border-none"
            value="0"
          />
          <button class="text-primary uppercase block ml-auto font-semibold text-xs">max</button>
        </div>
        
      </div>
    </div>

    <span
      class="bg-white shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-2 rounded-full w-12 h-12"
    >
      <Icon icon="si:swap-vert-fill" width="22px" />
    </span>

    <div class="bg-white rounded-[12px] p-6 border border-gray-200 flex flex-col gap-6">
      <span class="text-[12px]">You Receive</span>

      <div class="flex gap-8">
        <button @click="toggle" class="flex w-fit items-center gap-2">
          <img width="22" :src="activeToken?.icon_url" alt="" />
          <span class="flex items-center gap-3">
            <span class="text-[14px]">{{ activeToken?.symbol }}</span>
            <Icon icon="ph:caret-down-bold" />
          </span>
        </button>
        <OverlayPanel ref="op">
          <div class="flex flex-col gap-4 w-[140px] p-3">
            <button
              @click="selectToken(item)"
              class="flex items-center gap-4"
              v-for="(item, idx) in cryptoTokens"
              :key="idx"
            >
              <img width="18" :src="item?.icon_url" alt="" />
              <span class="text-[12px]">{{ item?.symbol }}</span>
            </button>
          </div>
        </OverlayPanel>

        <div class="">
          <input
            type="number"
            class="text-right text-3xl py-1 pr-0 font-bold input border-none"
            value="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
