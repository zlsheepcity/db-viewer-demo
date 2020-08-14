<!-- Filter UI Component - constructor
ok     2020.7.5 -->

<template><section class="el-op-constructor">


<!-- ================================ FORMS ACCORDEON -->


    <el-op-forms
        :onapply="Apply"
        :for="category"
        :ops="FBX.TakenOPS(category)"
        />


<!-- ================================ SHEET LIST -->


<v-bottom-sheet scrollable v-model="opi_sheetlist">
<v-card tile>
<v-card-text style="height: 100%;" class="pa-0 pb-4">

    <el-op-listing
        :exit="OPI_SheetlistHide"
        :ops="FBX.OPS(category)"
        />

</v-card-text>
</v-card>
</v-bottom-sheet>


<!-- ================================ CONSTRUCTOR BAR -->


    <footer class="d-flex align-center">

        <!-- === add new condition -->

        <div
            class="py-0 px-5 d-flex align-center flex-grow-0"
            style="min-height:48px;cursor:pointer;"
            @click.stop="OPI_SheetlistShow">
            <v-icon small color="primary" class="mr-1">mdi-plus</v-icon>
            <div class="caption primary--text">Add Condition...</div>
        </div>

        <!-- === search rule -->

        <v-menu offset-y>
            <template v-slot:activator="{ on }">

                <div v-on="on"
                    style="min-height:48px;cursor:pointer;"
                    class="caption py-0 px-2 d-flex align-center flex-grow-0">
                    <div class="pr-2">Search Rule:</div>
                    <b v-if="FBX.FLI(category).searchRule==='strict'">
                        Strict Match All Conditions</b>
                    <b v-else>
                        Any Matches</b>
                    <v-icon>mdi-menu-down</v-icon>
                </div>

            </template>
            <v-list>
            <v-list-item dense @click="OPI_SetRule('any')">
            <v-list-item-content>
            <v-list-item-title>
                Any Matches
                </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            <v-list-item dense @click="OPI_SetRule('strict')">
            <v-list-item-content>
            <v-list-item-title>
                Strict Match All Conditions
                </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>


        <v-spacer></v-spacer>

        <!-- === reset -->

        <v-btn text color="grey"
            @click="OPI_Reset()">
            <span class="mr-2">Reset Filter</span>
            <v-icon>mdi-delete</v-icon>
            </v-btn>

    </footer>

    <v-divider/>


<!-- ================================ -->


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


// OP-Constructor Story


///*/// ---------------------------- Define Category

    props = [ 'for', ...props ]
    computed = {
        category () { return this.$props.for || 0 },
    ...computed }

///*/// ---------------------------- Create Actors

    computed = {
        FBX () { return this.$store.state.Filterbox },
    ...computed }


    methods = {

        Apply () {
            let RNA = this
            RNA.FBX.Refresh(RNA.category)
        },

    ...methods }


///*/// ---------------------------- Listing Conmponent


    import elOpListing from '@/components/db-filter/el-op-listing.vue'
    components = { elOpListing, ...components }

    data = {
        opi_sheetlist:  null,
    ...data }

    methods = {
        OPI_SheetlistShow () { this.$data.opi_sheetlist = true  },
        OPI_SheetlistHide () { this.$data.opi_sheetlist = false },
    ...methods }


///*/// ---------------------------- Forms Accordion Conmponent


    import elOpForms from '@/components/db-filter/el-op-forms.vue'
    components = { elOpForms, ...components }


///*/// ---------------------------- Accordion Toolbar


    methods = {

        OPI_SetRule (rule) {
            let RNA = this
            RNA.FBX.FLI(RNA.category).searchRule = rule
            RNA.Apply()
        },

        OPI_Reset () {
            let RNA = this
            RNA.FBX.FLI(RNA.category).ResetValues()
            RNA.Apply()
        },

    ...methods }


///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'el-op-constructor',
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
