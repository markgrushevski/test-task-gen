<script lang="ts" setup>
withDefaults(defineProps<{ width?: string; height?: string; color?: string }>(), {
    width: '1.5em',
    height: '1.5em',
    color: '#ffffff'
});
</script>

<template>
    <div class="my-loader"></div>
</template>

<style>
.my-loader {
    display: inline-block;
    width: v-bind(width);
    height: v-bind(height);

    border: 2px solid v-bind(color);

    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;

    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
