import { defineStore } from 'pinia';
import {ref} from "vue";



export const useTaskStore = defineStore('taskStore', () => {

   const tasks = ref([
       {
           id: 1,
           title: 'sample text',
           description: 'sample',
           assignedUser: {
               id: 1,
               name: 'Vasyl',
               email: 'vasya@mail.com'
           }
       },
       {
           id: 2,
           title: 'sample text2',
           description: 'sample2',
           assignedUser: {
               id: 2, name: 'Ivan', email: 'ivan@mail.com'
           }
       },
       {
           id: 3,
           title: 'sample text3',
           description: 'sample3',
           assignedUser: {
               id: 3, name: 'Marta', email: 'robokopster@mail.com'
           }
       },
       {
           id: 4,
           title: 'sample text4',
           description: 'sample4',
           assignedUser: {
               id: 3, name: 'Marta', email: 'robokopster@mail.com'
           }
       },
       {
           id: 5,
           title: 'sample text5',
           description: 'sample5',
           assignedUser: {
               id: 1,
               name: 'Vasyl',
               email: 'vasya@mail.com'
           }
       }

   ])

    const users = [
        { id: 1, name: 'Vasyl', email: 'vasya@mail.com' },
        { id: 2, name: 'Ivan', email: 'ivan@mail.com' },
        { id: 3, name: 'Marta', email: 'robokopster@mail.com' },
        { id: 4, name: 'Kristina', email: 'devkasperchikom@mail.com' },
        { id: 5, name: 'Petro', email: 'nagibator@mail.com' },
    ]

    const addTask = (task) => {

        tasks.value.push(task);

    }

    const editTask = (id, updatedTask) => {

        const index = tasks.value.findIndex(task => task.id === id);

        if (index !== -1) {

            // Замена текущего задания на обновлённое

            tasks.value.splice(index, 1, updatedTask);
        }
    }

    const deleteTask = (id) =>{

        const index = tasks.value.findIndex(task => task.id === id);

        if (index !== -1) {
            tasks.value.splice(index, 1);
        }
    }

    return { tasks, users, addTask, deleteTask, editTask }
})
