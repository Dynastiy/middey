<template>
  <div class="">
    <div>
      <vForm @submit="onSubmit" v-slot="{ meta, values }" class="flex flex-col gap-2">
        <div>
            {{values}}
        </div>
        <div class="flex lg:flex-row md:flex-row flex-col gap-3">
          <div class="w-full">
            <label for="">First Name</label>
            <Field
              name="first_name"
              class="input"
              placeholder="First Name"
              type="text"
              rules="required"
            />
            <ErrorMessage name="first_name" class="text-xs text-error"></ErrorMessage>
          </div>

          <div class="w-full">
            <label for="">Last Name</label>
            <Field
              name="last_name"
              class="input"
              placeholder="Last Name"
              type="text"
              rules="required"
            />
            <ErrorMessage name="last_name" class="text-xs text-error"></ErrorMessage>
          </div>
        </div>

        <div class="flex lg:flex-row md:flex-row flex-col gap-4">
          <div class="w-full">
            <label for="">Username</label>
            <Field
              name="username"
              class="input"
              placeholder="Username"
              type="text"
              rules="required"
            />
            <ErrorMessage name="username" class="text-xs text-error"></ErrorMessage>
          </div>

          <div class="w-full">
            <label for="">Phone Number</label>
            <Field
              name="phone_number"
              class="input"
              placeholder="Phone Number"
              type="tel"
              rules="required"
            />
            <ErrorMessage name="phone_number" class="text-xs text-error"></ErrorMessage>
          </div>
        </div>

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

        <div class="text-center mt-4">
          <button
            class="btn-brand w-full"
            :disabled="isLoading"
            :class="[isLoading ? 'bg-gray4 text-gray2' : !meta.valid ? 'bg-gray4 text-gray2' : '']"
          >
            Create Account
          </button>
        </div>
        <div>
          <span class="flex justify-center gap-1 mt-3 text-[16px]">
            <span>Already have an account?</span>
            <router-link class="font-semibold text-primaryColor" to="/login">Login</router-link>
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
      isLoading: false,
      errors: null,
      error: null
    }
  },

  methods: {
    async onSubmit(values) {
        this.isLoading = true
        var credentials = {
          first_name: values.first_name,
          last_name: values.last_name,
          user_email: values.email,
          user_password: values.password,
          username: values.username,
        //   rimplenet_referrer_sponsor: values.rimplenet_referrer_sponsor,
          phone_number: values.phone_number
        }
        try {
          let vreq = await this.$auth.createAccount(credentials)
          console.log(vreq)
          this.$router.push('/login')
        } catch (error) {
          return error
        } finally {
          this.isLoading = false
        }
      console.log('hello:', values)
    },

    sendVerifyToken(value) {
      this.$request
        .get(
          `/verify-email-address?email_address=${value.email_address}&fire_email=${value.fire_email}`
        )
        .then((res) => {
          this.$router.push(`/verify-email?email=${value.email_address}`)
          return res
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  computed: {}
}
</script>
