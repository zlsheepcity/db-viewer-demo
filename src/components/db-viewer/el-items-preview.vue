<!-- Viewer UI Component - Preview Panel
     2020.7.7 NEOSI -->

<template>

<v-bottom-sheet flat
    dont-hide-overlay
    v-model="display"
    content-class="container pa-0"
    scrollable>

<v-card flat tile>
<v-card-text class="pa-0 px-3">
<v-sheet tile>

<!-- ================================ HEADER -->

    <header>
       <div class="d-flex align-center px-4 py-4">

            <!-- title -->

            <div class="preview-title-text d-flex align-center">
                <span class="title" @click="uiNavigate(ox.href)">
                    {{ox.title}}
                </span>
                <v-chip small color="transparent" @click="uiNavigate(ox.href)">
                    <el-marker view="icon" iconsize="small" :item="ox"/>
                    <span class="ml-1">{{ox.id}}</span>
                </v-chip>
            </div>

           <v-spacer/>

            <!-- bookmark -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="User.BookmarkToggle(ox)"
                        color="blue"
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
                        ? 'Remove Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
            </v-tooltip>

            <!-- View More -->

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">

                    <v-icon v-on="on"
                        @click="uiNavigate(ox.href)"
                        color="primary"
                        >mdi-open-in-app</v-icon>

                </template>
                <span>
                    View More
                </span>
            </v-tooltip>

            <!--  -->

       </div>
    </header>

    <section v-if="itemLoading">
    <div class="d-flex justify-center align-center" style="height:240px">
        <div class="caption">Loading...</div>
    </div>
    </section>


    <section v-if="!itemLoading">
    <div style="min-height:240px">

<!-- ================================ PRODUCT CARD -->

<template v-if="ox.category==='products'">

    <div class="d-flex px-3">


        <!--    -->

        <div>

            <!-- company -->

            <v-list-item dense flat>
            <v-list-item-content class="pt-0">
            <v-list-item-subtitle class="caption">
                Company
            </v-list-item-subtitle>
            <v-list-item-title>
                <div v-if="ox.company && ox.company.id"
                    style="cursor:pointer"
                    @click="uiNavigateCompany(ox.company.id)">
                    {{ox.company.name}}
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                    </div>
                <div v-else>n/a</div>
            </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

            <!-- brand -->

            <v-list-item dense flat>
            <v-list-item-content class="">
            <v-list-item-subtitle class="caption">
                Brand
            </v-list-item-subtitle>
            <v-list-item-title>
                <div v-if="ox.brand && ox.brand.id"
                    style="cursor:pointer"
                    @click="f=>'*issue brands'">
                    {{ox.brand.name}}
                    <v-icon small color="secondary">mdi-open-in-app</v-icon>
                    </div>
                <div v-else>n/a</div>
            </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

            <!-- status and dates -->

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

        </div>

        <!-- types -->

        <template v-if="ox.types && ox.types.length">
            <div class="px-4">

                <div class="caption grey--text text--darken-1 px-2 pb-2"
                    style="white-space:nowrap">
                    Product Types
                </div>

                <div v-for="(type, key) in ox.types" :key="key">
                <v-chip small color="transparent" class="mr-1 mb-1">
                    <v-icon
                        size="8"
                        color="amber"
                        class="ml-n1 mr-1"
                        >mdi-checkbox-blank-circle</v-icon>
                    {{type.name}}
                </v-chip>
                </div>
            </div>
        </template>

        <!--    -->

        <div class="flex-grow-1 pb-3">

            <!-- description -->

            <div class="caption grey--text text--darken-1 pl-4 pb-1">
                Description
            </div>
            <div class="caption px-4 wrapped-dbtext">
                <div v-if="ox.description" v-html="ox.description"/>
                <div v-else>n/a</div>
            </div>


            <!-- components -->

            <div class="pt-4">
                <v-chip
                    color="#FFBE40"
                    class="mx-3 my-1"
                    @click="uiNavigate(ox.href)">
                    <v-avatar left
                        class="black darken-4 white--text">
                        <span class="caption">
                            {{ox.CountComponents()}}
                        </span>
                        </v-avatar>
                    <span class="body-2">
                    Components
                    </span>
                </v-chip>
            </div>

            <!-- Features -->

            <div class="">
                <v-chip
                    color="pink lighten-4"
                    class="mx-3 my-1"
                    @click="uiNavigate(ox.href)">
                    <v-avatar left
                        class="black darken-4 white--text">
                        <span class="caption">
                            {{ox.features.length || 0}}
                        </span>
                        </v-avatar>
                    <span class="body-2">
                    Features
                    </span>
                </v-chip>
            </div>

        </div>



        <!-- image -->

        <figure>
        <v-img
            v-if="ox.defaultImage"
            :aspect-ratio="0.74825"
            :src="'//'+ox.defaultImage.url"
            width="180"
            alt=""/>
        </figure>

        <!--  -->

    </div>

</template>

<template v-if="ox.category==='components'">

    <div class="d-flex px-3">

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

        </div>

        <div>
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

        <div class="pt-2">

            <!-- Products -->

            <div class="caption grey--text text--darken-1 px-2 pb-2"
                style="white-space:nowrap">
                Used in Products
            </div>

            <div class="pt-0">
                <v-chip
                    color="#EF746F"
                    class="mx-3 my-1"
                    @click="uiNavigate(ox.href)">
                    <v-avatar left
                        class="black darken-4 white--text">
                        <span class="caption">
                            {{ox.productsAmount || 0}}
                        </span>
                        </v-avatar>
                    <span class="body-2">
                    Products
                    </span>
                </v-chip>
            </div>

        </div>

    </div>

</template>

<template v-if="ox.category==='companies'">

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



        <div>

            <!-- Products -->

            <div class="pt-2">
                <v-chip
                    color="#EF746F"
                    class="mx-3 my-1"
                    @click="uiNavigate(ox.href)">
                    <v-avatar left
                        class="black darken-4 white--text">
                        <span class="caption">
                            {{ox.productsAmount}}
                        </span>
                        </v-avatar>
                    <span class="body-2">
                    Products
                    </span>
                </v-chip>
            </div>

            <!-- Brands -->

            <div class="pt-0">
                <v-chip
                    color="purple lighten-4"
                    class="mx-3 my-1"
                    @click="uiNavigate(ox.href)">
                    <v-avatar left
                        class="black darken-4 white--text">
                        <span class="caption">
                            {{ox.brandsAmount}}
                        </span>
                        </v-avatar>
                    <span class="body-2">
                    Brands
                    </span>
                </v-chip>
            </div>

        </div>


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

</template>

<template v-if="ox.category==='contacts'">

    <div class="d-flex px-3">

        <div>
            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Email
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.email || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Private Phone
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.privatePhone || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Work Phone
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.workPhone || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>
        </div>


    </div>

</template>

<!-- ================================ -->

    </div>
    </section>


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

            RNA.$data.ox   = item
            RNA.$data.item = item
            RNA.$data.itemLoading = true // show loader

            ItemMaster.getListItem({id,category})
                .then(  RNA.ItemLoadingComplete )
                .catch( RNA.ItemLoadingFailed )
        },

        ItemLoadingComplete (item) {
            let RNA = this
            RNA.$data.ox   = item
            RNA.$data.item = item
            RNA.$data.itemLoading = false // hide loader
        },

        ItemLoadingFailed (dna) {
            let RNA = this
            RNA.$data.itemLoading = false // hide loader
        },

    ...methods }

///*/// ---------------------------- export ready

export default {
    name: 'el-items-preview',
    components,
    props,
    methods,
    computed,
    data () { return data },
}

</script>
