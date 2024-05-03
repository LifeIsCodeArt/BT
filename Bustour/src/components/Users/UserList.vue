<script setup>
const props = defineProps({
    user: {
        type: Object,
        default: () => {}
    }
})
</script>

<template>

    <div class="flex flex-col text-black border border-2 border-gray-500 px-3 py-3 rounded-md">

        <h4 class="font-bold inter text-[20px]">User Name: <span class="font-medium inter text-[18px]">{{user.name}}</span></h4>

        <h4 class="text-center font-bold inter text-[20px] my-[20px]">About company:</h4>

        <p class="font-bold inter text-[20px]">Company Name: <span class="font-medium inter text-[18px]">{{user.company.name}}</span></p>
        <p class="font-bold inter text-[20px]">Catch Phrase: <span class="font-medium inter text-[18px]">{{user.company.catchPhrase}}</span></p>
        <p class="font-bold inter text-[20px]">B S: <span class="font-medium inter text-[18px]">{{user.company.bs}}</span></p>

    </div>

</template>

<style scoped>

</style>