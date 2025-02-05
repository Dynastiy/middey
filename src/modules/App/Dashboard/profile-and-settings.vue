<template>
  <div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm">Profile Name</span>
        <span class="text-gray-400 font-medium text-sm">{{
          `${user.first_name} ${user.last_name}`
        }}</span>
      </span>

      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm">Username</span>
        <span class="text-gray-400 font-medium text-sm">{{ `${user.display_name}` }}</span>
      </span>

      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm flex items-center gap-2"
          >Email
          <span
            :class="[
              'text-[11px] rounded-lg px-[8px] w-fit block',
              user.nll_user_email_address_verified
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            ]"
            >{{ user.nll_user_email_address_verified ? 'verified' : 'not verified' }}</span
          >
        </span>
        <span class="text-gray-400 font-medium text-sm">{{ `${user.user_email}` }} </span>
        <span class="underline text-primary block text-[12px] font-semibold" role="button"
          >Verify</span
        >
      </span>

      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm flex items-center gap-2"
          >BVN
          <span
            :class="[
              'text-[11px] rounded-lg px-[8px] w-fit block',
              user.bvn ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            ]"
            >{{ user.bvn ? 'verified' : 'not verified' }}</span
          >
        </span>
        <span class="text-gray-400 font-medium text-sm">{{ `XXXXXXXXX` }}</span>
        <span class="underline text-primary block text-[12px] font-semibold" role="button" @click="$router.push('/app/kyc')"
          >Verify</span
        >
      </span>

      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm">Change Password</span>
        <span class="text-gray-400 font-medium text-sm">Request for a change of password</span>
        <span class="underline text-primary block text-[12px] font-semibold" role="button"
          >Request</span
        >
      </span>

      <span class="flex flex-col bg-white p-4 rounded-lg">
        <span class="font-semibold text-sm">Deactivate Account</span>
        <span class="text-gray-400 font-medium text-sm">Do you wish to <span class="text-red-500 font-semibold">close</span> your account?</span>
        <span class="underline text-red-500 block text-[12px] font-semibold" role="button"
          >Deactivate</span
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
