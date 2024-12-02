<template>
  <div>
    <li class="relative">
      <router-link
        :to="menu.href"
        :class="[
          { 'active--class text-primary': menu.label === routeName },
          'flex text-[14px] font-medium capitalize font-medium items-center gap-2 py-[10px] px-6',
          {'text-red-500': menu.label == 'logout'}
        ]"
        @click="$emit('closeMenu')"
      >
        <i-icon :icon="menu.icon" />
        {{ menu.label.split('_').join(' ') }}
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    menu: Object
  },

  computed: {
    routeName() {
      return this.$route.meta.name
    }
  }
}
</script>

<style>
.active--class:before {
  content: '';
  position: absolute;
  background: var(---primary-color);
  height: 100%;
  width: 5px;
  border-radius: 0 10px 10px 0;
  left: 0px;
}
.active--class {
  background: #0010300f;
  /* border-radius: 12px; */
  height: 100%;
  width: 100%;
  /* left: 32px; */
}
</style>
