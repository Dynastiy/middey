<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <h4 class="font-semibold text-lg">Identity Verification</h4>
      <span>
        <span>
          <span></span>
        </span>
        <span
          ><span class="text-[12px] font-medium">Step {{ activeStep }} of</span> <span class="font-semibold text-primary">{{ totalSteps }}</span>
        </span>
      </span>
    </div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-3">
      <template v-if="activeStep == 1">
        <div>
          <label for="" class="flex gap-1 mb-1">1. Upload Passport photograph</label>
          <div>
            <div
              class="stream border-gray-600 mt-5 fixed top-0 left-0 w-full h-screen"
              v-if="activated"
            >
              <qr-stream @decode="onDecode" ref="qrStream" @error="onError" class="mb">
                <div style="color: red" class="frame"></div>
              </qr-stream>
            </div>
          </div>
          <span>Take Again</span>
          <span>Capture</span>
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">2. Gender</label>
          <select class="input" name="bank" as="select">
            <option value="" disabled selected>Select Gender</option>
          </select>
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">3. Date of Birth</label>

          <input name="identifier" class="input" placeholder="Date of Birth" type="date" />
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">4. Country of origin</label>
          <select class="input" name="bank" as="select">
            <option value="" disabled selected>Select Country</option>
          </select>
        </div>
      </template>

      <template v-if="activeStep == 2">
        <div>
          <h4 class="font-semibold text-md">Choose your document</h4>
          <h6 class="text-[13px] text-gray-400 font-medium">
            Document to upload must be an official ID
          </h6>
          <div class="flex flex-col gap-4 mt-3">
            <span
              @click="selectDoc(item)"
              role="button"
              :class="[
                selectedDoc == item.label ? 'border-2 border-primary' : ' ',
                'bg-gray-100 flex justify-between items-center py-2 px-2 rounded-lg'
              ]"
              v-for="(item, idx) in documents"
              :key="idx"
            >
              <div class="flex gap-3 items-center">
                <span class="bg-gray-200 block p-3 rounded-full">
                  <i-icon :icon="item.icon" class="text-3xl" />
                </span>
                <div>
                  <h5 class="font-semibold capitalize">
                    {{ item.label.split('_').join(' ') }}
                  </h5>
                  <h6 class="text-xs text-gray-500">Front and back</h6>
                </div>
              </div>
              <span>
                <i-icon icon="uim:angle-right" class="text-xl" />
              </span>
            </span>
          </div>
        </div>
      </template>

      <template v-if="activeStep == 3">
        <div>
          <label for="" class="flex gap-1 mb-1">1. Document Identity Number</label>

          <input
            name="identifier"
            class="input"
            placeholder="Enter Document Identity Number"
            type="tel"
          />
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">2. Front View</label>
          <div class="bg-gray-100 h-36 rounded-lg flex items-center justify-center flex-col gap-2">
            <i-icon icon="fluent:camera-24-regular" class="text-5xl" />
            <span role="button" class="brand-btn-md block py-2 w-fit brand-primary"
              >Take a shot</span
            >
          </div>
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">3. Back View</label>
          <div class="bg-gray-100 h-36 rounded-lg flex items-center justify-center flex-col gap-2">
            <i-icon icon="fluent:camera-24-regular" class="text-5xl" />
            <span role="button" class="brand-btn-md block py-2 w-fit brand-primary"
              >Take a shot</span
            >
          </div>
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">4. Date Issued</label>
          <input name="identifier" class="input" placeholder="Date Issued" type="date" />
        </div>

        <div>
          <label for="" class="flex gap-1 mb-1">4. Expiry Date</label>

          <input name="identifier" class="input" placeholder="Expiry Date" type="date" />
        </div>
      </template>

      <div class="mt-3 flex justify-end gap-4 w-6/12 ml-auto">
        <span
          role="button"
          @click="prevPage"
          class="brand-btn brand-primary flex justify-between w-full items-center"
          v-if="activeStep > 1"
          >Previous
          <span>
            <i-icon icon="uim:angle-right" class="text-xl" />
          </span>
        </span>
        
        <button
          class="brand-btn flex w-full items-center"
          :class="[
            isLoading ? 'bg-gray400 text-gray600' : 'brand-primary',
            activeStep < 3 ? ' justify-between' : 'justify-center'
          ]"
        >
          {{ activeStep < 3 ? 'Next' : 'Complete' }}
          <span v-if="activeStep < 3">
            <i-icon icon="uim:angle-right" class="text-xl" />
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { QrStream } from 'vue3-qr-reader'
export default {
  components: {
    QrStream
  },

  data() {
    return {
      isLoading: false,
      activeStep: 1,
      totalSteps: 3,
      activated: false,
      documents: [
        { icon: 'fluent:vehicle-car-profile-ltr-16-regular', label: `driver's_license` },
        { icon: 'material-symbols:id-card-outline', label: 'ID_card/NIN' },
        { icon: 'material-symbols:id-card-outline', label: 'voters_card' },
        { label: 'international_passport', icon: 'material-symbols:id-card-outline' }
      ],
      selectedDoc: null
    }
  },

  methods: {
    onDecode(data) {
      // this.$router.push(`/transfer?wallet_address=${data}`)
      console.log(data)
      this.stopStream()
      this.activated = false
    },

    selectDoc(e) {
      this.selectedDoc = e.label
      this.activeStep++
    },

    prevPage() {
      this.activeStep--
    },

    onSubmit() {
      if (this.activeStep == this.totalSteps) {
        this.submitForm()
        return
      }
      this.activeStep++
    },

    submitForm() {
      alert('submitted')
    }
  }
}
</script>

<style></style>
