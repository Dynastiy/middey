<template>
  <div>
    <div class="flex gap-4">
      <router-link
        to="/app/create-payment-link"
        class="flex w-full items-center gap-2 flex-col bg-white rounded-[12px] p-4 border-2 border-gray-200"
      >
        <span class="flex items-center justify-center bg-primary w-12 h-12 rounded-full text-white">
          <Icon icon="ci:link" width="30" />
        </span>
        <h6 class="text-[12px] font-medium color-[#1F2937]">Create Payment Link</h6>
      </router-link>

      <router-link
        to="/app/create-invoice"
        class="flex w-full items-center gap-2 flex-col bg-white rounded-[12px] p-4 border-2 border-gray-200"
      >
        <span class="flex items-center justify-center bg-primary w-12 h-12 rounded-full text-white">
          <Icon icon="basil:invoice-solid" width="30" />
        </span>
        <h6 class="text-[12px] font-medium color-[#1F2937]">Create Invoice</h6>
      </router-link>
    </div>

    <div class="flex flex-col gap-4 mt-2">
      <div v-for="(item, key) in actions" :key="key">
        <h6 class="text-[13px] capitalize font-[500]">{{ key.split('_').join(' ') }}</h6>
        <div class="flex bg-white rounded-[12px] py-4 px-2 border-2 border-gray-200 mt-2">
          <button
            v-for="(obj, idx) in item"
            :key="idx"
            class="flex w-full items-center gap-2 flex-col"
          >
            <span
              class="flex items-center justify-center bg-gray-300 w-12 h-12 rounded-full text-[#1F2937]"
            >
              <Icon :icon="obj.icon" width="30" />
            </span>
            <h6 class="text-[10px] font-regular color-[#1F2937] capitalize">
              {{ obj.label.split('_').join(' ') }}
            </h6>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'

const actions = reactive({
  accept_crypto: [
    {
      icon: 'ic:sharp-download',
      label: 'receive/transfer_in'
    },
    {
      icon: 'ic:sharp-download',
      label: 'deposit'
    },
    {
      icon: 'ic:sharp-download',
      label: 'buy_with_bank'
    }
  ],
  transfer_out_crypto: [
    {
      icon: 'ic:sharp-download',
      label: 'send/transfer_out'
    },
    {
      icon: 'ic:sharp-download',
      label: 'withdraw_via_crypto'
    },
    {
      icon: 'ic:sharp-download',
      label: 'sell_to_bank'
    }
  ],
  spend: [
    {
      icon: 'ic:sharp-download',
      label: 'transfer_in'
    },
    {
      icon: 'ic:sharp-download',
      label: 'deposit'
    },
    {
      icon: 'ic:sharp-download',
      label: 'buy_with_bank'
    }
  ]
})
</script>

<style></style>
