<!-- Item quick view -->

<template>

<v-bottom-sheet dark flat scrollable hide-overlay v-model="display"
    content-class="container py-0 grey darken-4">

<v-card flat tile>
<v-card-text class="pa-0">
<v-sheet tile>
<template v-if="ox.category==='products'">

    <header
       class="d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2">
        <div class="d-flex align-center align-md-start justify-start flex-column pa-2"
            @click="uiNavigate(ox.href)">

            <!-- title -->

            <div class="title text-center text-md-left">
                <span class="preview-title-text mr-2"
                    v-text="ox.title"/>
                <v-chip small class="" @click>
                    <v-icon small class="mr-1">mdi-cube-outline</v-icon>
                    {{ox.id}}
                </v-chip>
            </div>

            <!-- summary -->

            <div class="d-flex flex-wrap align-center justify-center">

                <span class="overline as-link mr-4">
                    Components
                    (<b v-text="ox.CountComponents()"/>)
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </span>
                <span class="overline as-link">
                    Features
                    (<b v-text="ox.features.length || 0"/>)
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </span>
            </div>

        </div>
        <div class="d-flex align-center justify-center flex-wrap-reverse pa-2">

            <!-- order -->

            <block-purchase :item="ox" type="icon"/>

            <!-- bookmark -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="User.BookmarkToggle(ox)"
                        color="secondary"
                        class="mx-4">
                        {{
                            User.BookmarkIs(ox)
                            ? 'mdi-bookmark'
                            : 'mdi-bookmark-outline'
                        }}
                        </v-icon>

                </template>
                <span>
                    {{
                        User.BookmarkIs(ox)
                        ? 'Clear Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
            </v-tooltip>

            <!-- more info -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="uiNavigate(ox.href)"
                        color="primary"
                        >mdi-open-in-app</v-icon>

                </template>
                <span>
                    Detailed View
                </span>
            </v-tooltip>

            <!--  -->

        </div>
    </header>

    <v-divider class="mb-2"/>

    <v-row no-gutters class="pb-4">
        <v-col cols="12" md="4">

            <!-- company -->

            <template v-if="ox.company && ox.company.id">
                <v-list-item dense  @click="uiNavigateCompany(ox.company.id)">
                <v-list-item-content>
                <v-list-item-subtitle class="caption">Company</v-list-item-subtitle>
                <v-list-item-title>
                    {{ox.company.name}}
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </template>
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

            <!-- types -->

            <template v-if="ox.types && ox.types.length">
                <v-list-item dense class="mt-1">
                <v-list-item-content>
                <div>
                    <v-chip small class="mr-1 mb-1"
                        v-for="(type, key) in ox.types"
                        :key="key"
                        v-html="type.name"/>
                </div>
                </v-list-item-content>
                </v-list-item>
            </template>

            <!--  -->

        </v-col>
        <v-col cols="12" md="4">

            <!-- PreviewContent -->

            <template
                v-if="value"
                v-for="(value, tag) in ox.PreviewContent()">
                <v-list-item dense>
                <v-list-item-content>
                <v-list-item-subtitle v-text="tag" class="caption"/>
                <v-list-item-title    v-text="value"/>
                </v-list-item-content>
                </v-list-item>
            </template>

            <!--  -->

        </v-col>
        <v-col cols="12" md="4">

            <!-- Images -->

            <template v-if="ox.images && ox.images.length">

                    <img
                        :src="ox.image_midi"
                        :alt="ox.title"
                        style="height:200px;"
                        class="d-block mr-2 ml-auto">

            </template>
            <template v-else>
                <v-card tile flat
                    color="blue-grey lighten-4"
                    class="d-flex align-center justify-center mr-2 ml-auto"
                    style="max-width:266px"
                    height="200">
                    <v-icon size="120" style="opacity:0.25">mdi-image</v-icon>
                </v-card>
            </template>

            <!--  -->

        </v-col>
    </v-row>

</template>

<template v-if="ox.category==='components'">


    <header
       class="d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2">
        <div class="d-flex align-center align-md-start justify-start flex-column pa-2"
            @click="uiNavigate(ox.href)">

            <!-- title -->

            <div class="title text-center text-md-left">
                <span class="preview-title-text mr-2"
                    v-text="ox.title"/>
                <v-chip small class="" @click>
                    <v-icon small class="mr-1">mdi-cube</v-icon>
                    {{ox.id}}
                </v-chip>
            </div>

            <!-- summary -->

            <div class="d-flex flex-wrap align-center justify-center">

                <span class="overline as-link">
                    Used in Products
                    (<b v-text="ox.productsAmount || 0"/>)
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </span>

            </div>

        </div>
        <div class="d-flex align-center justify-center flex-wrap-reverse pa-2">

            <!-- bookmark -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="User.BookmarkToggle(ox)"
                        color="secondary"
                        class="mx-4">
                        {{
                            User.BookmarkIs(ox)
                            ? 'mdi-bookmark'
                            : 'mdi-bookmark-outline'
                        }}
                        </v-icon>

                </template>
                <span>
                    {{
                        User.BookmarkIs(ox)
                        ? 'Clear Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
            </v-tooltip>

            <!-- more info -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="uiNavigate(ox.href)"
                        color="primary"
                        >mdi-open-in-app</v-icon>

                </template>
                <span>
                    Detailed View
                </span>
            </v-tooltip>

            <!--  -->

        </div>
    </header>

    <v-divider class="mb-2"/>

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



</template>


<template v-if="ox.category==='companies'">


    <header
       class="d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2">
        <div class="d-flex align-center align-md-start justify-start flex-column pa-2"
            @click="uiNavigate(ox.href)">

            <!-- title -->

            <div class="title text-center text-md-left">
                <span class="preview-title-text mr-2"
                    v-text="ox.title"/>
                <v-chip small class="" @click>
                    <v-icon small class="mr-1">mdi-factory</v-icon>
                    {{ox.id}}
                </v-chip>
            </div>

            <!-- summary -->

            <div class="d-flex flex-wrap align-center justify-center">

                <span class="overline as-link mr-4">
                    Brands
                    (<b v-text="ox.brandsAmount"/>)
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </span>

                <span class="overline as-link">
                    Products
                    (<b v-text="ox.productsAmount"/>)
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                </span>

            </div>

        </div>
        <div class="d-flex align-center justify-center flex-wrap-reverse pa-2">

            <!-- bookmark --

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
 v-on="on"
<!--  -->

                    <v-icon
                        @click="User.BookmarkToggle(ox)"
                        color="secondary"
                        class="mx-4">
                        {{
                            User.BookmarkIs(ox)
                            ? 'mdi-bookmark'
                            : 'mdi-bookmark-outline'
                        }}
                        </v-icon>

<!--  --

                </template>
                <span>
                    {{
                        User.BookmarkIs(ox)
                        ? 'Clear Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
            </v-tooltip>

<!--  -->

            <!-- more info -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="uiNavigate(ox.href)"
                        color="primary"
                        >mdi-open-in-app</v-icon>

                </template>
                <span>
                    Detailed View
                </span>
            </v-tooltip>

            <!--  -->

        </div>
    </header>

    <v-divider class="mb-2"/>

    <v-row no-gutters class="pb-4">
        <v-col cols="12" md="4">

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

        </v-col>
        <v-col cols="12" md="4">

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

        </v-col>
        <v-col cols="12" md="4">

            <!-- Images -->
                    <div
                        style="width: 200px; height: 240px;"
                        class="mr-2 ml-auto">

            <template v-if="ox.image_midi">
                    <img
                        :src="ox.image_midi"
                        :alt="ox.title"
                        style="width:200px;height:200px;"
                        class="">
            </template>

                    </div>

            <!--  -->

        </v-col>
    </v-row>

</template>


<template v-if="ox.category==='contacts'">


    <header
       class="d-flex align-start justify-center justify-md-space-between flex-wrap flex-md-nowrap pa-2">
        <div class="d-flex align-center align-md-start justify-start flex-column pa-2"
            @click="uiNavigate(ox.href)">

            <!-- title -->

            <div class="title text-center text-md-left">
                <span class="preview-title-text mr-2"
                    v-text="ox.title"/>
                <v-chip small class="" @click>
                    <v-icon small class="mr-1">mdi-briefcase</v-icon>
                    {{ox.id}}
                </v-chip>
            </div>

            <!-- summary -->

            <div class="d-flex flex-wrap align-center justify-center">



            </div>

        </div>
        <div class="d-flex align-center justify-center flex-wrap-reverse pa-2">

            <!-- more info -->

            <v-btn text class="mx-2"
                color="primary"
                @click="uiNavigate(ox.href)">
                <v-icon class="mr-1">mdi-open-in-app</v-icon>
                <span>Details</span>
            </v-btn>

            <!-- close -->

            <v-btn text color="secondary"
                @click="uiExit"
                >Close</v-btn>

            <!--  -->

        </div>
    </header>

</template>

</v-sheet>
</v-card-text>
</v-card>

</v-bottom-sheet>
</template>

<style scoped>
    .preview-title-text:hover {
        cursor: pointer;
        color:  var(--v-primary-base);
    }
    .as-link { cursor: pointer; }
</style>


<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    // Interface

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }


// --------------------------------- purchase button

    import BlockPurchase from '@/components/el-purchase.vue'
    components = { ...components, BlockPurchase }

// --------------------------------- bookmark button

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }

// --------------------------------- Preload UI

    data = {
        display: false,
        ox:      false,
        msg:     '',
    ...data }
    methods = { ...methods,
        uiExit () { this.hidePreview() },
        showPreview(item) {
            let RNA = this
            RNA.$data.ox      = item
            RNA.$data.display = true

            RNA.LoadItem(item) // run loader
        },
        hidePreview() {
            let RNA = this
            RNA.$data.ox      = false
            RNA.$data.display = false
        },
        uiNavigate(url) {
            let RNA = this
            RNA.hidePreview()
            RNA.Interface.Goto(url)
        },
        uiNavigateCompany (id) {
            let RNA = this
            RNA.hidePreview()
            RNA.Interface.Goto('/Companies/'+id)
        },
    }

///*/// ---------------------------- Load Item

    import ItemMaster   from '@/app/ItemMaster.js'

    data = {
        item: {},
        itemLoading: false,
    ...data }

    methods = {

        LoadItem (item) {
            let {id,category} = item
            let RNA = this

            // *issue reset image
            //RNA.$data.ox.image_midi = ''
            RNA.$data.itemLoading = true // show loader

            ItemMaster.getListItem({id,category})
                .then(  RNA.ItemLoadingComplete )
                .catch( RNA.ItemLoadingFailed )
        },

        ItemLoadingComplete (item) {
            let RNA = this
            RNA.$data.item      = item
            RNA.$data.itemLoading = false // hide loader

            //////////////////////// *issue component category
            if (!!item.category.id) item.category = 'components'

            // update view
            RNA.$data.ox        = item
        },

        ItemLoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemLoading = false // hide loader
        },

    ...methods }

///*/// ---------------------------- export ready

export default {
    name: 'block-preview',
    components,
    props,
    methods,
    computed,
    data () { return data },
}

</script>
