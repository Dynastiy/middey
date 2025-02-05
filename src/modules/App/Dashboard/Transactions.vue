<template>
  <div>
    <div
      class="bg-white mb-4 rounded-lg flex gap-2 pl-2 items-center lg:w-5/12 md:w-5/12 w-full ml-auto"
    >
      <span>
        <i-icon class="text-xl text-gray-300" icon="mingcute:search-line" />
      </span>
      <input
        type="text"
        placeholder="Search by Naration"
        class="flex-1 rounded-tr-lg rounded-br-lg text-[14px] placeholder:text-[13px] outline-none bg-transparent pr-3 py-3"
      />
    </div>
    <wxTable class="md:block hidden" :columns="columns" :items="items" />
    <mobile-table class="md:hidden block" :items="items"  />
  </div>
</template>

<script setup>
import { transactions } from '@/services/user'
import MobileTable from '@/components/assets/mobileTable.vue'
import { onMounted, computed, ref, reactive } from 'vue'
import store from '@/store'
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

onMounted(() => {
  getTransactions()
})

const user = computed(() => {
  return store.getters['auth/getUser']
})
</script>

<style></style>
