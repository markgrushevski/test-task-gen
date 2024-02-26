<script lang="ts" setup>
defineProps<{ list: { id: string | number; value: string }[] }>();
</script>

<template>
    <ul class="my-list">
        <li v-for="item in list" :key="item.id" :title="'id: ' + item.id">{{ item.value }}</li>
    </ul>
</template>

<style>
.my-list {
    list-style: none;
    padding: 0 8px;
}

.my-list li {
    padding: 4px 8px;

    min-height: 1.5em;

    font-size: 14px;

    border-radius: 4px;
    cursor: default;
}

.my-list li:hover {
    background-color: #f0f0f0;
}
</style>
