<!-- Viewer UI Component - Filter+Table
     2020.7.6 -->

<template><section class="el-items-viewer">

    <!-- ================================ filter search bar -->

    <el-op-search
        ref="Searchbar"
        :onapply="UpdateQuery"
        :for="category"
        />

    <!-- ================================ filter constructor -->

    <v-expand-transition>
        <el-op-constructor
            v-if="FBX.Active(category)"
            ref="Constructorbar"
            :for="category"
            />
    </v-expand-transition>

    <!-- ================================ filter controls -->

    <el-op-controlsbar
        ref="Controlsbar"
        :opensheetlist="OpenSheetlist"
        :for="category"
        />

    <!-- ================================ filter message -->

    <v-expand-transition>
    <div v-if="filter_has_values && !itemsLoading">
    <div class="caption text-center pt-4 pb-8 primary--text">
        Filtered Results
        ({{Interface.ItemsTotal(category)}})
        <v-btn text x-small @click="UI_ResetFilter">show all</v-btn>
    </div>
    </div>
    </v-expand-transition>

    <!-- ================================ developer message -->

    <section v-if="User.Dev()">
    <v-expand-transition>
    <div v-if="display_dev_stats">
    <div class="pb-3">
    <article class="devmessage pa-2 pa-md-3 body-2">

        <header class="d-flex align-start justify-space-between">
           <div class="overline">Dev State: Filter & query</div>
            <v-avatar size="32"
                @click="display_dev_stats = false"
                style="opacity:0.32" class="brown darken-1 ml-1">
                <v-icon
                    @click
                    color="white"
                    class="pa-1"
                    >mdi-close</v-icon>
            </v-avatar>
        </header>

        <div>

        Filter Object: {{FBX.FLI(category).Extract()}}<br>
        <v-divider class="my-2"/>

        <v-row>
            <v-col cols="6">
                <div class="overline">Convert Current Filter</div>
                <div>{{FBX.FLI(category).ConvertToQuery()}}</div>
            </v-col>
            <v-col cols="6">
                <div class="overline">Current API Query</div>
                <div>{{filter_current_value}}</div>
            </v-col>
        </v-row>

        </div>

    </article>
    </div>
    </div>
    </v-expand-transition>
    </section>


    <!-- ================================ items table -->

    <el-table
        :category     ="category"
        :items        ="items"
        :itemsCount   ="itemsCount"
        :itemsLoading ="itemsLoading"

        :filter       ="filter_current_value"
        :ActionTag    ="UI_TableClickTag"

        :ActionPage   ="LoadPage"
        :ActionPerPage="ItemsPerPage"
        :ActionSelect ="Reportage"

        :showPreview  ="true"
        />

    <!-- ================================ selected items reporter -->

    <el-reporter ref="Reporter"
        />




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

    let onloadActions = []


////////////////////////////////////////
    data = {
        msg:'',
        log:[],
    ...data }
////////////////////////////////////////


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


// Items Viewer Story


///*/// ---------------------------- Define Category


    props = [ 'for', ...props ]
    computed = {
        category () { return this.$props.for || 'products' },
    ...computed }
    watch = {
        category: function (v) { this.UpdateQuery() },
        //search_watcher: function (v) { this.UpdateQuery() },
    ...watch }


///*/// ---------------------------- Add Filter


    import elOpSearch      from '@/components/db-filter/el-op-search.vue'
    import elOpConstructor from '@/components/db-filter/el-op-constructor.vue'
    import elOpControlsbar from '@/components/db-filter/el-op-controlsbar.vue'
    components = {
        elOpSearch,
        elOpConstructor,
        elOpControlsbar,
    ...components }

    computed = {
        FBX () { return this.$store.state.Filterbox },
    ...computed }

    computed = {
        filter_watcher () { return this.FBX.Watcher(this.category) },
        search_watcher () { return this.FBX.Searcher(this.category) },
    ...computed }
    watch = {
        filter_watcher: function (v) { this.UpdateQuery() },
        //search_watcher: function (v) { this.UpdateQuery() },
    ...watch }

    data = {
        filter_has_values: false,
        filter_current_value: {},
    ...data }

    methods = {
        UI_ResetFilter () {
            let RNA = this
            RNA.FBX.Reset(RNA.category) // update model
            RNA.FBX.Activate(RNA.category, false) // close constructor
            RNA.UpdateQuery()       // update view
        },
        OpenSheetlist () {
            // *issue
        },
    ...methods }


