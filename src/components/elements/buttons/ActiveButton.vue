<template>
    <button
            type="button"
            class="button"
            :class="isActive ? 'button_active button_before-cross' : 'button_before-plus'"
            @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "ActiveButton",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        components: {}
    }
</script>

<style lang="scss" scoped>
    $color-blue: #506981;

    .button {
        padding: 0;
        background: transparent;
        border: transparent;
        color: $color-blue;
        font-size: 16px;
        font-family: 'PT Sans', sans-serif;

        &:hover {
            cursor: pointer;
        }

        &:before {
            color: $color-blue;
            display: inline-block;
            width: 13px;
            height: 13px;
            border: 2px solid $color-blue;
            text-align: center;
            border-radius: 50%;
            font-size: 14px;
            line-height: 12px;
            font-weight: 700;
        }

        &_active {
            color: #adb9c4;
        }

        &_before-cross:before {
            content: '\d7';
        }

        &_before-plus:before {
            content: '+';
        }
    }
</style>