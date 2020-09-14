<template>
<div class="el-dashboard-tabs">

<!-- ================================ TABS -->

    <v-row>

    <template v-for="TAB in tab_all">
    <v-col
        cols="6" md="3"
        class="pb-md-0">

    <figure class="dashtab"
        @click = "TabClick(TAB)"
        :class = "tab_all[tabi(TAB.category)].items ? TAB.category : 'loading'"
        :style = "{'background-color':TAB.color}">

        <v-icon
            class  = "ma-1"
            size   = "64"
            :color = "tab_now==TAB.category && TAB.items ? 'white' : 'black'"
            v-text = "`mdi-${TAB.icon}`"/>

        <div class="dashtab-content">
            <div
                class="title font-weight-bold"
                >{{TAB.label}}</div>

            <div
                class="d-flex align-center"
                style="min-width:150px;min-height:40px;">

                <span v-if="TAB.value"
                    class="display-1 font-weight-black"
                    >{{TAB.value || '0' }}</span>
                <v-progress-circular v-else
                      indeterminate
                      color="black"/>

                <span v-if="TAB.valueNew">
                    <span class="white--text ml-2">+</span>
                    <span
                        class="body-1 white--text"
                        >{{TAB.valueNew || 0}}</span>
                </span>
            </div>
        </div>

      <v-progress-linear absolute bottom
        :active         ="!TAB.value"
        :indeterminate  ="!TAB.value"
        color="primary" />

    </figure>

    </v-col>
    </template>

    </v-row>

<!-- ================================ TABLE -->

    <v-expand-transition>
    <div v-if="tab_all[tabi(tab_now)].items">

    <header class="pb-4">

        <template v-for="TAB in tab_all" v-if="TAB.category===tab_now">
        <div :style="{'background-color':TAB.color}">
        <v-list-item dense dark
            class="pr-1"
            style="background-color:rgba(0,0,0,0.1)">
            <v-list-item-content>
            <v-list-item-title class="white--text d-flex align-center">
                <v-spacer></v-spacer>
                <v-btn text small
                    class="ml-4"
                    color="white"
                    @click="MUI.Goto(TAB.href)">
                    <span class="mr-1">view all {{TAB.category}}</span>
                    <v-icon >mdi-open-in-app</v-icon>
                    </v-btn>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </div>
        </template>

    </header>

    <el-table
        :category     ="tab_now"
        :items        ="tab_all[tabi(tab_now)].items"
        :itemsLoading ="!tab_all[tabi(tab_now)].items"

        :filter       ="{}"

        :ActionTag    ="UI_TableClickTag"
        :ActionPage   ="UI_TableActionPage"
        :ActionPerPage="UI_TableActionPerPage"
        :ActionSelect ="Reportage"

        :showPreview="true"
        :hidefooter="true"
        />

    <el-reporter ref="Reporter"
        />

    <footer class="py-4">
        <template v-for="TAB in tab_all" v-if="TAB.category===tab_now">

        <div class="pb-8 d-flex justify-center">
            <v-chip small
                @click="goto(TAB.href)">
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-chip>
        </div>

        </template>
    </footer>

    </div>
    </v-expand-transition>

<!-- ================================ -->

