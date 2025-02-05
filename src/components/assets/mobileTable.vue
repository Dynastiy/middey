<script setup>
import { Icon } from '@iconify/vue'; 
const props = defineProps({
  items: Array
})
</script>

<template>
  <div class="bg-white rounded-[12px] p-4 border-2 border-gray-200 flex flex-col gap-4">
    <!-- {{ props?.items }} -->
    <div class="flex justify-between" v-for="item in props?.items" :key="item?.transaction_id">
        <div class="flex gap-2">
            <span :class="['flex justify-center items-center rounded-full w-12 h-12 bg-green-100', item.txn_type == 'CREDIT' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600']">
                <Icon :icon="item.txn_type == 'CREDIT' ? 'heroicons:arrow-long-down-solid' : 'heroicons:arrow-long-up' " width="20px" />
                <!-- <Icon icon="heroicons:arrow-long-down-solid" /> -->
            </span>
            <span class="flex-1">
                <h4  class="font-semibold text-[13px]">{{ item?.note }}</h4>
                <h6  class="font-light text-gray-400 text-xs">{{ item?.post_date_gmt }}</h6>
            </span>
        </div>
        <span class="font-semibold text-[13px] whitespace-nowrap">
            {{ item.txn_type == 'CREDIT' ? '+' : '-' }} {{ `${item.wallet_symbol}${(item.amount).toLocaleString()}` }}
        </span>
    </div>
  </div>
</template>

<style></style>
