<template>
<v-container>


    <el-head-some
        caption="Contacts"
        />


    <el-item-card
        item_category="contacts"
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

<!-- ================================ Company -->

    <div class="py-6">
        <v-list-item dense flat v-if="ox.company">
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            Company
        </v-list-item-subtitle>
        <v-list-item-title>
            <span @click="Interface.Goto(`/Companies/${ui2api.apid2id(ox.company)}`)" style="cursor:pointer;">
            {{ox.company_title}}
            <v-icon small color="primary">mdi-open-in-app</v-icon>
            </span>
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            Position
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.position}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>
    </div>

<!-- ================================ Contacts -->

    <div class="py-6">
        <div class="overline primary--text pl-4">Contact Info</div>

        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            Email
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.email}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>


        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            Private Phone
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.privatePhone}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>


        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            Work Phone
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.workPhone}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>


        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            wechat
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.wechat}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <v-list-item dense flat>
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            qq
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.qq}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <v-list-item dense flat :href="ox.facebook">
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            facebook
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.facebook}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        <v-list-item dense flat :href="ox.linkedin">
        <v-list-item-content>
        <v-list-item-subtitle class="caption">
            linkedin
        </v-list-item-subtitle>
        <v-list-item-title>
            {{ox.linkedin}}
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

    </div>


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

    import ui2api from '@/models/ui2api.js'
    computed = { ui2api () { return ui2api }, ...computed }

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ui2api () { return ui2api }, ...computed }

///*/// ---------------------------- Headsome

    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }

///*/// ---------------------------- Card
    import elItemCard from '@/components/db-viewer/el-item-profile.vue'
    components = { elItemCard, ...components }

///*/// ---------------------------- Bookmark button

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }


///*/// ---------------------------- Load Item


    import ItemMaster   from '@/app/ItemMaster.js'

    data = {
        item: {},
        ox:{},
        isLoading: false,
    ...data }

    computed = {
        oxid () { return this.$route.params.id },
    ...computed }
    watch = {
        oxid: function(id) { this.LoadItem(id) },
    ...watch }

    methods = {

        LoadItem ( id, category="contacts") {
            this.$data.isLoading = true

            ItemMaster.getListItem({id,category})
                .then(  this.LoadingComplete )
                .catch( this.LoadingFailed )
        },

        LoadingComplete (item) {
            let RNA = this
            RNA.$data.item      = item
            RNA.$data.ox        = item
            RNA.$data.isLoading = false
            RNA.LoadProducts( {companyId:RNA.$data.ox.id} )
        },

        LoadingFailed (dna) {
            this.$data.isLoading = false
        },

    ...methods }


///*/// ---------------------------- export ready

export default {

    name: 'ContactInfo',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

///*/// ---------------------------- created

    created () {
        let RNA = this

     // load item
        let id  = this.$route.params.id
        RNA.LoadItem(id)
    },

///*/// ----------------------------

}

</script>
