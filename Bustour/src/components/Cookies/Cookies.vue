<script setup>
import { ref } from 'vue';

const selectedOption = ref('');
const saveToCookie = ref(false);

const saveData = () => {
    if (saveToCookie.value) {
        const date = new Date(Date.now() + (15 * 60 * 1000));
        document.cookie = `selectedOption=${selectedOption.value}; expires=${date.toUTCString()}`;
        console.log("Data saved to cookie:", document.cookie);
    } else {
        console.log("Data not saved to cookie");
    }
};
</script>

<template>
    <div>
        <select v-model="selectedOption">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>

        <label>
            <input type="checkbox" v-model="saveToCookie"> Save to Cookie
        </label>

        <button @click="saveData">Save</button>
    </div>
</template>