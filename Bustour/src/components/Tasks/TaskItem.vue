<script setup>
import { onMounted, ref } from 'vue';
import { useTaskStore } from '@/stores/tasks.js'

const props = defineProps({
    task: {
        type: Object,
        default: () => {}
    },
    users: {
        type: Array,
        default: () => []
    },
})

const tasksStore = useTaskStore()

const attachedUser = ref(null)

const editTask = (id,updatedTask) => {
    tasksStore.editTask(id,updatedTask)
    isEdit.value = false
};


const removeTask = (id) => {
    tasksStore.deleteTask(id)
};

const isEdit = ref(false)

const task = ref({})

onMounted(() => {

    attachedUser.value = props.task.assignedUser
    task.value = props.task

})
</script>

<template>
<div class="bg-gray-200 rounded-md mb-5 p-3">
    <div>
        <label for="title" class="text-lg font-semibold">Title:</label>
        <input type="text" id="title" v-model="task.title" class="border-2 border-black rounded-md w-full px-3 py-2" :disabled="!isEdit" required>
    </div>

    <div>
        <label for="description" class="text-lg font-semibold">Description:</label>
        <input type="text" id="description" v-model="task.description" class="border-2 border-black rounded-md w-full px-3 py-2" :disabled="!isEdit" required>
    </div>

    <div>
        <label for="user" class="text-lg font-semibold">Assign User:</label>
        <select id="user" :disabled="!isEdit" v-model="attachedUser" class="border-2 border-black rounded-md w-full px-3 py-2">
            <option value="None">None</option>
            <option v-for="user in props.users" :key="user.id" :value="user">{{user.name}}</option>
        </select>

    </div>

    <div class="mt-[10px] flex justify-around">
        <template v-if="!isEdit">
                <button @click="isEdit = true" class="bg-green-300 border px-6 py-2 rounded-md">Edit</button>
                <button @click="removeTask(task.id)" class="bg-red-300 border px-6 py-2 rounded-md">Remove</button>
        </template>
        <template v-else>
            <button @click="editTask(task.id, task)" class="bg-green-300 border px-6 py-2 rounded-md">Save</button>
        </template>
    </div>
</div>
</template>

<style scoped>

</style>