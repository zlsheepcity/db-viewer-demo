<template>
<v-container>

    <el-head-some caption="Companies"
        />


    <el-item-card
        item_category="companies"
       :item_id="oxid"
        />










<!-- DEPRECATED -->

<div v-if="false">



<!-- ================================ Header -->


    <div class="d-flex align-center justify-center flex-wrap py-2 px-4">
        <span class="headline text-center">{{ox.title}}</span>
        <v-chip class="ma-1">
           <el-marker view="icon" :item="ox"/>
           <span class="pl-1">{{ox.id}}</span>
           </v-chip>
    </div>


    <v-divider/>
    <div class="d-flex align-center justify-center flex-wrap py-2 px-4">

        <v-btn text color="primary" disabled class="d-none">
            <v-icon>mdi-file</v-icon>
            Download
        </v-btn>

        <v-btn text color="secondary"
            @click="User.BookmarkToggle(ox)">
            <v-icon class="pr-1">
                {{
                    User.BookmarkIs(ox)
                    ? 'mdi-bookmark'
                    : 'mdi-bookmark-outline'
                }}
            </v-icon>
            <span class="d-none d-sm-block">Save</span>
        </v-btn>

    </div>
    <v-divider/>


<!-- ================================ -->

    <v-row>
        <v-col cols="12" sm="7">
<!--
        <v-card-title class="overline primary--text">
            General Info
        </v-card-title>
-->

<!-- ================================ Flags -->

    <div>

        <v-chip v-if="ox.switchedToOtherIndustry"
            class="red darken-1 white--text mr-2"
            >Switched to Other Industry</v-chip>

        <v-chip v-if="ox.outOfBusiness"
            class="red darken-1 white--text mr-2"
            >Out of Business</v-chip>

    </div>

<!-- ================================ Description -->

    <v-list-item dense flat v-if="ox.description">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Description
    </v-list-item-subtitle>
    <div class="body-1">
        {{ox.description}}
    </div>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Original Name -->

    <v-list-item dense flat v-if="ox.originalName">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Original Name
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.originalName}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Registration Number -->

    <v-list-item dense flat v-if="ox.registrationNumber">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Registration Number
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.registrationNumber}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Foundation Year -->

    <v-list-item dense flat v-if="ox.foundationYear">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Foundation Year
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.foundationYear}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ Location -->

    <v-list-item dense flat v-if="ox.location_string">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Location
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.location_string}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

    <v-list-item dense flat v-if="ox.address">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Address
    </v-list-item-subtitle>
    <div class="subtitle-2" style="max-width: 24em">
        {{ox.address}}
    </div>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ -->


<!-- ================================ Brands -->


        <v-card-title class="overline primary--text">
            Brands (<b>{{ox.brandsAmount}}</b>)
        </v-card-title>

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

        </v-col>
        <v-col cols="12" sm="5">




<!-- ================================ Images -->


                    <img
                        :src="ox.image_midi"
                        :alt="ox.title"
                        style="width:200px;height:200px;"
                        class="d-block mr-2 ml-auto">

<!-- ================================ -->

        </v-col>
    </v-row>


<!-- ================================ Products Table -->


    <v-card-title class="overline primary--text mb-4">
        Products (<b>{{ox.productsAmount}}</b>)
    </v-card-title>

    <el-table category="products" v-if="ox.productsAmount>0"
        :items="items"
        :itemsCount="itemsCount"
        :itemsLoading="itemsLoading"

        :ActionPage="Products_LoadPage"
        :ActionSelect="Reportage"

        :showPreview="true"
        />

    <el-reporter
        ref="Reporter"
        />

    </div>









<!-- ================================ -->


