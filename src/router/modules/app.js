import BillPayment from '@/modules/App/Dashboard/bill-payment.vue'
import Contact from '@/modules/App/Dashboard/contact.vue'
import Home from '@/modules/App/Dashboard/Index.vue'
import KYC from '@/modules/App/Dashboard/kyc.vue'
import Payments from '@/modules/App/Dashboard/payments.vue'
import Paymerchant from '@/modules/App/Dashboard/pay-merchant.vue'
import ProfileAndSettings from '@/modules/App/Dashboard/profile-and-settings.vue'
import Trade from '@/modules/App/Dashboard/trade.vue'
import Transactions from '@/modules/App/Dashboard/transactions.vue'
import VirtualCards from '@/modules/App/Dashboard/virtual-cards.vue'
import Wallet from '@/modules/App/Dashboard/wallet.vue'
import CreatePaymentLink from '@/modules/App/Dashboard/dashboard/create-payment-link.vue'
import CreatedLink from '@/modules/App/Dashboard/dashboard/created-link.vue'
import Swap from '@/modules/App/Dashboard/wallet/swap.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "Your Dashboard",
      description: "Send and recieve money with ease within and outside Middey",
      parent: 'home',
      name: 'home'
    }
  },

  { 
    path: '/app/wallet',
    name: 'dashboard-wallet',
    component: Wallet,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "Wallets",
      description: "Send and recieve money with ease within and outside Middey",
      parent: 'wallet',
      name: 'wallet'
    }
  },

  {
    path: '/app/swap',
    name: 'swap',
    component: Swap,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "swap",
      description: "Get help from Middey administrators",
      parent: 'wallet',
      name: 'swap'
    }
  },

  { 
    path: '/app/kyc',
    name: 'dashboard-kyc',
    component: KYC,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "KYC/compliance",
      description: "Your KYC Verification",
      parent: 'KYC/compliance',
      name: 'KYC/compliance'
    }
  },

  {
    path: '/app/trade',
    name: 'dashboard-trade',
    component: Trade,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "Trade",
      description: "Send and recieve money with ease within and outside Middey",
      parent: 'trade',
      name: 'trade'
    }
  },

  {
    path: '/app/payments',
    name: 'dashboard-payments',
    component: Payments,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "payments",
      description: "Send and recieve money with ease within and outside Middey",
      parent: 'payments',
      name: 'payments'
    }
  },

  {
    path: '/app/transactions',
    name: 'dashboard-transactions',
    component: Transactions,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "transaction-history",
      description: "Send and recieve money with ease within and outside Middey",
      parent: 'transactions',
      name: 'transactions'
    }
  },

  {
    path: '/app/profile-and-settings',
    name: 'dashboard-profile-and-settings',
    component: ProfileAndSettings,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "profile-&-settings",
      description: "Some Necessary information needed and minor tweaks to your account",
      parent: 'home',
      name: 'profile&settings'
    }
  },

  {
    path: '/app/pay-merchant',
    name: 'pay-merchant',
    component: Paymerchant,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "pay-merchant",
      description: "Make payments to merchants on the Middey",
      parent: 'pay_merchant',
      name: 'pay_merchant'
    }
  },

  {
    path: '/app/bill-payment',
    name: 'dashboard-bill-payment',
    component: BillPayment,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "bill_-payment",
      description: "Pay for bills",
      parent: 'bill_payment',
      name: 'bill_payment'
    }
  },

  {
    path: '/app/virtual-cards',
    name: 'dashboard-virtual-cards',
    component: VirtualCards,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "virtual-cards",
      description: "Your virtual Card Settings",
      parent: 'virtual_cards',
      name: 'virtual_cards'
    }
  },

  {
    path: '/app/support',
    name: 'dashboard-support',
    component: Contact,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "support",
      description: "Get help from Middey administrators",
      parent: 'support',
      name: 'support'
    }
  },

  {
    path: '/app/create-payment-link',
    name: 'create-payment-link',
    component: CreatePaymentLink,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "create-payment-link",
      description: "Get help from Middey administrators",
      parent: 'home',
      name: 'create-payment-link'
    }
  },

  {
    path: '/app/link-created',
    name: 'link-created',
    component: CreatedLink,
    meta: {
      layout: 'Dashboard',
      requiresAuth: true,
      header: "payment-link",
      description: "Get help from Middey administrators",
      parent: 'home',
      name: 'link-created'
    }
  },
 
]

export default routes
