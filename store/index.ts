import { defineStore } from 'pinia'

//vue 2 style
export const useMainStore = defineStore('main', {
  state: () => ({
    employees: [],
    count: 0
  }),
  
  actions: {
    increment() {
      this.count++
    },
  },

  
})
