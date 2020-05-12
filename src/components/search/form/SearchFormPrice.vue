<template>
    <div class="search-form-price">
        <template v-if="isSearchForPrice">
            <div class="search-form-price__col">
                <TextInput
                        :type="'number'"
                        placeholder="От"
                        class="search-form-price__input"
                        @input="setMinPrice($event)"
                />
            </div>
            <div class="search-form-price__col ">
                <TextInput
                        :type="'number'"
                        placeholder="До"
                        class="search-form-price__input"
                        @input="setMaxPrice($event)"
                />
            </div>
            <SelectArrow class="search-form-price__col">
                <Select
                        class="search-form-price__select"
                        :options="priceOptions"
                        @change="setPriceType($event)"
                />
            </SelectArrow>
        </template>
        <TransparentButton
                v-else
                @click="$emit('show')"
        >
            Добавить цену
        </TransparentButton>
    </div>
</template>

<script>
    import TextInput from "@/components/elements/input/TextInput";
    import Select from "@/components/elements/select/Select";
    import SelectArrow from "@/components/elements/select/SelectArrow";
    import TransparentButton from "@/components/elements/buttons/TransparentButton";
    import {priceOptions} from "@/data/options";
    import {mapMutations} from "vuex";

    export default {
        name: "SearchFormPrice",
        components: {
            TextInput,
            Select,
            SelectArrow,
            TransparentButton,
        },
        props: {
            isSearchForPrice: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            priceOptions: priceOptions,
        }),
        methods: {
            ...mapMutations('searchForm', [
                'setMinPrice',
                'setMaxPrice',
                'setPriceType',
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .search-form-price {
        display: flex;

        &__col {
            flex: 1 1;

            & + & {
                border-left: 1px solid transparent;
            }

            &:first-child {
                .search-form-price__input {
                    border-radius: 4px 0 0 4px;
                }
            }

            &:last-child {
                .search-form-price__select {
                    border-radius: 0 4px 4px 0;
                }
            }
        }

        &__input, &__select {
            height: 100%;
            background-color: #e6f2fe;
        }
    }
</style>