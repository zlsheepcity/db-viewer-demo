<template>
<v-container>

    <el-head-some caption="Components"
        />


    <el-item-card
        item_category="components"
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

<!-- ================================ -->

    <v-divider/>
    <div class="d-flex align-center justify-center flex-wrap py-2 px-4">

        <div class="d-none BONAPARTY">
        <v-btn text color="primary" disabled>
            <v-icon>mdi-file</v-icon>
            Download
        </v-btn>
        </div>

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

<!-- ================================ Marking -->

    <v-list-item dense flat v-if="ox.marking">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Marking
    </v-list-item-subtitle>
    <div class="body-1">
        {{ox.marking}}
    </div>
    </v-list-item-content>
    </v-list-item>

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

<!-- ================================ -->

    </v-col>
    </v-row>

<!-- ================================ Products Table -->

    <v-card-title class="overline primary--text mb-4">
        Used in Products (<b>{{ox.productsAmount}}</b>)
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

        LoadItem ( id, category='components') {
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
            if (item.products && item.products.length) {
                let id = []
                item.products.map(o=>id.push(o.id))
                RNA.LoadProducts( {id} )
            }
            
        },

        LoadingFailed (dna) {
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
            RNA.LoadProducts( { page:n, companyId:RNA.$data.ox.id} )
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
    watch,
    data () { return data },

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
