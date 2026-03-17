import { createStore } from 'vuex'
import { postStore } from './posts'

export interface RootState {
  count: number
}
export const store = createStore<RootState>({
  // состояние
  state: () => ({
    count: 0,
  }),
  // вычисляемые поля
  getters: {
    getCount: (state) => {
      return state.count * 2
    },
  },
  // функции изменения состояния
  mutations: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    setCount(state, count: number) {
      state.count = count
    },
  },
  //модули
  modules: {
    posts: postStore,
  },
})
