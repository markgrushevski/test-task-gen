<script lang="ts" setup>
import { useEntitiesStore } from '@shared/stores';
import { MyDropdown } from '@shared/ui';
import { computed } from 'vue';

const store = useEntitiesStore();

const options = computed(() =>
    Object.entries(store.entities).map(([key, { text }]) => ({
        value: key,
        text
    }))
);
</script>

<template>
    <MyDropdown v-model="store.selectedEntity" :options="options" />
</template>
