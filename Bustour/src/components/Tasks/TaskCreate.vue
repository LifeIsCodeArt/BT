<script setup>
import {computed, ref} from "vue";
import { useTaskStore } from '@/stores/tasks.js'
import {useUsersStore} from "@/stores/users.js";

const usersStore = useUsersStore()
const tasksStore = useTaskStore()

const countTasks = computed(()=> tasksStore.tasks.length)

const newTask = ref({
    title: '',
    description: '',
    attachedUser: null,
});


const addTask = () => {
    tasksStore.addTask({ id: countTasks.value + 1 , ...newTask.value })
    newTask.value = { title: '', description: '', attachedUser: null };
};

</script>

<template>

    <form @submit.prevent="addTask" class="space-y-4">

        <div>
            <label for="title" class="text-lg font-semibold">Title:</label>
            <input type="text" id="title" v-model="newTask.title" class="border-2 border-black rounded-md w-full px-3 py-2" required>
        </div>

        <div>
            <label for="description" class="text-lg font-semibold">Description:</label>
            <input type="text" id="description" v-model="newTask.description" class="border-2 border-black rounded-md w-full px-3 py-2" required>
        </div>

        <div>
            <label for="user" class="text-lg font-semibold">Assign User:</label>
            <select id="user" v-model="newTask.assignedUser" class="border-2 border-black rounded-md w-full px-3 py-2">
                <option value="" selected>None</option>
                <option v-for="user in usersStore.users" :key="user.id" :value="user">{{user.name}}</option>
            </select>
        </div>

        <button type="submit" class="bg-green-500 text-white font-semibold px-4 py-2 rounded-md">Add Task</button>
    </form>

</template>

<style scoped>

</style>