<!-- Filter UI Component - search bar
ok     2020.7.6 -->

<template><section class="el-op-search">

    <v-expansion-panels tile>
    <v-expansion-panel readonly>
    <v-expansion-panel-header hide-actions class="pl-1 pr-4">
    <header class="search-string d-flex justify-start align-center">
        <v-text-field solo flat  dense
            v-model      ="FBX.FLI(category).searchString"
            @input       ="UI_Input"
            @keyup.enter ="UI_Apply"
            @click:clear ="UI_Clear"
            placeholder  ="Search"
            clearable no-autofocus hide-details/>
        <v-icon @click="UI_Apply">mdi-magnify</v-icon>
    </header>
    </v-expansion-panel-header>
    </v-expansion-panel>
    </v-expansion-panels>

</section></template>
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


///*/// ---------------------------- Define Category

    props = [ 'for', ...props ]
    computed = {
        category () { return this.$props.for || 0 },
    ...computed }

///*/// ---------------------------- Create Actors

    computed = {
        FBX () { return this.$store.state.Filterbox },
    ...computed }

    props = [ 'onapply', ...props ]

    methods = {

        Apply () {
            let RNA = this
            RNA.FBX.Refresh(RNA.category) // update model
            if (RNA.$props.onapply) RNA.$props.onapply() // callback
        },

        UI_Apply () { this.Apply() },
        UI_Input () {
            let RNA = this
            let empty_search = !RNA.FBX.FLI(RNA.category).searchString
            if (empty_search) RNA.Apply()
        },
        UI_Clear () {
            let RNA = this
            RNA.FBX.FLI(RNA.category).searchString = ''
            RNA.Apply()
        },

    ...methods }


///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'el-op-search',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {},

// ---------------------------------

}

///*/// ---------------------------- END
</script>
