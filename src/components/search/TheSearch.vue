<template>
    <div class="search">
        <div class="search__content">
            <SearchForm/>
        </div>
        <div class="search__footer">
            <SearchFooter/>
        </div>
    </div>
</template>

<script>
    import SearchForm from './form/SearchForm'
    import SearchFooter from './footer/SearchFooter'

    export default {
        name: "TheSearch",
        components: {
            SearchForm,
            SearchFooter
        },
    }
</script>

<style lang="scss" scoped>
    .search {
        max-width: 940px;
        margin: 0 auto;
        background-image: linear-gradient(90deg, #82b3e5 0%, #a8d5e9 100%);

        &__content {
            padding: 36px 20px;

            @media (max-width: 425px) {
                padding: 18px 10px;
            }
        }

        &__footer {
            background-color: #e6f2fe;
        }
    }
</style>