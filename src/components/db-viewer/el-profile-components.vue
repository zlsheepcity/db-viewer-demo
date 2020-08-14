<template><section class="el-components-card">

<!-- ================================ TOOLBAR -->

    <v-divider/>

    <section>
        <div class="d-flex align-center py-1">

            <!-- Download -->

            <v-btn text color="secondary"
                :disabled="true"
                @click="">
                <v-icon>mdi-file</v-icon>
                <span class="d-none d-sm-block pl-1">Download</span>
            </v-btn>

            <!-- bookmark -->

            <v-spacer/>

            <v-btn text color="blue" style="min-width:14rem"
                @click="User.BookmarkToggle(ox)">
                <v-spacer/>
                <span class="d-none d-sm-block">
                    {{
                        User.BookmarkIs(ox)
                        ? 'Remove Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
                <v-icon class="pl-1">
                    {{
                        User.BookmarkIs(ox)
                        ? 'mdi-bookmark'
                        : 'mdi-bookmark-outline'
                    }}
                </v-icon>
            </v-btn>

        </div>
    </section>

    <v-divider/>

<!-- ================================ HEADER -->

    <header class="pt-2">
       <div class="d-flex align-center px-4 py-4">

            <!-- title -->

            <div class="preview-title-text d-flex align-center">
                <span class="display-1">
                    {{ox.title || 'n/a'}}
                </span>
                <v-chip small color="transparent">
                    <el-marker view="icon" iconsize="small" :item="ox"/>
                    <span class="ml-1">{{ox.id}}</span>
                </v-chip>
            </div>

       </div>
    </header>


<!-- ================================ CARD -->


    <div class="d-flex pa-1">

        <div>

            <!-- Category -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Category
            </v-list-item-subtitle>
            <div class="body-1">
                {{ox.component_category && ox.component_category.name || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <!-- Marking -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Model on chip / Type
            </v-list-item-subtitle>
            <div class="body-1">
                {{ox.marking || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <!-- Description -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Description
            </v-list-item-subtitle>
            <div class="body-1">
                {{ox.description || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>
        </div>


    </div>


<!-- ================================ Products -->


    <header class="py-4 px-4">
        <div class="d-flex align-center">
            <span class="display-1 mr-1">Used in Products</span>
            <b class="body-1 grey--text">
                ({{ox.products && ox.products.length || 0}})</b>
            </div>
    </header>

    <el-table
        category      ="products"
        :items        ="items"
        issue-itemsCount   ="itemsCount"
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


// card story


///*/// ---------------------------- Item DNA


    props = [ 'item', ...props ]
    computed = {
        ox () { return this.$props.item },
    ...computed }


///*/// ---------------------------- download button

    methods = {
        DownloadItem () {
            let RNA = this
            RNA.$store.state.report.setItems([this.ox])
            RNA.Interface.Goto('/ReportMaker')
        },
    ...methods }


///*/// ---------------------------- Products Table


    import elTable from '@/components/db-viewer/el-items-table.vue'
    components = { elTable, ...components }

    data = {
        items:[],
        itemsCount:   0,
        itemsLoading: false,
        filter_current_value: {},
    ...data }

    methods = {
        UI_TableClickTag (raw) {
            // *issue - TODO
        },
    ...methods }


///*/// ---------------------------- Load Products


    import ItemMaster from '@/app/ItemMaster.js'

    methods = {

        UpdateQuery (params) {
            let RNA = this
            let query = RNA.ConstructQuery(params)
            RNA.LoadItems(query)
        },

        ConstructQuery (params) {
            let RNA = this
            let { page, itemsPerPage } = params || {}
            let query = {}

            // current item

            let ox = RNA.ox
            if (ox.products && ox.products.length) {
                query.id = []
                ox.products.map(o=>query.id.push(o.id))
            }

            // pagination

            if (page)         query.page = page
            if (itemsPerPage) query.itemsPerPage = itemsPerPage

            // ready

            return query
        },

        LoadItems ( filter ) {
            let RNA = this
            let category = 'products'

            if (!RNA.ox.products || !RNA.ox.products.length) return false

            RNA.$data.itemsLoading = true // show loader

            ItemMaster.getList( {filter, category} ) // load items
                .then(  RNA.ItemsLoadingComplete )
                .catch( RNA.ItemsLoadingFailed )
        },

        ItemsLoadingComplete (items) {
            let RNA = this
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


///*/// ---------------------------- Add Reportage


    import elReporter from '@/components/el-reporter.vue'
    components = { elReporter, ...components }
    methods = {
        Reportage (list) { this.$refs.Reporter.Select(list) },
    ...methods }



///*/// ---------------------------- export ready

export default {

    name: 'el-components-card',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
        RNA.UpdateQuery()
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
