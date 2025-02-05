<template>
  <div class="app-drawer py-6 md:w-[250px] w-full md:fixed bg-white h-[90vh] top-0 left-0">
    <ul class="flex flex-col gap-3 h-full">
      <img src="@/assets/brandImg/middey_horizontal.png" class="mx-auto mb-6 block w-36" alt="" />
      <div class="flex flex-1 flex-col justify-between h-full">
        <div class="flex flex-col gap-1">
          <sp-menu
            v-for="route in topMenu"
            :key="route?.href"
            :menu="route"
            @closeMenu="$emit('closeMenu')"
          />
        </div>
        <div class="flex flex-col gap-1">
          <sp-menu
            v-for="route in bottomMenu"
            :key="route?.href"
            :menu="route"
            @closeMenu="$emit('closeMenu')"
          />
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import spMenu from '../UI/spMenu.vue'
export default {
  components: { spMenu },
  props: {
    menu: Array
  },

  computed: {
    topMenu() {
      return this.menu.filter((item) => !item.isBottom)
    },
    bottomMenu() {
      return this.menu.filter((item) => item.isBottom)
    }
  }
}
</script>

<style>
/* .app-drawer {
  border-right: 1px dashed var(---border-color);
} */
</style>