///*/// ---------------------------- Add Table


    import elTable from '@/components/db-viewer/el-items-table.vue'
    components = { elTable, ...components }

    data = {
        items:[],
        itemsCount:   0,
        itemsLoading: false,
    ...data }

    methods = {
        UI_TableClickTag (raw) {
            let RNA = this
            let category = RNA.category
            RNA.FBX.SetFLI( {category, raw} )
            RNA.$vuetify.goTo(0,0,0)  // scroll top
            // *issue - go to page
        },
    ...methods }



///*/// ---------------------------- Load Items


    import ItemMaster from '@/app/ItemMaster.js'

    methods = {

        UpdateQuery (params) {
            let RNA = this
            let FBX = this.FBX
            let category = RNA.category
            let search = FBX.Searcher(category)
            let query = RNA.ConstructQuery(params)

            RNA.filter_current_value = query
            RNA.filter_has_values = !!RNA.filter_watcher || search
            RNA.LoadItems(query)
        },

        ConstructQuery (params) {
            let RNA = this
            let FBX = this.FBX
            let category = RNA.category
            let FLI = FBX.FLI(category)
            let search = FBX.Searcher(category)
            let { page, itemsPerPage } = params || {}
            let query = {}

            // filter conditions

            if (!!RNA.filter_watcher) Object.assign(query,FLI.ConvertToQuery())

            // pagination

            if (page)         query.page = page
            if (itemsPerPage) query.itemsPerPage = itemsPerPage

            // search

            if (search) {
                if (category==='products') query.productName = search
                else query.name = search
            }////////////////////// *issue - hardcoded productName
            

            // ready

            return query
        },

        LoadItems ( filter ) {
            let RNA = this
            let category = RNA.category

            RNA.$data.itemsLoading = true // show loader

            ItemMaster.getList( {filter, category} ) // load items
                .then(  RNA.ItemsLoadingComplete )
                .catch( RNA.ItemsLoadingFailed )
        },

        ItemsLoadingComplete (items) {
            let RNA = this
            let category = RNA.category

            RNA.$data.items      = items
            RNA.$data.itemsCount = RNA.Interface.ItemsTotal(category)
            RNA.$data.itemsLoading  = false // hide loader
        },

        ItemsLoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemsLoading = false // hide loader
        },

        LoadPage (n)  {
            let RNA = this
            RNA.UpdateQuery( {page:n} )
            RNA.$vuetify.goTo(0,0,0)  // scroll top
        },
        ItemsPerPage (n)  {
            let RNA = this
            RNA.UpdateQuery( {itemsPerPage:n} )
            RNA.$vuetify.goTo(0,0,0)  // scroll top
        },

    ...methods }

    onloadActions.push( RNA => RNA.LoadItems() )


///*/// ---------------------------- Add Reportage


    import elReporter from '@/components/el-reporter.vue'
    components = { elReporter, ...components }
    methods = {
        Reportage (list) { this.$refs.Reporter.Select(list) },
    ...methods }


///*/// ---------------------------- developer

    data = {
        display_dev_stats: true,
    ...data }


///*/// ---------------------------- export ready

    data = {
        onloadActions,
    ...data }

export default {

    name: 'el-items-viewer',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
        //RNA.onloadActions.map( f=>f(RNA) )
        RNA.UpdateQuery()
    },
    created () {

    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
