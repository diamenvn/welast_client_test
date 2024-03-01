import { defineModel } from 'foca';
import { POST_CONFIG } from "../../config/posts.config";
import { IPostPageProps } from '@/interfaces';

const initialState: IPostPageProps = {
  posts: POST_CONFIG
};

export const postsModel = defineModel('posts', {
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
});
