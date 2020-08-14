<template><section class="el-item-profile">

    <v-expand-transition>
    <section v-if="!itemLoading">

        <template v-if="DNA.category==='products'">
        <el-products-card
            :item="item"
            />
        </template>

        <template v-if="DNA.category==='components'">
        <el-components-card
            :item="item"
            />
        </template>

        <template v-if="DNA.category==='companies'">
        <el-companies-card
            :item="item"
            />
        </template>

        <template v-if="DNA.category==='contacts'">
        <el-contacts-card
            :item="item"
            />
        </template>

        <!-- ================================ DEV -->
        <template v-if="User.Dev()">
        <article class="devmessage px-5 py-4 body-2 ma-4">
            <header class="overline">
                Server responce
            </header>
            <template v-for="(ob,key) in ox.dna">
               <div class="pt-1">
                   <b>{{key}}</b>:{{ob}}
               </div>
            </template>
        </article>
        </template>
        <!-- ================================ -->

    </section>
    </v-expand-transition>

    <div class="d-flex justify-center" v-if="itemLoading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>

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


// item story


///*/// ---------------------------- Item DNA


    props = [ 'item_category', 'item_id', ...props ]
    computed = {
        DNA () { return {
            category: this.$props.item_category,
            id:       this.$props.item_id,
        }},
    ...computed }


///*/// ---------------------------- Load ox Item


    import ItemMaster   from '@/app/ItemMaster.js'

    data = {
        ox:{},
        item: {},
        itemLoading: true,
    ...data }

    computed = { oxid () { return this.$props.item_id },   ...computed }
    watch    = { oxid: function(id) { this.LoadItem(id) },    ...watch }

    methods = {

        LoadItem (oxid) {
            let RNA = this
            let DNA = RNA.DNA
            let {category, id} = DNA

            RNA.$data.itemLoading = true // show loader

            // primary data
            ItemMaster.getListItem({category, id})
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

    // auto start RNA.LoadItem()
    // ...


///*/// ---------------------------- Views


import elProductsCard   from '@/components/db-viewer/el-profile-products.vue'
import elComponentsCard from '@/components/db-viewer/el-profile-components.vue'
import elCompaniesCard  from '@/components/db-viewer/el-profile-companies.vue'
import elContactsCard   from '@/components/db-viewer/el-profile-contacts.vue'
    components = {
        elProductsCard,
        elComponentsCard,
        elCompaniesCard,
        elContactsCard,
    ...components }


///*/// ---------------------------- export ready

export default {

    name: 'el-item-profile',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
        RNA.LoadItem()
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
