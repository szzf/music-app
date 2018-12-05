<template>
    <div id="app">
        <headerBox></headerBox>
        <navBox></navBox>

        <mainBox></mainBox>
        <loadingBox></loadingBox>
    </div>
</template>

<script>
import loadingBox from './components/loading'
import headerBox from '@/components/header'
import navBox from '@/components/nav'
import mainBox from '@/components/main'

export default {
    name: 'App',
    dadta() {
        return {
        }
    },
    components: {
        loadingBox,
        headerBox,
        navBox,
        mainBox,
    }
}

</script>

<style lang="scss">
</style>
