<template>
    <label class="switcher">
        <input class="switcher__input" type="checkbox" :value="val" v-model="checked" @change="onChange">
        <span class="switcher__slider"></span>
    </label>
</template>

<script>
    export default {
        name: "AppleSwitcher",
        props: ['value', 'val'],
        data: () => ({
            checkedProxy: false
        }),
        computed: {
            checked: {
                get() {
                    return this.value
                },
                set(val) {
                    this.checkedProxy = val
                }
            }
        },
        methods: {
            onChange: function () {
                this.$emit('input', this.checkedProxy)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .switcher {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 22px;

        &__input {
            display: none;
        }

        &__slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #5e9969;
            border-radius: 34px;

            &:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 2px;
                bottom: 2px;
                border-radius: 50%;
                background-color: #ffffff;
                transition: .4s;
            }
        }

        &__input:checked + &__slider:before {
            transform: translateX(18px);
        }
    }
</style>