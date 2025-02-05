<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3">
    <div class="bg-white rounded-md p-4 border border-gray50" v-for="(item, idx) in currencies" :key="idx">
      <div class="wallet-page-header mb-4 flex items-center justify-between">
        <span class="flex gap-2">
          <img class="w-5 h-5" :src="item.logo" alt="" />
          <span>
            <h5 class="font-semibold leading-tight">{{ item.label }}</h5>
            <h6 class="leading-tight">
              <span class="leading-tight text-gray500 font-medium text-sm">$5.85</span
              ><span class="leading-tight text-sm text-green-700 font-medium">+1.98%</span>
            </h6>
          </span>
        </span>

        <span class="flex flex-col">
          <span class="leading-tight font-medium text-sm">100</span
          ><span class="leading-tight text-sm text-gray500 font-medium">$585</span>
        </span>
      </div>
      <div class="main-content flex justify-between">
        <router-link to="/app/receive" class="flex flex-col items-center">
          <Icon icon="ci:arrow-down-lg" />
          <span class="text-[12px] text-gray500 block font-medium"> Deposit </span>
        </router-link>

        <span class="block bg-gray300 w-[1px]"></span>

        <router-link to="/app/withdraw" class="flex flex-col items-center">
          <Icon icon="ci:arrow-up-lg" />
          <span class="text-[12px] text-gray500 block font-medium">Withdraw</span>
        </router-link>

        <span class="block bg-gray300 w-[1px]"></span>

        <router-link to="/app/swap" class="flex flex-col items-center">
          <Icon icon="heroicons-outline:switch-vertical" />
          <span class="text-[12px] text-gray500 block font-medium">Swap</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

import usdt from '@/assets/img/usdt.png'
import tusd from '@/assets/img/tusd.png'

const currencies = ref([
  { logo: usdt, label: 'BTC' },
  { logo: tusd, label: 'ETH' },
  { logo: usdt, label: 'SOL' },
  { logo: usdt, label: 'TON' },
  { logo: usdt, label: 'EOS' },
  { logo: tusd, label: 'DOT' },
  { logo: usdt, label: 'BNB' }
])
</script>

<style></style>
