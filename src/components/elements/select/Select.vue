<template>
    <select
            class="select"
            v-model="option"
    >
        <option v-for="option in options" :key="option">
            {{ option }}
        </option>
    </select>
</template>

<script>
    export default {
        name: "Select",
        props: ['options'],
        created() {
            this.$emit('change', this.option)
        },
        computed: {
            option: {
                get() {
                    return this.options[0]
                },
                set(value) {
                    this.$emit('change', value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .select {
        appearance: none;
        padding: 15px 20px 11px 20px;
        line-height: 18px;
        border: none;
        background-color: #ffffff;
        box-sizing: border-box;
        width: 100%;
        border: 0;
        height: 100%;
        color: #323232;
        font-size: 18px;
        cursor: pointer;

        @media (max-width: 425px) {
            padding: 5px 7px 4px 7px;
            font-size: 12px;
        }
    }
</style>