<script lang="ts" setup>
import { useEntitiesStore } from '@shared/stores';
import { MyButton, MyLoader } from '@shared/ui';

const store = useEntitiesStore();
</script>

<template>
    <MyButton :disabled="store.loading || !store.selectedEntity?.value" @click="store.createEntity()">
        <template v-if="!store.loading">Создать</template>
        <template v-else>
            <MyLoader />
        </template>
    </MyButton>
</template>
