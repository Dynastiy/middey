<template>
  <div>
    <div class="flex bg-white px-4 py-4 justify-between items-center">
      <img src="@/assets/brandImg/middey_horizontal.png" class="block lg:hidden md:hidden h-7" alt="" />
      <div class="hidden lg:flex md:flex justify-center flex-col">
        <h4 class="font-bold text-[18px] capitalize">{{ routeHeader.split('-').join(' ') }}</h4>
        <h6 class="text-xs text-[#848C9D]">{{ routeDescription }}</h6>
      </div>
      <div class="flex gap-[10px] lg:items-center md:items-center lg:px-4 md:px-4">
        <img src="@/assets/brandImg/placeholder.jpeg" class="w-12 h-12 rounded-full" alt="" />
        <div class="hidden lg:block md:block">
          <h5 class="font-bold capitalize mb-0 text-[16px]">
            {{ `${user.first_name} ${user.last_name}` }}
          </h5>
          <span class="text-xs block text-[#848C9D]"> {{ user.user_email }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppDrawer from "./MobileDrawer.vue";
import image from '@/assets/img/no-user.png'
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  components: {},

  data() {
    return {
      drawer: false,
      image
    }
  },

  methods: {
    goToLink(item) {
      if (item.parent === 'sign-out') {
        this.drawer = false
        this.logout()
      } else {
        this.drawer = false
        this.$router.push(item.url).catch(() => {})
      }
    },

    logout() {
      this.$swal
        .fire({
          title: 'Uhhhh! 😔',
          text: 'Are you sure you want to log out?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, logout!'
        })
        .then((result) => {
          console.log(result, 'kkk')
          if (result.isConfirmed) {
            this.userLogout()
          }
        })
    },

    userLogout() {
      this.$store.dispatch('auth/logout')
      this.$swal
        .fire({
          title: 'Woo hoo 😫',
          text: 'Logged out succesfully',
          icon: 'success',
          confirmButtonText: 'Ok!'
        })
        .then((result) => {
          console.log(result, 'kkk')
          if (result.isConfirmed) {
            this.$router.go()
          }
        })
    }
  },

  computed: {
    routeHeader() {
      return this.$route.meta.header
    },
    routeDescription() {
      return this.$route.meta.description
    },
    routeParent() {
      return this.$route.meta.parent
    },
    user() {
      return this.$store.getters['auth/getUser']
    }
    //   userMeta() {
    //     return this.$store.getters["auth/getUserMeta"];
    //   },
  }
}
</script>

<style>
.grid-container {
  /* grid-template-columns: 250px auto 250px; */
}
</style>
