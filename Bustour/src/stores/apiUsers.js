import { ref } from 'vue'
import { defineStore } from 'pinia'

import getUsers from "@/services/api/getUsers.js";


export const useAPIUsersStore = defineStore('APIUsersStore', () => {

    const users = ref([])

    const getUsersInfo = async () => {
        try {
            const res = await getUsers.getUsers()
            users.value = res.data
            console.log(users.value)
        }
        catch (err) {
            console.log(err)
        }
    }

    return { users, getUsersInfo }

})

