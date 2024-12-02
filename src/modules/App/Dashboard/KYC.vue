<template>
  <div>
    <span
      v-if="user.user_kyc_info_msg"
      class="text-sm bg-amber-100 p-2 rounded-md font-semibold text-amber-600 border flex gap-1 items-center border-amber-200 block w-fit"
    >
      <i-icon class="text-xl" icon="typcn:warning" /> {{ user.user_kyc_info_msg }}
    </span>
    <span
      v-else
      class="text-sm bg-green-100 p-2 rounded-md text-green-600 border flex gap-1 items-center border-green-200 block w-fit"
    >
      <i-icon class="text-xl" icon="lets-icons:check-fill" /> {{ 'You are fully verified' }}
    </span>

    <div class="flex lg:flex-row md:flex-row flex-col mt-4 gap-4">
      <div :class="['flex lg:flex-col md:flex-col flex-row gap-4 lg:w-[250px] md:w:[250px] w-full', { 'lg:w-[350px] md:w-[350px]' : !active  } ]">
        <span
          :class="[
            active == 'bvn' ? 'bg-primary' : 'bg-white',
            'flex justify-between w-full p-4 rounded-lg'
          ]"
          role="button"
          @click="makeActive('bvn')"
        >
          <span class="flex flex-col w-full">
            <span :class="[active == 'bvn' ? 'text-white' : '', 'font-semibold text-sm']"
              >Tier 1</span
            >
            <span
              :class="['lg:block md:block hidden' ,active == 'bvn' ? 'text-gray-200' : 'text-gray-400', 'font-medium text-sm']"
              >BVN Verification</span
            >
          </span>
          <i-icon
            :class="['text-xl font-bold', active == 'bvn' ? 'text-green-600 bg-white rounded-full' : 'text-green-600']"
            icon="iconamoon:check-duotone"
            v-if="user.user_kyc_level >= 1"
          />
        </span>

        <span
          :class="[
            active == 'identity' ? 'bg-primary' : 'bg-white',
            'flex justify-between w-full p-4 rounded-lg transition-20'
          ]"
          role="button"
          @click="makeActive('identity')"
        >
          <span class="flex flex-col w-full">
            <span :class="[active == 'identity' ? 'text-white' : '', 'font-semibold text-sm']"
              >Tier 2</span
            >
            <span
              :class="['lg:block md:block hidden',
                active == 'identity' ? 'text-gray-200' : 'text-gray-400',
                'font-medium text-sm'
              ]"
              >Identity Verification</span
            >
          </span>
          <i-icon
            :class="['text-xl font-bold', active == 'identity' ? 'text-green-600 bg-white rounded-full' : 'text-green-600']"
            icon="iconamoon:check-duotone"
            v-if="user.user_kyc_level >= 2"
          />
        </span>
      </div>

      <div v-if="active" class="bg-white p-6 rounded-lg transition-20 flex-1">
        <BVNVerification v-if="active == 'bvn'" />
        <identity v-if="active == 'identity'" />
      </div>
    </div>
  </div>
</template>

<script>
import BVNVerification from './KYC/BVN.vue'
import Identity from './KYC/Identity.vue'
export default {
  components: { BVNVerification, Identity },
  data() {
    return {
      active: 'bvn'
    }
  },

  methods: {
    makeActive(e) {
      this.active = e
      // function isMobileDevice() {
      //   return window.matchMedia('(max-width: 767px)').matches
      // }
      // if (isMobileDevice()) {
      //   console.log('You are using a mobile device')
      //   this.$router.push(`/app/kyc/${e}`)
      //   console.log(e)
      // } else {
      //   console.log('You are using a desktop device')
      //   this.active = this.active == null ? e : this.active !== e ? e : null

      // }
    },
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
