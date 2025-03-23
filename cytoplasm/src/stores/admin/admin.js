import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const userAdminStore = defineStore('admin', () => {
    const data = reactive({
        name: "",
        token: "",
        expireDate: ""
    })

    const save = (name, token, expireDate) => {
        data.name = name
        data.token = token
        data.expireDate = expireDate
    }

    return {
        data,
        save
    }
}, {
    persist: true //持久化存储到localStorage中
})

export { userAdminStore }