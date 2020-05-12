<template>
    <form class="search-form" method="post" @submit.prevent="submitForm">

        <SearchFormMain
                class="search-form__row"
                :isSearchForName="isSearchForName"
        />

        <div class="search-form__row search-form__wrapper">
            <SearchFormPrice
                    class="search-form__col"
                    :isSearchForPrice="isSearchForPrice"
                    @show="changeSearchForPrice"
            />
            <SearchFormMeter
                    class="search-form__col"
                    :isSearchForMeter="isSearchForMeter"
                    @show="changeSearchForMeter"
            />
        </div>

    </form>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import SearchFormMain from "@/components/search/form/SearchFormMain";
    import SearchFormPrice from "@/components/search/form/SearchFormPrice";
    import SearchFormMeter from "@/components/search/form/SearchFormMeter";

    export default {
        name: "SearchForm",
        components: {
            SearchFormMain,
            SearchFormPrice,
            SearchFormMeter,
        },
        computed: {
            ...mapState('searchForm', {
                isSearchForName: state => state.isSearchForName,
                isSearchForPrice: state => state.isSearchForPrice,
                isSearchForMeter: state => state.isSearchForMeter
            }),
            ...mapGetters('searchForm', [
                'getSubmitData'
            ])
        },
        methods: {
            ...mapActions('searchForm', [
                'changeSearchForPrice',
                'changeSearchForMeter',
            ]),
            submitForm(e) {
                console.log(e)
                console.log(this.getSubmitData)
                // todo тут могла бы быть отправка данных на сервер
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-form {
        &__wrapper {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;
            }
        }

        &__row {
            & + & {
                margin: 28px 0 0 0;

                @media (max-width: 768px) {
                    margin: 14px 0 0 0;
                }
            }
        }

        &__col {
            flex: 10 10;

            &:last-child {
                flex: 6 6;
                margin: 0 0 0 20px;

                @media (max-width: 768px) {
                    margin: 14px 0 0 0;
                }
            }
        }
    }
</style>