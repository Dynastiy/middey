<template>
  <vDialog
    v-model:visible="visible"
    :style="{ width: '25rem' }"
    modal
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(2px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <div
        class="flex flex-col px-5 py-5 gap-4"
        style="
          border-radius: 12px;
          background-image: radial-gradient(circle at left top, var(---primary), var(---secondary));
        "
      >
        <div>
          <p class="text-md">
            We need some extra infomation in order to verify you & generate your Account Number,
            click <b>Continue</b> below to proceed.
          </p>
        </div>
        <div class="flex align-items-center gap-3">
          <button
            @click="closeCallback"
            text
            class="p-[10px] w-full bg-red-500 rounded-lg text-white"
          >
            Cancel
          </button>
          <button @click="closeCallback" class="p-[10px] w-full bg-green-700 text-white rounded-lg">
            Continue
          </button>
        </div>
      </div>
    </template>
  </vDialog>
</template>

<script>
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
/* MODALS  */
.modal-mask {
  background-color: #000000c6;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  width: 100%;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  place-items: center;
  /* visibility: ; */
}

.modal-content {
  /* width: 40%;
    padding: 30px 45px;
    box-shadow: var(--elevation-1);
    border: none;
    border-radius: 10px; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.3, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
.main-site-map {
  max-height: 500px;
  overflow-y: auto;
}
</style>
