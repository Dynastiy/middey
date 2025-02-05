<template>
  <div class="flex flex-col gap-4">
    <span
      v-if="user.user_kyc_level < 2"
      class="text-sm bg-red-100 p-2 rounded-sm text-red-600 border border-red-200"
    >
      Hello <b>{{ user.first_name }}</b
      >, to finalize the process of opening your account & have your Middey Account allocated for
      receiving of funds, click on the link to get started. -
      <router-link to="/app/kyc"><b>GET STARTED</b></router-link>
      <span class="block text-right text-[12px]"><i>Takes approximately 3 mins</i></span>
    </span>
    <el-skeleton :loading="isLoading" animated>
      <template #template>
        <div>
          <el-skeleton-item variant="text" style="height: 20px; border-radius: 10px" />
          <el-skeleton-item variant="text" style="height: 20px; border-radius: 10px" />
          <el-skeleton-item variant="text" style="height: 20px; border-radius: 10px" />
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
          <div v-for="item in 4" :key="item">
            <el-skeleton-item variant="text" style="height: 20px; border-radius: 10px" />
          </div>
        </div>
      </template>
      <template #default>
        <div class="flex lg:flex-row md:flex-row flex-col gap-3">
          <wallet />
          <WalletActions />
        </div>
      </template>
    </el-skeleton>

    <!-- Modal  -->
    <div>
      <div class="flex justify-between items-center mb-4">
        <h4 class="font-semibold text-lg">Recent Transactions</h4>
        <router-link
          to="/app/transactions"
          class="text-secondary flex items-center gap-1 text-sm block font-semibold"
          >See all
          <Icon width="20px" icon="ph:caret-right-bold" />
        </router-link>
      </div>
      <wxTable class="md:block hidden" :columns="columns" :items="items" />
      <mobile-table class="md:hidden block" :items="items"  />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { transactions } from '@/services/user'
import MobileTable from '@/components/assets/mobileTable.vue'
import { Icon } from '@iconify/vue'
import store from '@/store'

import wallet from '@/components/wallet/wallet.vue'
import WalletActions from '@/components/wallet/actions.vue'

const columns = reactive([
  {
    header: 'ID',
    field: 'transaction_id'
  },
  {
    header: 'Amount',
    field: 'txn_amount'
  },
  {
    header: 'Txn Type',
    field: 'txn_type'
  },
  {
    header: 'Naration',
    field: 'note'
  },
  {
    header: 'Date',
    field: 'post_date'
  },

  {
    header: 'Receipt',
    field: 'status'
  }
])
const isLoading = ref(false)
const items = ref([])

const getTransactions = () => {
  let payload = {
    user_id: user.value.id
  }
  transactions(payload).then((res) => {
    console.log(res)
    items.value = res
  })
}

const user = computed(() => {
  return store.getters['auth/getUser']
})

onMounted(() => {
  getTransactions()
})
</script>

<style>
.wallet {
  /* background: url('@/assets/img/wallet-bg.jpeg');
  padding: 20px;
  background-size: cover; */
}
</style>