</v-container>
</template>
<style>

    /* --------------------------------- v-data-table update */

    /* highlight action icons on hover */
    .item-table tbody>tr:hover .table-actions:not(:hover) .info-icon,
    .item-table tbody>tr .table-actions .info-icon:hover,
    .item-table tbody>tr .table-actions .open-icon:hover,
    .item-table .info-icon.has-preview { color: var(--v-primary-base); }
    .item-table thead th { vertical-align: top; }

    /* sorting arrows - fixed position */
    .item-table thead th>span { display:block; padding-top:0.25em; }

    /* checkbox "all" - fixed position 
    .item-table thead .v-data-table__checkbox { margin-top: -1.5em; } */

    /* action buttons - no wrap */
    .item-table .table-actions { white-space:nowrap; }

</style>
<script>

///*/// ---------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    let watch       = {}

    data = {
        msg:'',
    ...data }

///*/// ---------------------------- Interface

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }

///*/// ---------------------------- User

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }

///*/// ---------------------------- Headsome

    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }

///*/// ---------------------------- Card
    import elItemCard from '@/components/db-viewer/el-item-profile.vue'
    components = { elItemCard, ...components }

///*/// ---------------------------- download button

    methods = {

        DownloadItem () {
            let RNA = this
            let item = RNA.$data.ox
            return false // TODO
        },

    ...methods }


///*/// ---------------------------- Load Item


    import ItemMaster   from '@/app/ItemMaster.js'

    data = {
        ox:{},
        item: {},
        itemLoading: false,
    ...data }

    computed = {
        oxid () { return this.$route.params.id },
    ...computed }
    watch = {
        oxid: function(id) { this.LoadItem(id) },
    ...watch }

    methods = {

        LoadItem ( id, category='companies') {
            let RNA = this

            // empty current
            RNA.$data.ox        = {}
            RNA.$data.item      = {}
            RNA.$data.itemLoading = true // show loader

            // primary data
            ItemMaster.getListItem({id,category})
                .then(  RNA.LoadingComplete )
                .catch( RNA.LoadingFailed )
        },

        LoadingComplete (item) {
            let RNA = this
            RNA.$data.ox        = item
            RNA.$data.item      = item
            RNA.$data.itemLoading = false // hide loader

            // secondary data
            if (RNA.$data.ox.products && RNA.$data.ox.products.length ) {
                let company_products = []
                RNA.$data.ox.products.map(o=>{company_products.push(o.id)})
                RNA.LoadProducts( { id:company_products } )
            }
        },

        LoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemLoading = false // hide loader
        },

    ...methods }


///*/// ---------------------------- Load Products


    import elTable from '@/components/el-items-table.vue'
    components = { elTable, ...components }

    data = {
        items:[],
        itemsCount:   0,
        itemsLoading: false,
    ...data }

    methods = {

        LoadProducts ( filter = {} ) {
            let RNA = this

            RNA.$data.itemsLoading = true // show loader

            ItemMaster.getList( {filter, category:'products'} ) // load items
                .then(  RNA.Products_LoadingComplete )
                .catch( RNA.Products_LoadingFailed )
        },

        Products_LoadingComplete (items) {
            let RNA = this
            RNA.$data.items      = items
            RNA.$data.itemsCount = RNA.$data.ox.productsAmount
            RNA.$data.itemsLoading  = false
        },

        Products_LoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemsLoading = false
        },

        Products_LoadPage (n)  {
            let RNA = this
            if (RNA.$data.ox
             && RNA.$data.ox.products
             && RNA.$data.ox.products.length ) {
                let company_products = []
                RNA.$data.ox.products.map(o=>{company_products.push(o.id)})
                RNA.LoadProducts( { page:n, id:company_products} )
            }
            
        },

    ...methods }


///*/// ---------------------------- Reporter


    import elReporter from '@/components/el-reporter.vue'
    components = { elReporter, ...components }
    methods = {
        Reportage (o) { if (this.$refs.Reporter) this.$refs.Reporter.Select(o) },
    ...methods }


///*/// ---------------------------- export ready

export default {

    name: 'CompanyInfo',
    props,
    components,
    methods,
    computed,
    data () { return data },

    watch,

// --------------------------------- created

    created () {
        let RNA = this

        // load ox item
        let id  = this.$route.params.id
        RNA.LoadItem(id)
    },

}

///*/// ----------------------------
</script>
