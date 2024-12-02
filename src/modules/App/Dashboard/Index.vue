<template>
  <div class="flex flex-col gap-4">
    <span v-if="user.user_kyc_level < 2" class="text-sm bg-red-100 p-2 rounded-sm text-red-600 border border-red-200">
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
        <div
          class="flex lg:flex-row md:flex-row flex-col justify-between lg:items-end md:items-end gap-4"
        >
          <div>
            <span class="font-bold text-4xl">{{ wallet.wallet_balance_formatted }}</span>
            <span v-if="user.account_details_for_deposit_default">
              <span class="text-xs block font-semibold">{{
                user.account_details_for_deposit_default.account_number
              }}</span>
              <span class="text-xs block text-primary font-semibold">
                {{
                  `${user.account_details_for_deposit_default.account_name} (${user.account_details_for_deposit_default.account_bank})`
                }}</span
              >
            </span>
            <span v-else>
              <span class="text-xs block font-semibold">Account Details</span>
              <span
                @click="openModal"
                class="text-xs block text-primary font-semibold underline"
                role="button"
              >
                View account Number</span
              >
            </span>
          </div>
          <div class="flex lg:w-fit md:w-fit w-full gap-2">
            <span
              role="button"
              class="border w-full whitespace-nowrap border-primary flex items-center gap-1 bg-secondary text-white rounded-[5px] px-2 py-[8px] text-[12px] capitalize font-sembold"
              v-for="item in actions"
              :key="item.label"
              @click="openSendFunds"
            >
              <i-icon
                :icon="item.icon"
                class="bg-white block text-primary rounded-full text-lg p-[2px]"
              />
              {{ item.label.split('_').join(' ') }}</span
            >
          </div>
        </div>
      </template>
    </el-skeleton>
    <div>
      <div class="flex justify-between items-center mb-4">
        <h4 class="font-semibold text-lg">Recent Transaction History</h4>
        <span
          @click="$router.push('/app/transactions')"
          class="text-primary text-xs block font-semibold underline"
          >View All Transactions</span
        >
      </div>
      <wxTable :columns="columns" :items="items" />

      <!-- Modal of Data  -->
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
              background-image: radial-gradient(
                circle at left top,
                var(---primary),
                var(---secondary)
              );
            "
          >
            <div>
              <p class="text-md">
                We need some extra infomation in order to verify you & generate your Account Number,
                click <b>Continue</b> below to proceed.
              </p>
            </div>
            <div class="flex align-items-center gap-3">
              <button
                @click="closeCallback"
                text
                class="p-[10px] w-full bg-red-500 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                @click="this.$router.push('/app/kyc')"
                class="p-[10px] w-full bg-green-700 text-white rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </template>
      </vDialog>

      <!-- Send Funds  -->
      <send-funds :isVisible="sendFunds" @close="close" />
    </div>
  </div>
</template>

<script>
import SendFunds from '@/components/modals/SendFunds.vue'
export default {
  components: { SendFunds },
  data() {
    return {
      actions: [
        { label: 'send', icon: 'mingcute:send-fill', action: this.openSendFunds() },
        { label: 'receive', icon: 'flowbite:download-solid' },
        { label: 'pay_bills', icon: 'fluent:payment-32-filled' },
        { label: 'payroll', icon: 'clarity:list-solid' }
      ],
      cardColors: [],
      columns: [
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
      ],
      wallet: {},
      isLoading: false,
      items: [],
      visible: false,
      sendFunds: false
    }
  },

  methods: {
    // We need some extra infomation in order to verify you & generate your Account Number, click Continue below to proceed.
    applyRandomColors() {
      this.cardColors = this.actions.map(() => this.$generateRandomColor())
    },

    openModal() {
      this.visible = true
    },

    openSendFunds() {
      this.sendFunds = true
    },

    close() {
      this.sendFunds = false
    },

    getDashboardData() {
      this.isLoading = true
      const request1 = this.getBalances()
      const request2 = this.getTransactions()
      Promise.all([request1, request2]).finally(() => {
        this.isLoading = false
      })
    },

    getBalances() {
      let payload = {
        user_id: this.user.id,
        wallet_id: 'ngn'
      }
      this.$user.balances(payload).then((res) => {
        console.log(res.data)
        this.wallet = res.data
      })
    },

    getTransactions() {
      let payload = {
        user_id: this.user.id
      }
      this.$user.transactions(payload).then((res) => {
        console.log(res)
        this.items = res
      })
    }
  },

  beforeMount() {
    this.getDashboardData()
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
