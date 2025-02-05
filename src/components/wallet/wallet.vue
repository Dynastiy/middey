<template>
  <div
    class="lg:w-1/3 bg-primary p-4 md:w-1/3 w-full wallet rounded-[12px] h-[max] flex flex-col gap-4 justify-between"
  >

    <div class="flex justify-between items-center">
      <div>
        <button @click="toggle" class="flex items-center gap-3 text-white">
          <img width="22" :src="activeToken?.icon_url" alt="" />
          <span class="flex items-center gap-3">
            <span class="text-[14px]">{{ activeToken?.symbol }}</span>
            <Icon icon="ph:caret-down-bold" />
          </span>
        </button>
        <OverlayPanel ref="op">
          <div class="flex flex-col gap-4 w-[140px] p-3">
            <button class="flex items-center gap-4" v-for="(item, idx) in tokens" :key="idx">
              <img width="18" :src="item?.icon_url" alt="" />
              <span class="text-[12px]">{{ item?.symbol }}</span>
            </button>
          </div>
        </OverlayPanel>
      </div>
      <button class="text-white">
        <Icon icon="tdesign:refresh" />
      </button>
    </div>

    <div>
      <span class="flex justify-between items-center">
        <h4 class="font-[550] text-white text-4xl">
          {{ wallet.wallet_balance_formatted }}
        </h4>
        <Icon icon="solar:eye-linear" width="22" class="text-white" />
      </span>
      <h6 class="text-white text-sm mt-1">~$10,601.00 USD</h6>
    </div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import OverlayPanel from 'primevue/overlaypanel'
import { ref, onMounted, computed } from 'vue'
import { balances } from '@/services/user'
import store from '@/store'
import tokens from '@/mockdata/token.json'

const op = ref()
const wallet = ref({})

const activeToken = ref({
  name: 'Nigerian Naira',
  symbol: 'NGN',
  icon_url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
  currency_type: 'fiat'
})

const toggle = (event) => {
  op.value.toggle(event)
}

const getBalances = () => {
  let payload = {
    user_id: user.value.id,
    wallet_id: 'ngn'
  }
  balances(payload).then((res) => {
    console.log(res.data)
    wallet.value = res.data
  })
}

const user = computed(() => {
  return store.getters['auth/getUser']
})

onMounted(() => {
  getBalances()
})
</script>

<style>
</style>
