<template>
  <div>
    <div class="min-h-screen bg-gray-100 lg:ml-[250px] md:ml-[250px]">
      <app-header class="sticky top-0 z-10" />
      <drawer-nav class="hidden lg:block md:block" :menu="menu" />
      <div class="p-4 lg:mb-6 md:mb-6 mb-16">
        <div class="lg:hidden md:hidden flex justify-center flex-col mb-4">
          <h4 class="font-bold text-[18px] capitalize">
            {{
              routeName !== 'home' ? routeHeader.split('_').join(' ') : `Howdy, ${user.first_name}`
            }}
          </h4>
          <h6 class="text-xs text-[#848C9D]">{{ routeDescription }}</h6>
        </div>
        <slot />
      </div>

      <!-- Bottom Navigation  -->
      <bottom-navigation
        class="lg:hidden md:hidden block"
        @openMenu="openMenu"
        :menu="bottomMenu"
      />

      <div class="lg:hidden md:hidden block">
        <Sidebar v-model:visible="visible" header="" position="right">
          <drawer-nav :menu="menu" @closeMenu="closeMenu" />
        </Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader.vue'
import DrawerNav from '@/components/navigation/DrawerNav.vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
export default {
  components: { AppHeader, DrawerNav, BottomNavigation },
  data() {
    return {
      menu: [
        {
          label: 'home',
          icon: 'lucide:home',
          isBottom: false,
          href: '/'
        },
        {
          label: 'KYC/compliance',
          icon: 'ri:pass-valid-line',
          isBottom: false,
          href: '/app/kyc'
        },
        {
          label: 'transactions',
          icon: 'lucide:file-text',
          isBottom: false,
          href: '/app/transactions'
        },
        {
          label: 'wallet',
          icon: 'solar:wallet-outline',
          href: '/app/wallet',
          isBottom: false
        },
        {
          label: 'pay_merchant',
          icon: 'streamline:bill-2',
          isBottom: false,
          href: '/app/pay-merchant'
        },
        {
          label: 'bill_payment',
          icon: 'ic:outline-payments',
          isBottom: false,
          href: '/app/bill-payment'
        },
        {
          label: 'virtual_cards',
          icon: 'lucide:credit-card',
          isBottom: false,
          href: '/app/virtual-cards'
        },
        {
          label: 'investments',
          icon: 'streamline:investment-selection',
          isBottom: false,
          href: '/app/investments'
        },
        {
          label: 'profile&settings',
          icon: 'lucide:user',
          isBottom: true,
          href: '/app/profile-and-settings'
        },
        {
          label: 'contact_support',
          icon: 'bx:support',
          isBottom: true,
          href: '/app/support'
        },
        {
          label: 'logout',
          icon: 'material-symbols:logout',
          isBottom: true,
          href: ''
        }
      ],

      bottomMenu: [
        {
          label: 'home',
          icon: 'lucide:home',
          href: '/',
          isFunction: false
        },
        {
          label: 'transactions',
          icon: 'lucide:file-text',
          href: '/app/transactions',
          isFunction: false
        },
        {
          label: 'wallet',
          icon: 'solar:wallet-outline',
          href: '/app/wallet',
          isFunction: false
        },
        {
          label: 'KYC',
          icon: 'lucide:file-text',
          href: '/app/kyc'
        },
        {
          label: 'More',
          icon: 'gg:menu-round',
          href: '/app/profile-and-settings',
          isFunction: true
        }
      ],

      visible: false
    }
  },

  methods: {
    openMenu() {
      this.visible = true
    },

    closeMenu(){
      this.visible = false
    }
  },

  computed: {
    routeName() {
      return this.$route.name
    },
    isInfoPage() {
      return this.$route.meta.isInfoPage
    },
    routeHeader() {
      return this.$route.meta.header
    },
    routeDescription() {
      return this.$route.meta.description
    },
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style>
.grid-container {
  grid-template-columns: 70px 250px auto 250px 70px;
}

.grid-container div:not(:last-child) {
  border-right: 1px dashed var(---border-color);
}

#main {
  /* grid-template-columns: 250px auto; */
}

@media (max-width: 540px) {
  .content {
    box-shadow: unset;
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
  }
}
</style>