</div>
</template>
<style scoped>
    .dashtab {
        min-height:         120px;
        width:              100%;
        height:             100%;
        display:            flex;
        align-items:        center;
        justify-content:    center;
        position:           relative;
        cursor:             pointer;
        background-size:  100% auto;
        background-position: bottom;
    }
    /*
        *issue TODO
        Generate SVG by stats
    */
    .dashtab.products {
        background-image: url('data:image/svg+xml,%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="272" height="120" viewBox="0 0 272 120"%3E%3Cpath opacity="0" d="M0,108.9C0,72.6,0,36.3,0,0c90.7,0,181.3,0,272,0c0,0.5,0,1,0,1.6c-0.4,0.5-0.9,1-1.2,1.5 c-7.6,13.8-15.2,27.6-22.8,41.5c-8,14.7-17.3,28.3-30,39.6c-7.2,6.4-15.6,10-25.2,11.2c-7.3,0.9-14.6,1.5-21.9,2.3 c-10.1,1.1-20.2,2.9-30.4,3.5c-20.5,1.1-41.1,1.4-61.6,2.3c-17.3,0.8-34.5,1.9-51.7,3C18.1,107,9.1,108,0,108.9z"/%3E%3Cpath opacity="0.1" d="M0,108.9c9.1-0.8,18.1-1.8,27.2-2.5c17.2-1.2,34.5-2.3,51.7-3c20.5-0.9,41.1-1.2,61.6-2.3 c10.2-0.5,20.2-2.3,30.4-3.5c7.3-0.8,14.6-1.4,21.9-2.3c9.6-1.2,18-4.7,25.2-11.2c12.7-11.3,22-25,30-39.6 c7.5-13.9,15.2-27.7,22.8-41.5c0.3-0.6,0.8-1,1.2-1.5c0,39.5,0,79,0,118.4c-90.7,0-181.3,0-272,0C0,116.3,0,112.6,0,108.9z"/%3E%3C/svg%3E');
    }
    .dashtab.components {
        background-image: url('data:image/svg+xml,%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="272" height="120" viewBox="0 0 272 120"%3E%3Cpath opacity="0.1" d="M217.7,120c4.1-5.3,8.5-10.5,12.4-16c7.6-10.8,12.8-22.7,17.3-34.9c5.8-15.7,11.2-31.5,17-47.2 c2.2-6,5.1-11.7,7.6-17.5c0,38.5,0,77.1,0,115.6C253.9,120,235.8,120,217.7,120z"/%3E%3C/svg%3E');
    }
    .dashtab.companies {
        background-image: url('data:image/svg+xml,%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="272" height="120" viewBox="0 0 272 120"%3E%3Cpath opacity="0.1" d="M0,112.5c6.2,0.2,12.4,0.1,18.5,0.6c12.3,0.9,24.5,0.4,36.7-1.1c8.8-1.1,17.6-1.9,26.3-3.2 c12.8-1.9,23.4-8,32.8-16.6c8-7.3,13.9-16,19.6-25c5.4-8.5,10.7-17.1,17.7-24.4c10.9-11.4,23.9-18.9,39.8-21.7 c14.6-2.5,29.2-5.6,43.9-8c10-1.6,20.1-2.3,30.2-3.5c2.2-0.2,4.3-0.5,6.5-0.8c0,37.1,0,74.2,0,111.3c-90.7,0-181.3,0-272,0 C0,117.5,0,115,0,112.5z"/%3E%3C/svg%3E%0A');
    }
    .dashtab.contacts {
        background-image: url('data:image/svg+xml,%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="272" height="120" viewBox="0 0 272 120"%3E%3Cpath opacity="0.1" d="M181.3,120c2-0.1,4.1-0.3,6.1-0.4c9.3-0.3,18.6-0.6,27.7-2.9c1.3-0.3,2.6-1,3.6-1.9 c13.1-12.3,21.9-27.3,29.1-43.4c6.7-14.9,13.4-29.8,20.2-44.6c1.2-2.5,2.7-4.9,4-7.3c0,33.5,0,67,0,100.5 C241.8,120,211.6,120,181.3,120z"/%3E%3C/svg%3E%0A');
    }
