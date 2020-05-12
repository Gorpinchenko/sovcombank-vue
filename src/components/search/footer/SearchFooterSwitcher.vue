<template>
    <div class="search-footer-switcher">
        <div
                class="search-footer-switcher__text"
                :class="{'search-footer-switcher__text_active': !isActive}"
                @click="$emit('click', false)"
        >
            <slot name="left-text"></slot>
        </div>
        <div class="search-footer-switcher__switcher">
            <AppleSwitcher v-model="switcher"/>
        </div>
        <div
                class="search-footer-switcher__text"
                :class="{'search-footer-switcher__text_active': isActive}"
                @click="$emit('click', true)"
        >
            <slot name="right-text"></slot>
        </div>
    </div>
</template>

<script>
    import AppleSwitcher from "@/components/elements/switcher/AppleSwitcher";

    export default {
        name: "SearchFooterSwitcher",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        components: {
            AppleSwitcher
        },
        computed: {
            switcher: {
                get() {
                    return this.isActive
                },
                set(value) {
                    this.$emit('click', value)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .search-footer-switcher {
        &__switcher {
            padding: 0 12px;
        }

        &__text {
            color: #506981;
            font-size: 16px;
            cursor: pointer;
            border-bottom: 1px dotted #506981;
            margin-bottom: 6px;

            @media (max-width: 425px) {
                font-size: 12px;
                margin-bottom: 11px;
            }

            &_active {
                color: #adb9c4;
                border-bottom: none;
            }
        }
    }
</style>