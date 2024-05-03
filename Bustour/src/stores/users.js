import { defineStore } from 'pinia';
import {ref} from "vue";

export const useUsersStore = defineStore('usersStore', () => {

    const users = ref([
        { id: 1, name: 'Vasyl', email: 'vasya@mail.com' },
        { id: 2, name: 'Ivan', email: 'ivan@mail.com' },
        { id: 3, name: 'Marta', email: 'robokopster@mail.com' },
        { id: 4, name: 'Kristina', email: 'devkasperchikom@mail.com' },
        { id: 5, name: 'Petro', email: 'nagibator@mail.com' },
    ])

    const addUser = () => {}

    const editUser = () => {}

    const deleteUser = () => {}

    return { users, addUser, editUser, deleteUser }
})
