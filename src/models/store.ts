// import { storeModel } from '@/app/store/model';
import { Middleware, store, engines } from 'foca';

const middleware: Middleware[] = [];

store.init({
  compose: 'redux-devtools',
  persist: [
    {
      key: `todo-list-${process.env.NODE_ENV}`,
      version: 1,
      engine: engines.localStorage,
      models: [],
    },
  ],
});
