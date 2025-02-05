<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const address = ref('https://facebook.com')

const onCopy = () => {
  return
}
const onError = () => {
  return
}

// Share to Facebook
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href) // URL of the current page
  const message = encodeURIComponent('Check this out!') // Custom message
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`
  window.open(facebookUrl, '_blank')
}

// Share to Twitter
// const shareToTwitter = () => {
//   const url = encodeURIComponent(window.location.href);
//   const message = encodeURIComponent("Check this out!");
//   const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${message}`;
//   window.open(twitterUrl, "_blank");
// }

// Share to Telegram
const shareToTelegram = () => {
  const url = encodeURIComponent(window.location.href)
  const message = encodeURIComponent('Check this out!')
  const telegramUrl = `https://t.me/share/url?url=${url}&text=${message}`
  window.open(telegramUrl, '_blank')
}

// Share to WhatsApp
const shareToWhatsApp = () => {
  const url = encodeURIComponent(window.location.href)
  const message = encodeURIComponent('Check this out!')
  const whatsappUrl = `https://wa.me/?text=${message} ${url}`
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <span
      class="flex justify-center gap-1 items-center text-center bg-[#E7F6EC] text-[#0F973D] text-sm p-2 rounded-[3px]"
    >
      <Icon icon="mdi:tick-circle" width="18" /> Link created successfully</span
    >

    <div class="bg-white rounded-[12px] p-6 border border-gray-200 flex flex-col gap-6">
      <div class="flex justify-center">
        <QRCodeVue :size="250" :value="address" />
      </div>
      <div class="bg-white rounded-[8px] flex justify-center gap-4 p-2 border border-gray-200">
        <span class="border-r border-gray-200 pr-4 text-sm">https://facebook.com</span>
        <button v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">
          <Icon icon="solar:copy-bold" />
        </button>
      </div>
    </div>

    <button class="brand-btn w-full brand-primary">Save</button>

    <div class="flex gap-2 justify-center">
      <button @click="shareToFacebook" class="bg-[#1F2937] text-white rounded-full p-[5px]">
        <Icon icon="ic:baseline-facebook" />
      </button>

      <!-- <button class="bg-[#1F2937] text-white rounded-full p-[5px]">
        <Icon icon="lucide:instagram" />
      </button> -->

      <button @click="shareToWhatsApp" class="bg-[#1F2937] text-white rounded-full p-[5px]">
        <Icon icon="ic:outline-whatsapp" />
      </button>

      <button @click="shareToTelegram" class="bg-[#1F2937] text-white rounded-full p-[5px]">
        <Icon icon="mingcute:telegram-fill" />
      </button>
    </div>
  </div>
</template>

<style></style>
