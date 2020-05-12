<template>
    <div class="search-form-meter">
        <template v-if="isSearchForMeter">
            <div class="search-form-meter__col">
                <TextInput
                        :type="'number'"
                        placeholder="От"
                        class="search-form-meter__input"
                        @input="setMinMeter($event)"
                />
            </div>
            <div class="search-form-meter__col">
                <TextInput
                        :type="'number'"
                        placeholder="До"
                        class="search-form-meter__input"
                        @input="setMaxMeter($event)"
                />
            </div>
            <div class="search-form-meter__col">
                м<sup>2</sup>
            </div>
        </template>
        <TransparentButton
                v-else
                @click="$emit('show')"
        >
            Добавить метраж
        </TransparentButton>
    </div>
</template>

<script>
    import TextInput from "@/components/elements/input/TextInput";
    import TransparentButton from "@/components/elements/buttons/TransparentButton";
    import {mapMutations} from "vuex";

    export default {
        name: "SearchFormMeter",
        components: {
            TextInput,
            TransparentButton,
        },
        props: {
            isSearchForMeter: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            ...mapMutations('searchForm', [
                'setMinMeter',
                'setMaxMeter',
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .search-form-meter {
        display: flex;

        &__col {
            flex: 10 10;

            &:first-child {
                border-right: 1px solid transparent;

                .search-form-meter__input {
                    border-radius: 4px 0 0 4px;
                }
            }

            &:last-child {
                flex: 4 4;
                background-color: #c2e3f2;
                border-radius: 0 4px 4px 0;
                text-align: center;
                font-size: 18px;
                line-height: 38px;
                height: 100%;
                color: #323232;

                @media (max-width: 425px) {
                    line-height: 18px;
                    height: 27px;
                    font-size: 14px;
                }
            }
        }

        &__input {
            background-color: #e6f2fe;
            height: 100%;
        }
    }
</style>