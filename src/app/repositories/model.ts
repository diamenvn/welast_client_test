import { repoService } from "@/services";
import { defineModel } from "foca";

const initialState = {
  list: [],
};

export const repoModel = defineModel("repo", {
  initialState,
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action,
      };
    },
    clearState() {
      return {
        ...initialState,
      };
    },
    getState(state) {
      return state;
    },
  },
  methods: {
    async getListRepositories() {
      const response = await repoService.getListRepositories();
      if (response) {
        this.updateState({ list: response });
      } else {
        console.log("fetch repo", response);
      }
    },
  },
  events: {
    onChange(prevState, nextState) {
      // console.log(prevState, nextState);
    },
  },
});
