<script lang="ts" setup></script>

<template>
    <button class="my-button">
        <slot></slot>
    </button>
</template>

<style>
.my-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 110px;

    font-weight: 700;

    border: 1px solid #1888ff;
    background-color: #209cff;
    color: white;

    cursor: pointer;
}

.my-button:disabled {
    border-color: darkgrey;
    background-color: #f8f8f8;
    color: black;
    cursor: default;
}
</style>
