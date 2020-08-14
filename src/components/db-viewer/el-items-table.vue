<!-- Viewer UI Component - Table
ok     2020.5.20 SI -->

<template>
<article class="el-items-table">

<!-- ================================ Table Data -->

<v-data-table
    class                = "item-table"
    v-model              = "table_selection"

    :items               = "items"
    :loading             = "itemsLoading"
    :headers             = "HDR[category]"
    :server-items-length = "itemsCount"

    :show-select         = "!!ActionSelect"
    :hide-default-footer = "hidefooter"
    :footer-props = "{'items-per-page-options':[30,100,500]}"

    @update:page  = "ActionPage"
    @click:row    = "ItemPreview"
    @input        = "ActionSelect"
    @update:items-per-page = "UI_ChangeItemsPerPage"
    >

    <!-- ================================ category -->

    <template v-slot:item.category="{ item }">
        <el-marker view="icon" :item="item"/>
    </template>

    <!-- ================================ ID -->

    <template v-slot:item.id="{ item }">
        <div class="d-flex align-end justify-end pt-1 mr-n3">
            <v-chip small color="transparent"
               @click.stop="OpenProfile(item)">
                {{item.id}}
                <v-icon class="ml-1" color="primary"
                    >mdi-open-in-app</v-icon>
                </v-chip>
        </div>
    </template>

    <!-- ================================ title -->

    <template v-slot:item.title="{ item }">
        <div class="pt-2 pb-1 body-1" style="cursor:default">
            {{item.title}}
        </div>
    </template>

    <!-- ================================ product types -->

    <template v-slot:item.types_as_string="{ item }">
        <div class="clickable-chips py-1">
            <div class="caption pl-2 grey--text text--lighten-1"
                v-if="!item.types || !item.types.length">
                —
                </div>
            <v-chip small class="ma-0"
                v-for="(type, key) in EF_SortTypes(item.types)"
                :key="key"
                :color="EF_ColorType(type) ? '':'transparent'"
                @click.stop="UI_SendAction({types:{list:[type.id]}})"
                >
                <v-icon
                    size="8"
                    color="amber"
                    class="ml-n1 mr-1"
                    >mdi-checkbox-blank-circle</v-icon>
                {{type.name}}
                </v-chip>
        </div>
    </template>

    <!-- ================================ status -->

    <template v-slot:item.productionStatus="{ item }">
        <div class="clickable-chips py-1">

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

            <v-chip small class="ma-0" v-on="on"
                color="transparent"
                @click.stop="UI_SendAction({'productionStatus.id':{list:[item.productionStatus.id]}})"
                >
                <v-icon
                    size="8"
                    color="grey lighten-2"
                    class="ml-n1 mr-1"
                    >mdi-checkbox-blank-circle</v-icon>
                {{
                        item.productionStatus
                    &&  item.productionStatus.name
                    && (item.productionStatus.name=='pre-orders/mass production'
                        ? 'po/mp'
                        : item.productionStatus.name)
                }}
                </v-chip>

                </template>
                <span>
                    {{
                            item.productionStatus
                        &&  item.productionStatus.name
                    }}
                </span>
            </v-tooltip>

        </div>
    </template>


    <!-- ================================ image -->

    <template v-slot:item.image="{ item }">
        <div style="min-height:60px" class="d-flex align-center">
            <div v-if="item.image_mini">

                <v-menu
                  v-model="item.hoverImage"
                  open-on-hover
                  offset-x offset-y left>
                    <template v-slot:activator="{ on }">
                        <div v-on="on">
                        <v-img
                            :aspect-ratio="item.category=='products' ? 0.74825 : 1"
                            :src="item.image_mini"
                            width="44"
                            alt=""/>
                        </div>
                    </template>
                    <v-list tile
                        v-if="item.image_midi"
                        class="pa-0">
                            <v-img
                                :aspect-ratio="item.category=='products' ? 0.74825 : 1"
                                :src="item.image_midi"
                                width="200"
                                alt=""/>
                    </v-list>
                </v-menu>

            </div>
            <v-avatar v-else tile size="44">
                <v-icon large style="opacity:0.32">mdi-image</v-icon>
            </v-avatar>

        </div>
    </template>

    <!-- ================================ component_category -->

    <template v-slot:item.component_category="{ item }">
        <div class="body-1 py-1">
            {{item.component_category && item.component_category.name || 'n/a'}}
        </div>
    </template>

    <!-- ================================ marking -->

    <template v-slot:item.marking="{ item }">
        <div class="body-1 py-1">
            {{item.marking || 'n/a'}}
        </div>
    </template>

    <!-- ================================ company_title -->

    <template v-slot:item.company_title="{ item }">
        <span
            @click.stop="Interface.Goto('/Companies/' + ui2api.apid2id(item.company))"
            class="caption"
            style="cursor:pointer;">
            {{item.company_title || 'n/a'}}
            <v-icon small color="primary">mdi-open-in-app</v-icon>
        </span>
    </template>

    <!-- ================================ actions -->

    <template v-slot:item.actions="{ item }">
        <div class="table-actions">

            <v-icon class="open-icon"
                @click.stop="OpenProfile(item)"
                >mdi-open-in-app</v-icon>

        </div>
    </template>

    <!-- ================================ actions_report -->

    <template v-slot:item.actions_report="{ item }">
        <div class="table-actions">

            <v-btn text small disabled @click.stop="f=>false">
                <v-icon small>mdi-checkbox-marked-outline</v-icon>
                <span class="ml-1">Features</span>
                </v-btn>
            <v-btn text small disabled @click.stop="f=>false">
                <v-icon small>mdi-checkbox-marked-outline</v-icon>
                <span class="ml-1">Images</span>
                </v-btn>
            <v-icon @click.stop="RemoveFromReport(item)"
                >mdi-delete</v-icon>

        </div>
    </template>

    <!-- ================================ -->

