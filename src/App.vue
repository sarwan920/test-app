
<template>
  <div class="container mt-10 mx-auto">
    <div v-if="loading" class="flex justify-center mt-48">
      <div role="status">
        <svg aria-hidden="true" class="mr-2 w-28 h-28 text-black-200 animate-spin dark:text-black-600 fill-blue-600"
          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- CARD -->
    <div v-if="!loading" class="flex flex-col space-y-4 justify-center items-center">
      <div v-for="(job, index) in jobData" :key="index"
        class="w-[600px]  shadow-md p-4 border-2 flex flex-col space-y-6 rounded-md">

        <div class="flex flex-row justify-between">
          <div class="flex flex-col space-y-2">
            <h1 class="text-3xl">{{ job.title }}</h1>
            <div class="flex space-x-2 text-gray-400">
              <Icon icon="material-symbols:location-on" width="28" class="my-auto" />
              <h1>Lahore, Pakistan</h1>
            </div>
          </div>

          <div class="flex flex-col space-y-2">
            <h1 v-if="job.status.status === 'active'" class="text-green-500">active</h1>
            <h1 v-if="job.status.status === 'expired'" class="text-red-500">expired</h1>
            <h1 v-if="job.status.status === 'draft'" class="text-orange-400">In Draft</h1>

            <div class="mt-1 flex space-x-2">
              <Icon v-if="job.status.status === 'draft'" class="text-gray-400 cursor-pointer"
                icon="material-symbols:delete" />
              <Icon class="text-gray-400 cursor-pointer" icon="uil:edit" />
            </div>

          </div>

        </div>

        <div class="flex flex-row justify-between">
          <div v-if="job.status.status === 'draft'" class="flex space-x-2">
            <Icon class="bg-orange-500 text-white rounded-md" width="28" icon="fe:disabled" />
            <p class="text-sm my-auto flex space-x-2"> <span class="text-orange-500">InComplete </span> <span>Please Complete
                Your
                Application</span>

            </p>
            <Icon class="my-auto text-[#8477FA] cursor-pointer" icon="ic:baseline-open-in-new" />
          </div>

          <div class="flex space-x-2" v-if="job.status.status !== 'draft'">
            <div class=" bg-[#8477FA] rounded-md">
              <Icon class="my-auto  text-white " width="28" icon="ph:users-thin" />
            </div>
            <p class="my-auto">
              {{ job.jobs_applied.length }} applications recieved
            </p>

          </div>
          <div v-if="job.status.status !== 'draft'" class="flex flex-row text-xs space-x-2">
            <p class="my-auto">
              Disable Job
            </p>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div
                class="w-12 h-7 bg-gray-100 peer-focus:outline-none peer-focus:ring-0  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#8477FA]">
              </div>

            </label>

          </div>
        </div>

        <div class="flex flex-row justify-between">
          <div class="flex space-x-2">
            <Icon class="my-auto text-gray-300" icon="ri:user-3-fill" />
            <p class="text-xs my-auto">Posted by M.Ahmed <span class="ml-1 text-[#8477FA]">{{ $relativeDate(Date.parse(
    job.created_at))
}}</span>
            </p>
          </div>

          <div v-if="job.status.status !== 'draft'" class="flex space-x-2">
            <button class="bg-[#8477FA33] px-4 py-2 rounded-md text-[#8477FA] flex space-x-2">
              <Icon class="my-auto" icon="et:linegraph" />
              <p>
                View Analytics
              </p>
            </button>
            <button class="px-4 py-2 rounded-md text-white bg-[#8477FA] flex space-x-2">
              <Icon class="my-auto" icon="subway:power" />
              <p>

                Compaign Now
              </p>
            </button>
          </div>

        </div>

      </div>


    </div>

  </div>
</template>


<script >
import axios from 'axios'
import { mapState } from 'vuex'
import { Icon } from '@iconify/vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Icon
  },
  computed: {
    ...mapState(['jobData', 'loading'])
  },
  methods: {
    async getData() {
      this.$store.dispatch('getData');
    }
  },
  created() {
    this.getData();
  }
}

</script>



<style scoped>

</style>
