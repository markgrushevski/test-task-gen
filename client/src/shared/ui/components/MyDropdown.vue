<script lang="ts" setup>
import type { Entity } from '@shared/types';
import { ref } from 'vue';

defineProps<{ options: Entity[] }>();

const selected = defineModel<Entity>({ default: null });

const active = ref(false);
</script>

<template>
    <div :class="{ 'my-dropdown_active': active }" class="my-dropdown" @click="active = !active">
        <div class="my-dropdown__selected">
            <span>Сущность: {{ selected?.text || 'Не&nbsp;выбрана' }}</span>
            <span :class="{ 'my-dropdown__icon_open': active }" class="my-dropdown__icon">▲</span>
        </div>
        <div v-show="active" class="my-dropdown__options">
            <div
                v-for="option in options"
                :key="option.value"
                :class="{ 'my-dropdown__option_selected': option.value === selected?.value }"
                class="my-dropdown__option"
                @click="selected = option"
            >
                {{ option.text }}
            </div>
        </div>
    </div>
</template>

<style>
.my-dropdown {
    z-index: 1;

    width: 235px;
    height: 32px;

    display: flex;
    flex-direction: column;

    gap: 8px;

    cursor: pointer;
}

.my-dropdown__icon {
    font-size: 14px;
}

.my-dropdown__icon_open {
    transform: rotate(180deg) translateY(-1px);
    transform-origin: center;
}

.my-dropdown__selected {
    padding: 0 8px;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-shrink: 0;

    border: 1px solid darkgrey;
    border-radius: 4px;

    user-select: none;
}

.my-dropdown__options {
    border: 1px solid darkgrey;
    border-radius: 4px;
    background-color: white;
}

.my-dropdown__option {
    padding: 0 16px;

    height: 32px;

    display: flex;
    align-items: center;
}

.my-dropdown__option_selected,
.my-dropdown__option:hover {
    background-color: #f0f0f0;
}
</style>