</style>
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
    const MUI = function () { return this.$store.state.Interface }
    computed = { MUI, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ---------------------------- Filter
    const FBX = function () { return this.$store.state.Filterbox }
    computed = { FBX, ...computed }
///*/// ----------------------------



///*/// ---------------------------- define tabs


    let tabs = [
        {
            category:   'products',
            href:      '/Products',
            label:      'Products',
            color:      '#EF746F',
            icon:       'cube-outline',
        },
        {
            category:   'components',
            href:      '/Components',
            label:      'Components',
            color:      '#FFBE40',
            icon:       'cube',
        },
        {
            category:   'companies',
            href:      '/Companies',
            label:      'Companies',
            color:      '#B3CC57',
            icon:       'factory',
        },
        {
            category:   'contacts',
            href:      '/Contacts',
            label:      'Contacts',
            color:      '#4ECDC4',
            icon:       'briefcase',
        },
    ]

    let tabs_category2i = category => {
        let i = false
        let search = (tab,imap) => { if (tab.category===category) i=imap }
        tabs.map(search)
        return i
    }
    methods = {
        tabi (category) { return tabs_category2i(category) },
    ...methods }

    let tabui = {
        value:    0,
        valueNew: 0, }
    tabs.map( tab=>Object.assign(tab,tabui) )

    data.tab_now = 'products'
    data.tab_all = tabs
    data.taps = false


///*/// ---------------------------- define ui actions


    methods = {
        TabClick (TAB) {
            let RNA = this
            RNA.$data.tab_now = TAB.category
            RNA.taps = tabs_category2i(TAB.category)
        },
    ...methods }


///*/// ---------------------------- Table

    import elTable from '@/components/db-viewer/el-items-table.vue'
    components = { elTable, ...components }

    methods = {
        UI_TableClickTag (raw) {
            let RNA = this
            let MUI = RNA.MUI
            let category = RNA.$data.tab_now

            RNA.FBX.SetFLI( {category, raw} )
            RNA.$vuetify.goTo(0,0,0)  // scroll top
            // *issue - hardcoded href
            let hrefMap = {
                products:'/Products',
                contacts:'/Contacts',
                companies:'/Companies',
                components:'/Components',
                brands:'/Brands',
            }
            if (hrefMap[category]) MUI.Goto(hrefMap[category])
        },
        UI_TableActionPage () {},
        UI_TableActionPerPage () {},
    ...methods }


///*/// ---------------------------- Add Reportage


    import elReporter from '@/components/el-reporter.vue'
    components = { elReporter, ...components }
    methods = {
        Reportage (list) { this.$refs.Reporter.Select(list) },
    ...methods }


///*/// ---------------------------- load content


    import ItemMaster from '@/app/ItemMaster.js'

    methods = {
        ReloadContent () {
            let RNA = this
            let MUI = RNA.MUI
            let tab_all = RNA.$data.tab_all

            MUI.ui_statelabel = "Loading..."

            let Load = i => {

                let category = tab_all[i].category
                let filter = { itemsPerPage:12 }

                let DisplayResponce = responce =>
                    RNA.DisplayLoadedPart({category, responce})

                ItemMaster.getList( {filter, category} ) // load items
                    .then(  DisplayResponce )
                    .catch( RNA.ItemsLoadingFailed )
            }

            for (let i in tab_all) Load(i)
        },
        DisplayLoadedPart (dna) {
            let {category, responce} = dna
            let RNA = this
            let MUI = RNA.MUI
            let TAB = RNA.$data.tab_all[tabs_category2i(category)]

            // update log

            MUI.ui_statelog.unshift(category)
            if (MUI.ui_statelog.length>3) {
                // loading complete
                MUI.ui_statelabel = 'Loaded'
                MUI.ui_statelog.unshift('Welcome!')
            }

            // update tab

            TAB.value = RNA.MUI.ItemsTotal(category)

///////////////////////////////////////////////////
            // *issue B36 - "new products"
            let demo_valueNew =
                category==='components' ? TAB.value
              : category==='contacts'   ? TAB.value
              : category==='products'   ? '0'
              : category==='companies'  ? '589'
              : false
            TAB.valueNew = demo_valueNew
///////////////////////////////////////////////////

            // update shortlist

            TAB.items = responce.slice(0,5)

        },
        ItemsLoadingFailed (responce) {
            // todo
        },
        CheckListIntro () {
            let RNA = this
        },
    ...methods }



///*/// ---------------------------- export ready

export default {

    name: 'el-dashboard-tabs',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
        RNA.ReloadContent()
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