</v-data-table>


<!-- ================================ Item preview -->


<block-preview ref="Preview"/>


<!-- ================================ -->

</article>
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

    /* action buttons - no wrap */
    .item-table .table-actions { white-space:nowrap; }

    /* --------------------------------- */

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


    // Interface

    import ui2api from '@/models/ui2api.js'
    computed = { ui2api () { return ui2api }, ...computed }

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }


// --------------------------------- Preview Panel

    import BlockPreview from '@/components/db-viewer/el-items-preview.vue'
    components = { BlockPreview, ...components }


// --------------------------------- Load Items


    props = [ 'items', 'itemsCount', 'itemsLoading', ...props ]


// --------------------------------- Table Settings


    props = [ 'ActionPage', 'ActionPerPage',  ...props ]
    props = [ 'ActionSelect','ActionTag',  ...props ]
    props = [ 'filter',      ...props ]
    props = [ 'showPreview', ...props ]
    props = [ 'category',    ...props ]
    props = [ 'hidefooter',  ...props ]

    methods = {
        UI_SendAction (raw) {
            let Action = this.$props.ActionTag
            if (Action && typeof(Action)==='function' ) Action(raw)
        },
    ...methods }

    import BlockSingleItem from '@/components/el-single-item.vue'
    components = { BlockSingleItem, ...components }


// --------------------------------- Report Actions

    methods = {
        RemoveFromReport (item) {
            if( item && item.id ) this.$store.state.report.RemoveItem(item)
        },
    ...methods }


// --------------------------------- Table Actions


    data = {
        table_selection: [],
    ...data }

    methods = {
        ItemPreview (item) {
            let RNA = this
            if(!RNA.$props.showPreview) return false

            //////////////////////// *issue component category
            if (!!item.category.id) item.category = 'components'

            RNA.$refs.Preview.showPreview(item) // show preview
        },
        ClearSelection () {
            let RNA = this
            RNA.$data.table_selection = []
            // export selection
            if( typeof(RNA.$props.ActionSelect) !== 'function' )
                RNA.$props.ActionSelect([])
        },
        OpenProfile (item) {
            let RNA = this
            if(!item || !item.href) return false

            RNA.$refs.Preview.hidePreview() // hide preview
            RNA.Interface.Goto(item.href)   // show profile
            RNA.$vuetify.goTo(0,0,0)  // scroll top
        },

        EF_SortTypes (list) {
            //let source = this.$data.EasyFilter.value.types
            let filter = this.$props.filter || {}
            let source = filter.types || []
            let used = []
            let rest = []
            let sorting = type => {
                if ( source.indexOf(type.id) <0 )
                     rest.push(type)
                else used.push(type)
            }
            if (list && list.length) list.map(sorting)
            return [ ...used, ...rest ]
        },
        EF_ColorType (type) {
            return this.$props.filter && this.$props.filter.types && this.$props.filter.types.indexOf(type.id) > -1
        },
        UI_ChangeItemsPerPage (perpage) {
            let RNA = this
            if( typeof(RNA.$props.ActionPerPage) === 'function' )
                RNA.$props.ActionPerPage(perpage)
        },
    ...methods }


