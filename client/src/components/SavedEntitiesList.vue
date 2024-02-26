<script lang="ts" setup>
import { useEntitiesStore } from '@shared/stores';
import { MyList } from '@shared/ui';
import { onMounted } from 'vue';

const store = useEntitiesStore();

onMounted(() => {
    store.getCreatedEntities();
});
</script>

<template>
    <div class="list-wrapper">
        <span>Сделки</span>
        <MyList :list="store.entities.leads.createdEntities" />
    </div>

    <div class="list-wrapper">
        <span>Контакты</span>
        <MyList :list="store.entities.contacts.createdEntities" />
    </div>

    <div class="list-wrapper">
        <span>Компании</span>
        <MyList :list="store.entities.companies.createdEntities" />
    </div>
</template>

<style>
.list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-inline: 1px solid darkgrey;

    border-radius: 4px;
}

.list-wrapper span {
    padding: 8px;
    font-size: 18px;

    cursor: default;
}
</style>
