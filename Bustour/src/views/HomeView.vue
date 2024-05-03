<script setup>
import {useAPIUsersStore} from "@/stores/apiUsers.js";
import {computed, onMounted} from "vue";

import TaskDashboard from '@/components/Tasks/TaskDashboard.vue'
import UserList from '@/components/Users/UserList.vue'
import Cookies from '@/components/Cookies/Cookies.vue'

const usersStore = useAPIUsersStore()
const users = computed(()=> usersStore.users)

onMounted(() => {
    usersStore.getUsersInfo()
    console.log(users)
})
</script>

<template>
    <div class=" w-[100%] h-[100vh] flex flex-col justify-around items-center">

            <Cookies/>

        <div class="grid grid-cols-3 gap-8 pl-[50px] py-[50px]">
            <UserList v-for="user in users" :key="user.id" :user="user"/>
        </div>

        <TaskDashboard />
    </div>
</template>
