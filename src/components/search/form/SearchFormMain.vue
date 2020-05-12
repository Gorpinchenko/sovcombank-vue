<template>
    <div class="search-form-main">
        <div class="search-form-main__wrapper search-form-main__col">
            <div v-if="isSearchForName" class="search-form-main__col">
                <TextInput
                        class="search-form-main_border-radius_left"
                        placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
                        @input="setName($event)"
                />
            </div>
            <template v-else>
                <SelectArrow class="search-form-main__col">
                    <Select
                            class="search-form-main__select search-form-main_border-radius_left"
                            :options="cityOptions"
                            @change="setCity($event)"
                    />
                </SelectArrow>
                <SelectArrow class="search-form-main__col search-form-main_border-left">
                    <Select
                            class="search-form-main__select"
                            :options="actionOptions"
                            @change="setAction($event)"
                    />
                </SelectArrow>
                <SelectArrow class="search-form-main__col search-form-main_border-left">
                    <Select
                            class="search-form-main__select"
                            :options="typeOptions"
                            @change="setType($event)"
                    />
                </SelectArrow>
            </template>
        </div>
        <div class="search-form-main__col">
            <button
                    type="submit"
                    class="search-form-main__button"
            >
                Найти
            </button>
        </div>
    </div>
</template>

<script>
    import Select from "@/components/elements/select/Select";
    import SelectArrow from "@/components/elements/select/SelectArrow";
    import TextInput from "@/components/elements/input/TextInput";
    import {cityOptions, actionOptions, typeOptions} from "@/data/options";
    import {mapMutations} from 'vuex'

    export default {
        name: "SearchFormMain",
        components: {
            Select,
            SelectArrow,
            TextInput
        },
        props: {
            isSearchForName: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            cityOptions: cityOptions,
            actionOptions: actionOptions,
            typeOptions: typeOptions,
        }),
        methods: {
            ...mapMutations('searchForm', [
                'setName',
                'setCity',
                'setAction',
                'setType',
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .search-form-main {
        display: flex;

        &__wrapper {
            display: flex;
        }

        &__col {
            flex: 6 6;
        }

        &__select {
            border-radius: 0;
        }

        &__button {
            height: 100%;
            width: 100%;
            cursor: pointer;
            border: 1px solid #5e9969;
            background-color: #5e9969;
            color: #ffffff;
            font-size: 20px;
            border-radius: 0 4px 4px 0;

            @media (max-width: 425px) {
                font-size: 14px;
            }
        }

        &_border-radius_left {
            border-radius: 4px 0 0 4px;
        }

        & > &__col:last-child {
            flex: 1 1;
        }

        &_border-left {
            border-left: 1px solid transparent;
        }
    }
</style>