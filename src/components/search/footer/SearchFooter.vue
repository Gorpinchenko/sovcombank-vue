<template>
    <div class="search-footer">
        <SearchFooterSwitcher
                class="search-footer__col"
                :isActive="isSearchForName"
                @click="changeSearchForName($event)"
        >
            <template v-slot:left-text>Основной поиск</template>
            <template v-slot:right-text>Искать по названию</template>
        </SearchFooterSwitcher>

        <div class="search-footer__col">
            <ActiveButton
                    @click="changeSearchForPrice"
                    :is-active="isSearchForPrice"
                    class="search-footer__button"
            >
                Цена
            </ActiveButton>
            <ActiveButton
                    @click="changeSearchForMeter"
                    :is-active="isSearchForMeter"
                    class="search-footer__button"
            >
                Метраж
            </ActiveButton>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import ActiveButton from "@/components/elements/buttons/ActiveButton";
    import SearchFooterSwitcher from "@/components/search/footer/SearchFooterSwitcher";

    export default {
        name: "SearchFooter",
        components: {
            SearchFooterSwitcher,
            ActiveButton
        },
        computed: {
            ...mapState('searchForm', {
                isSearchForName: state => state.isSearchForName,
                isSearchForPrice: state => state.isSearchForPrice,
                isSearchForMeter: state => state.isSearchForMeter
            }),
        },
        methods: {
            ...mapActions('searchForm', [
                'changeSearchForName',
                'changeSearchForPrice',
                'changeSearchForMeter',
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .search-footer {
        padding: 15px 20px;
        display: flex;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        &__col {
            display: flex;
            flex: 1 1;

            &:last-child {
                justify-content: flex-end;
            }

            @media (max-width: 768px) {
                & + & {
                    margin: 10px 0 0 0;
                }
            }
        }

        &__button {
            & + & {
                margin-left: 23px;
            }
        }
    }
</style>