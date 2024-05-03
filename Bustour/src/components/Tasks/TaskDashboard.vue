<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/tasks.js'
import { useUsersStore } from "@/stores/users.js";

import TaskItem from '@/components/Tasks/TaskItem.vue'
import TaskCreate from '@/components/Tasks/TaskCreate.vue'

const tasksStore = useTaskStore()
const usersStore = useUsersStore()
const { tasks } = storeToRefs(tasksStore)
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-md">
            <h2 class="text-center text-2xl font-bold mb-4">Task List</h2>

            <TaskCreate/>

            <ul class="mt-4">
                <TaskItem v-for="task in tasks" :key="task.id" :task="task" :users="usersStore.users"/>
            </ul>
        </div>
    </div>

</template>