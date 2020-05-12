<template>
    <input
            class="text-input"
            :type="type"
            @input="$emit('input', $event.target.value)"
    >
</template>

<script>
    export default {
        name: "TextInput",
        props: {
            type: {
                type: String,
                default: 'text'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .text-input {
        padding: 12px 20px 9px 20px;
        color: #323232;
        font-family: 'PT Sans', sans-serif;
        font-size: 18px;
        line-height: 18px;
        border: none;
        background-color: #ffffff;
        box-sizing: border-box;
        width: 100%;
        appearance: none;

        @media (max-width: 425px) {
            padding: 5px 7px 4px 7px;
            font-size: 12px;
        }

        &[type="number"] {
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                appearance: none;
            }
        }
    }
</style>