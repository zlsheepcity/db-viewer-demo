<!-- Page Header with Title, Menu and User -->
<template>
<header class="General-Nav-Head pb-4">

<!-- ================================ Some Header -->

<section class="headsome-row d-flex justify-space-between align-start px-md-3">
<div class="headsome-col-first d-flex">

<!-- ================================ Dashboard/Home -->

        <v-avatar size="32" class="blue mr-1">
        <v-icon
            @click="Interface.Goto('/Dashboard')"
            color="white"
            class="pa-1"
            >mdi-home</v-icon>
        </v-avatar>

<!-- ================================ hamburger -->

    <v-icon
        @click="ShowMenu"
        color="blue"
        class="pa-1"
        >mdi-menu</v-icon>

<!-- ================================ back button --

    <v-icon
        @click="Interface.NavigateBack"
        color="blue"
        class="pa-1"
        >mdi-arrow-left</v-icon>

<!-- ================================ -->

        <!-- *issue - headline centering -->

        <v-icon role="visual centering"
            color="transparent"
            class="pa-1 d-none d-lg-block"
            >mdi-menu</v-icon>

<!-- ================================ -->
<!-- ================================ -->

</div>
<div class="headsome-col-main d-flex justify-center text-center grow">

<!-- ================================ mobile hamburger -->

    <div class="d-md-none">
        <v-btn text
            @click="ShowMenu">
            <div class="ml-1" v-if="caption">
                {{caption}}
                </div>
        </v-btn>
    </div>

<!-- ================================ desktop hamburger -->

    <div class="d-none d-md-flex align-center">

        <div
            @click="ShowMenu"
            class="display-1 px-1"
            >{{caption}}</div>

       <template v-if="chip">
           <v-chip class="title" @click="ShowMenu">
               <el-marker view="icon" :item="chip"/>
               <span class="pl-1">{{chip.id}}</span>
           </v-chip>
       </template>

    </div>

<!-- ================================ -->

</div>
<div class="headsome-col-last">

<!-- ================================ bookmarks -->


    <v-menu offset-y bottom left>
    <template v-slot:activator="{ on }">

        <v-icon
            v-on="on"
            color="blue"
            class="pa-1"
            >mdi-bookmark</v-icon>

    </template>
    <v-list>

        <div v-if="!User.BookmarksCount()">
        <v-list-item dense
            @click="Interface.Goto('/Profile/Bookmarks')">
            <v-list-item-content>
            <v-list-item-title>
                Manage Bookmarks...
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </div>
        <template v-else>

        <v-list-item dense
            v-for="(it, key) in User.BookmarksShortlist()"
             :key="key"
            @click="Interface.Goto(it.href)">
            <v-list-item-icon class="mr-2">
                <el-marker view="icon" :item="it"/>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                {{it.title}}
                </v-list-item-title>
            <v-list-item-subtitle>
                {{it.category}} / {{it.id}}
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense class="pl-12"
            @click="Interface.Goto('/Profile/Bookmarks')">
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </template>


    </v-list>
    </v-menu>


<!-- ================================ filters -->


    <v-menu offset-y bottom left>
    <template v-slot:activator="{ on }">

        <v-icon
            v-on="on"
            color="blue"
            class="pa-1"
            >mdi-magnify-plus</v-icon>

    </template>
    <v-list>

        <div v-if="!User.FiltersCount()">
        <v-list-item dense
            @click="Interface.Goto('/Profile/Filters')">
            <v-list-item-content>
            <v-list-item-title>
                Manage Filters...
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </div>
        <template v-else>

        <v-list-item dense
            v-for="(it, key) in User.FiltersShortlist()"
             :key="key"
            @click="GoUseFilter(it)">
            <v-list-item-icon class="mr-3">
                <el-marker view="icon" :item="{category:'products'}"/>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                {{it.label}}
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense class="pl-12"
            @click="Interface.Goto('/Profile/Filters')">
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </template>

    </v-list>
    </v-menu>



