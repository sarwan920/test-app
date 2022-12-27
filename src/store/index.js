import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      jobData: [],
      loading: false,
    };
  },
  mutations: {
    async getData(state) {
      state.loading = true;
      const token = "244|AZGdoqbpo4gEzxSzAkznhKlBpMiUufWsOr7ZEeDe";
      try {
        const res = await axios.get(
          "https://api.publish.jobs/api/user-business-jobs",
          { headers: { Authorization: "Bearer " + token } }
        );
        state.jobData = res.data.data;
        console.log(state.jobData);
        state.loading = false;
      } catch (error) {
        state.loading = false;
        console.log(error);
      }
    },
  },
  actions: {
    async getData(context) {
      context.commit("getData");
    },
  },
});

export default store;
