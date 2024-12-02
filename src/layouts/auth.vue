<template>
  <div>
    <div
      class="flex h-screen lg:flex-row md:flex-row flex-col  bg-white p-6 gap-4"
    >
      <div class="left-side flex-1 h-full items-center bg-primary p-6 rounded-xl justify-center lg:flex md:flex hidden">
        <div class="text-center text-white">
          <img src="@/assets/BrandImg/middey-logo-white.png" class="mx-auto mb-3 w-64" alt="" />
          <h5>Explore banking with Middey</h5>
          <hr class="w-3/12 border-2 mx-auto my-2" />
          <h5>Welcome to the future of banking with Middey.</h5>
          <h6>Middey offers world class-banking services, made just for you.</h6>
        </div>
      </div>

      <div
        :class="'rounded-xl bg-white lg:p-8 md:p-6 p-0 lg:w-6/12 md:w-6/12 w-full flex lg:items-center md:items-center lg:justify-center md:justify-center h-full'"
      >
        <div class="w-full">
          <img src="@/assets/BrandImg/middey-logo-colored.png" class="mx-auto mb-4 lg:hidden md:hidden block w-36" alt="" />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    },
    isInfoPage() {
      return this.$route.meta.isInfoPage
    }
  }
}
</script>

<style>
.grid-container {
  grid-template-columns: 60px 250px auto 250px 60px;
}

.grid-container div:not(:last-child) {
  border-right: 1px dashed var(---border-color);
}

.content {
  box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 4px 7px 134px 39px rgba(0, 0, 0, 0.03);
}

@media (max-width: 540px) {
  .content {
    box-shadow: unset;
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
  }
}
</style>
