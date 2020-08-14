<template>
<v-container id="ViewCompanies">


    <el-head-some caption="Companies"
        />

<!-- ================================ ITEMS TABLE -->

    <el-items-viewer
        ref="ItemsViewer"
        for="companies"
        />

<!-- ================================ -->


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


////////////////////////////////////////
    data = {
        msg:'',
        log:[],
    ...data }
////////////////////////////////////////


// models


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


// components


///*/// ---------------------------- Headsome
    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }
///*/// ----------------------------

///*/// ---------------------------- Items Viewer
    import elItemsViewer from '@/components/db-viewer/el-items-viewer.vue'
    components = { elItemsViewer, ...components }
///*/// ----------------------------



// --------------------------------- export ready

export default {

    name: 'Companies',
    components,
    props,
    methods,
    computed,
    data () { return data },

// --------------------------------- startup

    mounted () {},

}

</script>