<!-- ================================ Profile -->


    <v-menu offset-y bottom left>
    <template v-slot:activator="{ on }">

        <v-avatar size="32" class="blue ml-1">
        <v-icon
            v-on="on"
            color="white"
            class="pa-1"
            >mdi-account</v-icon>
        </v-avatar>

    </template>
    <v-list>

        <v-list-item dense
            @click="Interface.Goto('/Profile')">
            <v-list-item-icon class="mr-3">
                <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                Profile & Settings
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <v-divider/>

        <v-list-item dense
            @click="User.Logout()">
            <v-list-item-icon class="mr-3">
                <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                Logout
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

    </v-list>
    </v-menu>


<!-- ================================ help -->

<div class="d-none BONAPARTY">
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">

            <span v-on="on">
            <v-icon
                
                :disabled="true"
                @click=""
                color="blue"
                class="pa-1"
                >mdi-help</v-icon>
            </span>

        </template>
        <span>
            Help page *Issue F62
        </span>
    </v-tooltip>
</div>

<!-- ================================ actions button -->

<div class="d-none BONAPARTY">
    <v-menu offset-y bottom left>
    <template v-slot:activator="{ on }">

        <v-icon
            v-on="on"
            color="blue"
            class="pa-1"
            >mdi-dots-vertical</v-icon>

    </template>
    <v-list>

        <v-menu offset-x left>
        <template v-slot:activator="{ on }">

        <v-list-item dense v-on="on">
        <v-list-item-icon
            class="mr-2"
            ><v-icon>mdi-bookmark</v-icon></v-list-item-icon>
        <v-list-item-title>Bookmarks</v-list-item-title>
        </v-list-item>

        </template>
        <v-list class="py-0">

        <v-list-item dense>
        <v-list-item-title>*Issue F56</v-list-item-title>
        </v-list-item>

        </v-list>
        </v-menu>


        <v-menu offset-x left>
        <template v-slot:activator="{ on }">

        <v-list-item dense v-on="on">
        <v-list-item-icon
            class="mr-2"
            ><v-icon>mdi-magnify-plus</v-icon></v-list-item-icon>
        <v-list-item-title>Filters</v-list-item-title>
        </v-list-item>

        </template>
        <v-list>

        <v-list-item dense>
        <v-list-item-title>*Issue F56</v-list-item-title>
        </v-list-item>

        </v-list>
        </v-menu>

    </v-list>
    </v-menu>
</div>

<!-- ================================ -->

</div>
</section>

<!-- ================================ subtitle -->

   <template v-if="subtitle">
       <div
           class="caption text-center mx-auto"
           style="max-width: 60vw;"
           >{{subtitle}}</div>
   </template>

<!-- ================================ main menu  -->

    <v-navigation-drawer dark
        v-model="nav.panel"
        fixed
        temporary>
        <main-menu :exit="HideMenu"/>
    </v-navigation-drawer>


</header>
</template>
<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    data = {
        msg:'',
    ...data }

///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- Filterbox
    const Filterbox = function () { return this.$store.state.Filterbox }
    computed = { Filterbox, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------

// --------------------------------- text strings


    props = [ 'caption', 'chip', 'subtitle', ...props ]


// --------------------------------- Menu


    import MainMenu from '@/components/el-menu-db.vue'
    components = { MainMenu, ...components }


// --------------------------------- UI events


    data = {
        nav: { panel:false },
    ...data }

    methods = {
        ShowMenu () { this.$data.nav.panel = true  },
        HideMenu () { this.$data.nav.panel = false },
        GoUseFilter (fli) {
            let RNA = this
            let MUI = RNA.Interface
            let FBX = RNA.Filterbox
            let category = fli.category

            FBX.SetFLI( fli )

            // *issue - hardcoded href
            let hrefMap = {
                products:'/Products',
                contacts:'/Contacts',
                companies:'/Companies',
                components:'/Components',
                brands:'/Brands',
            }
            if (hrefMap[category]) {
                MUI.Goto(hrefMap[category])
                RNA.$vuetify.goTo(0,0,0)  // scroll top
            }
        },
    ...methods }


// --------------------------------- Developer


    import DevFilterState from '@/components/db-filter/el-op-devstate.vue'
    components = { DevFilterState, ...components }

    data = {
        developer_report:false,
    ...data }

// --------------------------------- export ready

export default {

    name: 'el-head-some',
    props,
    components,
    methods,
    computed,
    data () { return data },

// --------------------------------- created

    created () {
        
    },

}

</script>
