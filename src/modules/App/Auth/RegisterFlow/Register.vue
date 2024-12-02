<template>
  <div class="">
    <h5 class="font-bold lg:text-3xl md:text-3xl text-2xl">Welcome to Middey</h5>
    <h6
      class="font-regular text-grayText text-[13px]"
      v-text="'Provide the following details to create an account'"
    ></h6>

    <vForm @submit="onSubmit" v-slot="{ meta }" class="grid grid-cols-2 gap-3 mt-4">
      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="First Name"
          type="text"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="Last Name"
          type="text"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="Username"
          type="text"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div>
        <vField
          name="identifier"
          class="input"
          placeholder="Phone Number"
          type="tel"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div class="col-span-2">
        <vField
          name="identifier"
          class="input"
          placeholder="Email"
          type="email"
          rules="required"
        />
        <ErrorMessage name="identifier" class="text-xs text-error"></ErrorMessage>
      </div>

      <div class="col-span-2">
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

      <div class="col-span-2">
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
          Register
        </button>
      </div>
      <div class="mt-3">
        <span class="flex justify-center gap-1 text-[14px]">
          <span class="font-medium text-grayText">Already have an account?</span>
          <router-link class="font-semibold text-secondary" to="/login">Login here</router-link>
        </span>
      </div>
      </div>
    </vForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      typePassword: true,
      selectedType: 'personal'
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/register/intro-page')
    },

    selectType(item) {
      this.selectedType = item
    }
  }
}
</script>

<style></style>
