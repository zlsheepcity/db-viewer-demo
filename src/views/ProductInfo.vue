<template>
<v-container id="ViewTop">

    <el-head-some caption="Products"
        />

    <el-item-card
        item_category="products"
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

        <block-purchase :item="ox">
            <v-icon>mdi-truck</v-icon>
            <span class="d-none d-sm-block pl-1">Order</span>
        </block-purchase>

        <v-btn text color="secondary"
            @click="DownloadItem">
            <v-icon>mdi-file</v-icon>
            <span class="d-none d-sm-block pl-1">Download</span>
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
        <v-col cols="12" md="7">

<!-- ================================ Mobile Types -->

    <div class="d-md-none">
    <v-card-title class="overline primary--text">
        Product Types
    </v-card-title>

    <div class="px-4 pb-4">
        <v-chip class="mr-1 mb-1"
            v-for="(type, key) in ox.types"
            :key="key"
            v-html="type.name"/>
    </div>
    </div>

<!-- ================================ Title -->
<!--

    <v-card-title class="overline primary--text">
        General Info
    </v-card-title>

-->

<!-- ================================ Description -->

    <div v-if="ox.description">
    <v-card-title class="overline primary--text">
        Description
    </v-card-title>
    <v-card-text class="body-2">
        <div class="wrapped-specification" v-html="ox.description"></div>
    </v-card-text>
    </div>

<!-- ================================ Company -->

    <v-list-item dense flat v-if="ox.company">
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Company
    </v-list-item-subtitle>
    <v-list-item-title>
        <span @click="Interface.Goto(`/Companies/${ox.companyId}`)" style="cursor:pointer;">
        {{ox.company && ox.company.name}}
        <v-icon small color="primary">mdi-open-in-app</v-icon>
        </span>
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>
    <v-list-item dense flat v-else>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Company
    </v-list-item-subtitle>
    <v-list-item-title>
        n/a
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

<!-- ================================ General properties -->

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Brand
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.brand && ox.brand.name}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Production Status
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.productionStatus && ox.productionStatus.name}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

    <v-list-item dense flat>
    <v-list-item-content>
    <v-list-item-subtitle class="caption">
        Appeared/Created
    </v-list-item-subtitle>
    <v-list-item-title>
        {{ox.appeared}} / {{ox.created}}
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>

    <div class="mb-4"></div>

<!-- ================================ Specifications -->


    <div v-if="ox.specification">
    <v-card-title class="overline primary--text">
        Specifications
    </v-card-title>
    <v-card-text class="body-2">
        <div class="wrapped-specification" v-html="ox.specification"></div>
    </v-card-text>
    </div>



<!-- ================================ Features -->


    <v-card-title class="overline primary--text">
        Features (<b>{{ox.features && ox.features.length || 0}}</b>)
    </v-card-title>

    <v-simple-table v-if="ox.features && ox.features.length"
        style="max-width:32em" class="mb-3">
        <template v-slot:default>
            <tbody>
                <tr
                   v-for="(feature, key) in ox.features"
                   :key="key">
                    <td class="caption" style="width:12rem">
                        {{ feature.name }}
                    </td>
                    <td>{{ feature.value }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>


<!-- ================================ -->

        </v-col>
        <v-col cols="12" md="5">

<!-- ================================ Types -->

    <div class="d-none d-md-block">
    <v-card-title class="overline primary--text">
        Product Types
    </v-card-title>

    <div class="px-4 pb-4">
        <v-chip class="mr-1 mb-1"
            v-for="(type, key) in ox.types"
            :key="key"
            v-html="type.name"/>
    </div>
    </div>

<!-- ================================ Images -->


    <v-card-title class="overline primary--text"
       v-if="ox.images && ox.images.length">
        Images
    </v-card-title>


  <v-carousel
    v-if="ox.images && ox.images.length"
    cycle
    height="400"
    show-arrows-on-hover>

    <v-carousel-item
      v-for="(img, i) in ox.images"
      :key="i">

      <v-sheet tile
        class="pa-1"
        color="blue-grey lighten-2"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >

              <img
                  :src="img.url"
                  :alt="ox.title"
                  style="object-fit: contain; max-width: 100%; max-height: 360px;">

        </v-row>

      </v-sheet>

    </v-carousel-item>
  </v-carousel>

<!-- ================================ -->

        </v-col>
    </v-row>

</div> <!-- /deprecated -->






<!-- ================================ -->

</v-container>
</template>
<style>
    /* html content from database */
    .wrapped-specification ul { margin-bottom: 1em; }
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


///*/// ---------------------------- purchase button

    import BlockPurchase from '@/components/el-purchase.vue'
    components = { BlockPurchase, ...components }

///*/// ---------------------------- download button

    methods = {

        DownloadItem () {
            let RNA = this
            RNA.$store.state.report.setItems([this.$data.ox])
            RNA.Interface.Goto('/ReportMaker')
        },

    ...methods }


///*/// ---------------------------- Load ox Item


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

        LoadItem ( id, category='products') {
            let RNA = this
            RNA.$data.itemLoading = true // show loader

            // primary data
            ItemMaster.getListItem({id,category})
                .then(  RNA.ItemLoadingComplete )
                .catch( RNA.ItemLoadingFailed )
        },

        ItemLoadingComplete (item) {
            let RNA = this
            RNA.$data.ox        = item
            RNA.$data.item      = item
            RNA.$data.itemLoading = false // hide loader

            // secondary data
            // ...
        },

        ItemLoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemLoading = false // hide loader
        },

    ...methods }

///*/// ---------------------------- export ready

export default {

    name: 'ProductInfo',
    props,
    components,
    methods,
    computed,
    data () { return data },

    watch,

// --------------------------------- created

    mounted () {
        let RNA = this

        // load ox item
        let id  = this.$route.params.id
        RNA.LoadItem(id)
    },

}

///*/// ----------------------------
</script>
