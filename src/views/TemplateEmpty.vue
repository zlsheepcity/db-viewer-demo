<template>
<div>

    <el-head-some caption="NewPageTitle"
        />

</div>
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


///*/// ---------------------------- export ready

export default {

    name: 'NewPageTemplate',
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