// --------------------------------- Table Headers

    let hds = {
        default: {
            sortable:   false,
            filterable: false,
            align:     'start',
        },
        sortable: {
            sortable:   true,
            filterable: true,
            align:     'start',
        },
        minwidth: {
            width:     '1%',
        },
        actions: {
            text:      '',
            value:     'actions',
            width:     '1%',
            align:     'end',
            sortable:   false,
            filterable: false,
        },
        image: {
            text:      'Image',
            value:     'image',
            width:     '1%',
            align:     'center', class: 'img', // *issue bug?
            sortable:   false,
            filterable: false,
        },
    }

    let HDR = {}

//  Products

    HDR.products = [
        { ...hds.image   },
        {
            ...hds.default,
            text:      'Product Title',
            value:     'title',
            width:     '30%',
        },
        {
            ...hds.default,
            text:      'Types',
            value:     'types_as_string',
            width:     '40%',
        },
        {
            ...hds.default,
            text:      'Status',
            value:     'productionStatus',
            width:     '12%',
        },
        {
            ...hds.default,
            ...hds.minwidth,
            text:      'ID/Card',
            value:     'id',
            align:     'center',
        },
        //{ ...hds.actions },
    ]

//  Components

    HDR.components = [
        {
            ...hds.default,
            text:      'Category',
            value:     'component_category',
        },
        {
            ...hds.default,
            text:      'Model on chip / Type',
            value:     'marking',
        },
        {
            ...hds.default,
            text:      'Name',
            value:     'title',
        },
        {
            ...hds.default,
            text:      'Products',
            value:     'productsAmount',
            align:     'end',
            width:     '1%',
        },
        {
            ...hds.default,
            ...hds.minwidth,
            text:      'ID/Card',
            value:     'id',
            align:     'center',
        },
    ]

//  Companies

    HDR.companies = [
        {
            ...hds.image,
            text:      'Logo',
        },
        {
            ...hds.default,
            text:      'Company',
            value:     'title',
        },
        {
            ...hds.default,
            text:      'Brands',
            value:     'brandsAmount',
            width:     '1%',
        },
        {
            ...hds.default,
            text:      'Products',
            value:     'productsAmount',
            width:     '1%',
        },
        {
            ...hds.default,
            text:      'Location',
            value:     'location_string',
        },
        {
            ...hds.default,
            ...hds.minwidth,
            text:      'ID/Card',
            value:     'id',
            align:     'center',
        },
    ]

//  Contacts

    HDR.contacts = [
        {
            ...hds.default,
            text:      'Name',
            value:     'title',
        },
        {
            ...hds.default,
            text:      'Company',
            value:     'company_title',
        },
        {
            ...hds.default,
            text:      'Position',
            value:     'position',
            width:     '25%',
        },
        {
            ...hds.default,
            ...hds.minwidth,
            text:      'ID/Card',
            value:     'id',
            align:     'center',
        },
    ]

//  Reports

    HDR.reports = [
        {
            ...hds.sortable,
            ...hds.minwidth,
            text:      '',
            value:     'category',
        },
        {
            ...hds.sortable,
            ...hds.minwidth,
            text:      'ID',
            value:     'id',
        },
        {
            ...hds.sortable,
            text:      'Title',
            value:     'title',
        },
        {
            text:      'Report Settings',
            value:     'actions_report',
            align:     'right',
            sortable:   false,
            filterable: false,
        },
    ]


//  ---

    data = {
        HDR,
    ...data }


// --------------------------------- export ready

export default {
    name: 'el-items-table',
    components,
    props,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- created

    mounted () {
        let RNA = this
    },

}

</script>
