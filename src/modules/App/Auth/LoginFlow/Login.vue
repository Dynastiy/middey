<template>
  <div class="">
    <h5 class="font-bold lg:text-3xl md:text-3xl text-2xl">Sign In</h5>
    <h6
      class="font-regular text-grayText text-[13px]"
      v-text="'Enter your details to Login'"
    ></h6>
    <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-8">
      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="Email"
          type="text"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <vField name="password" v-slot="{ field }" rules="required">
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
        </vField>
        <ErrorMessage name="password" class="text-xs text-error"></ErrorMessage>
      </div>

      <div class="">
        <router-link class="text-[14px] font-semibold text-secondary" to="/forgot-password"
          >Forgot Password?</router-link
        >
      </div>

      <div class="text-center mt-3">
        <button
          class="brand-btn w-full"
          :disabled="isLoading || !meta.valid"
          :class="[
            isLoading
              ? 'bg-gray400 text-gray600'
              : meta.valid
                ? 'brand-primary'
                : 'bg-gray400 text-gray600'
          ]"
        >
          Sign In
        </button>
      </div>
      <div class="mt-3">
        <span class="flex justify-center gap-1 text-[14px]">
          <span class="font-medium text-grayText">Don't have an account?</span>
          <router-link class="font-semibold text-secondary" to="/register"
            >Register here</router-link
          >
        </span>
      </div>
    </vForm>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      typePassword: true
    }
  },

  methods: {
   async onSubmit(values) {
    this.isLoading = true
      // this.$router.push('/login/secret-pin')
      let payload = {
        user_email: values.identifier,
        user_password: values.password
      }
      try {
        let req = await this.$auth.login(payload)
        // console.log(req)
        let accessToken = req.data.access_token
          // Encrypt the token
          localStorage.setItem('_middey_user_token', this.$encryptToken(accessToken))
          let token = this.$encryptToken(accessToken)
          let userData = req.data
          this.getUser(token, userData)
      } catch (error) {
        return error
      }
      finally {
        this.isLoading = false
      }
    },

    getUser(token, userData){
      let payload = {
        user_id: userData.user_id
      }
      this.$user.profile(payload)
      .then((res)=> {
        let userInfo = res.data
        this.$store.commit('auth/login', {
            user: userInfo,
            token
          })
          const route = this.$route.query.redirect || '/'
          console.log(route);
          
          this.$router.push(route)
      })
    }

  }
}
</script>

<style></style>
