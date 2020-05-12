<template>
    <button type="button" class="button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "TransparentButton",
        components: {}
    }
</script>

<style lang="scss" scoped>
    $color-blue: #506981;

    .button {
        border: 1px solid $color-blue;
        border-radius: 4px;
        background-color: transparent;
        color: $color-blue;
        font-family: 'PT Sans', sans-serif;
        font-size: 18px;
        line-height: 18px;
        height: 100%;
        width: 100%;
        padding: 14px 0 10px;
        cursor: pointer;

        @media (max-width: 425px) {
            padding: 5px 7px 4px 7px;
            line-height: 16px;
            font-size: 14px;
        }
    }
</style>