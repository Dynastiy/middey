<template>
  <div class="">
    <div>
      <!-- <div
          class="bg-secondary lg:w-16 lg:h-16 md:w-16 md:h-16 h-28 w-28 p-3 mx-auto rounded-full"
        >
          <img src="@/assets/img/login.svg" alt="" />
        </div>
        <div class="text-center mb-3">
          <h3 class="text-2xl font-bold mb-0">Welcome Back</h3>
          <span class="text-xs block">Please, enter your details</span>
        </div> -->
      <!-- <div>
          <span class="text-xs text-error" v-for="(item, idx) in validationErrors" :key="idx">{{
            item
          }}</span>
        </div> -->
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-4">
        <div>
          <label for="">Email</label>
          <Field name="email" class="input" placeholder="Email" type="email" rules="email" />
          <ErrorMessage name="email" class="text-xs text-error"></ErrorMessage>
        </div>

        <div>
          <label for="">Password</label>
          <Field name="password" v-slot="{ field }" rules="required">
            <div class="input-field">
              <input
                :type="typePassword ? 'password' : 'text'"
                name="password"
                id="password"
                placeholder="Password"
                v-bind="field"
              />
              <span class="password-iccon" role="button" @click="typePassword = !typePassword">
                <i-icon
                  :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                  class="form-icon"
                />
              </span>
            </div>
          </Field>
          <ErrorMessage name="password" class="text-xs text-error"></ErrorMessage>
        </div>

        <div class="text-right">
          <router-link class="text-[16px] font-semibold text-primaryColor" to="/forgot-password"
            >Forgot Password?</router-link
          >
        </div>

        <div class="text-center mt-3">
          <button
            class="btn-brand w-full"
            :disabled="isLoading || !meta.valid"
            :class="[isLoading ? 'bg-gray4 text-gray2' : !meta.valid ? 'bg-gray4 text-gray2' : '']"
          >
            Login
          </button>
        </div>
        <div>
          <span class="flex justify-center gap-1 text-[16px] mt-3">
            <span>Don't have an account?</span>
            <router-link class="font-semibold text-primaryColor" to="/register"
              >Signup for free</router-link
            >
          </span>
        </div>
      </vForm>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      typePassword: true,
      isLoading: false
    }
  },

  methods: {
    async onSubmit(values) {
      this.isLoading = true
      const credentials = {
        user_email: values.email,
        user_password: values.password
      }
      try {
        let vRes = await this.$auth.login(credentials)
        console.log(vRes)
        let userData = vRes.data
          this.$store.commit('auth/login', {
            token: userData.access_token,
            user: userData
          })
          localStorage.setItem('_user_token', userData.token)
          let redirectFrom = this.$route.query.redirect
          let toRoute = '/'
          let urlTo = redirectFrom ? redirectFrom : toRoute
          this.$router.push(urlTo)
      } catch (error) {
        return error
      } finally {
        this.isLoading = false
      }
    }
  },

  mounted() {},

  computed: {}
}
</script>
