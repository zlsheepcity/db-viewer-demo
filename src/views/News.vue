<template>
<v-container>

    <el-head-some
        caption="News"
        />

    <v-divider/>

    <template v-for="news in NewsList">

        <article class="pa-8">
            <header class="display-1">{{news.title}}</header>
            <p class="subtitle">{{news.date}}</p>
            <section class="body-1" v-html="news.text"/>
        </article>

    </template>


</v-container>
</template>
<script>

///*/// ---------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}


    data = {
        msg:'',
    ...data }

    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }

    import NewsList from '@/webdata/demonews.js'
    data = {
        NewsList,
    ...data }

///*/// ---------------------------- export ready

export default {

    name: 'News',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
