<script lang="ts" setup>
import { CreateEntityButton, EntitySelect, SavedEntitiesList } from '@components';
</script>

<template>
    <div class="actions">
        <EntitySelect />
        <CreateEntityButton />
    </div>
    <div class="entities">
        <SavedEntitiesList />
    </div>
</template>

<style>
* {
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
    font-optical-sizing: auto;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
}

body {
    margin: 16px;
}

#app {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 16px;

    width: 100%;
}

#app > * {
    max-width: 100%;
}

.actions {
    margin-top: 16px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
}

.actions > * {
    height: 38px;

    border-radius: 4px;
}

.entities {
    overflow-x: auto;

    display: flex;
    gap: 16px;
}
</style>
