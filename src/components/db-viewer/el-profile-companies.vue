<template><section class="el-companies-card">


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


    <div class="d-flex px-3">

        <div>

<!-- ================================ Original Name -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Original Name
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.originalName || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Other Names -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Other Names
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.otherNames && ox.otherNames.length || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Registration Number -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Registration Number
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.registrationNumber || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Foundation Year -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Foundation Year
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.foundationYear || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Location -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Location
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.location_string || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Region -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Region
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.region || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Markets -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Markets
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.markets && ox.markets.length || 'n/a'}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

        </div>

        <div class="flex-grow-1">

        <!-- ================================ Description -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Description
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.description || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

        <!-- ================================ Address -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Address
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.address || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

        <!-- ================================ Switched -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Switched to Other Industry
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.switchedToOtherIndustry || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

        <!-- ================================ out of -->

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Out of Business
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.outOfBusiness || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>


        </div>



        <!-- image -->

        <figure>
        <v-img
            v-if="ox.defaultImage"
            :aspect-ratio="1"
            :src="'//'+ox.defaultImage.url"
            width="200"
            alt=""/>
        </figure>

        <!--  -->

    </div>


<!-- ================================ Brands -->


    <header class="py-4 px-4">
        <div class="d-flex align-center">
            <span class="display-1 mr-1">Brands</span>
            <b class="body-1 grey--text">
                ({{ox.brandsAmount || 0}})</b>
            </div>
    </header>


    <v-list-item dense flat  v-if="ox.brandsAmount>0">
    <v-list-item-content>
    <v-list-item-title>
        <v-chip outlined
            class="mr-1 mb-1"
            v-for="brand in ox.brands"
            :key="brand.id"
            >{{brand.name}}</v-chip>
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Brands -->


    <header class="py-4 px-4">
        <div class="d-flex align-center">
            <span class="display-1 mr-1">Products Types</span>
            <b class="body-1 grey--text">
                ({{ox.productsTypes && ox.productsTypes.length || 0}})</b>
            </div>
    </header>

    <section v-if="ox.productsTypes && ox.productsTypes.length">
        <div class="pa-4 pl-6">
            <v-row>
                <template v-for="(type, key) in ox.productsTypes">
                    <v-col cols="3" class="pa-0">
                    <v-chip small color="transparent" class="mr-1 mb-1">
                        <v-icon
                            size="8"
                            color="amber"
                            class="ml-n1 mr-1"
                            >mdi-checkbox-blank-circle</v-icon>
                        {{type.name}}
                    </v-chip>
                    </v-col>
                </template>
            </v-row>
        </div>
    </section>


<!-- ================================ Products -->


    <header class="py-4 px-4">
        <div class="d-flex align-center">
            <span class="display-1 mr-1">Products</span>
            <b class="body-1 grey--text">
                ({{ox.productsAmount || 0}})</b>
            </div>
    </header>

    <section v-if="ox.products && ox.products.length">
    <el-table
        category      ="products"
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
    </section>


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
            let category = 'products'
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

    name: 'el-companies-card',
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
