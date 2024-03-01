import { defineModel } from 'foca';


export interface ISettingModelProps {
  
}
const initialState: ISettingModelProps = {
  
};

export const settingModel = defineModel('setting', {
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

  },
  events: {
    onChange(prevState, nextState) {
      // console.log(prevState, nextState);
    },
  },
});
