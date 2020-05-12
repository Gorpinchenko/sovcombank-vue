<template>
    <div class="select-arrow">
        <div class="select-arrow__wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectArrow"
    }
</script>

<style lang="scss" scoped>
    .select-arrow {
        position: relative;
        cursor: pointer;
    }

    .select-arrow__wrapper::after {
        position: absolute;
        top: 50%;
        right: 16px;
        display: block;
        content: "";
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #63758c;
    }

    @media (max-width: 425px) {
        .select-arrow__wrapper::after {
            right: 5px;
        }
    }
</style>