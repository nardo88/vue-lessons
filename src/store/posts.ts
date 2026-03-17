import { Module } from 'vuex'
import { RootState } from './'
import { api } from '../components/api'

interface IPost {
  id: number
  title: string
  description: string
}
export interface IPostState {
  list: IPost[]
  isLoading: boolean
  show: boolean
  total: number
}

export const postStore: Module<IPostState, RootState> = {
  namespaced: true,
  state: () => ({
    list: [],
    isLoading: false,
    show: false,
    total: 0,
  }),
  getters: {
    getCount(state) {
      return state.total
    },
    getPosts(state) {
      return state.list
    },
  },
  mutations: {
    setPosts(state, opt: { data: IPost[]; total: number }) {
      const { data, total } = opt
      state.list = data
      state.total = total
    },
    addPost(state, post: Pick<IPost, 'description' | 'title'>) {
      state.list.push({ id: Date.now(), ...post })
      state.show = false
    },
    deletePots(state, id: number) {
      state.list = state.list.filter((i) => i.id !== id)
    },
    showModal(state) {
      state.show = true
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const { data } = await api.get('/items', {
        params: {
          sortBy: 'title',
        },
      })
      commit('setPosts', data)
    },
  },
}
