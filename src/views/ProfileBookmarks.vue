<template>
<v-container>

    <el-head-some
        caption="Manage Bookmarks"
        />

    <v-sheet tile elevation="1">

<!-- ================================ Tabs -->

    <section class="blue-grey darken-3">
        <v-btn-toggle tile mandatory
            v-model="ui_tabs">
            <v-btn value="all">
                <v-icon>mdi-bookmark</v-icon>
                <span class="ml-1">
                    All <span class="hidden-sm-and-down">Bookmarks</span>
                    ({{User.ui.bookmarks.length || 0}})
                </span>
            </v-btn>
            <v-btn value="products">
                <el-marker view="icon" :item="{category:'products'}"/>
                <span class="hidden-sm-and-down ml-1">Products</span>
            </v-btn>
            <v-btn value="components">
                <el-marker view="icon" :item="{category:'components'}"/>
                <span class="hidden-sm-and-down ml-1">Components</span>
            </v-btn>
            <v-btn value="companies">
                <el-marker view="icon" :item="{category:'companies'}"/>
                <span class="hidden-sm-and-down ml-1">Companies</span>
            </v-btn>
            <v-btn value="contacts">
                <el-marker view="icon" :item="{category:'contacts'}"/>
                <span class="hidden-sm-and-down ml-1">Contacts</span>
            </v-btn>
        </v-btn-toggle>
    </section>

<!-- ================================ List Items -->

    <section class="py-4">

        <template v-if="!User.ui.bookmarks.length">
            <div class="caption pa-4 text-center" >
                no saved bookmarks
            </div>
            <div class="body-2 pa-4 text-center" >
                Find Favorite
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Products')"
                    >
                    <v-icon small class="mr-1">mdi-cube-outline</v-icon>
                    Products</v-chip>,
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Components')"
                    >
                    <v-icon small class="mr-1">mdi-cube</v-icon>
                    Components</v-chip>,<br>
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Companies')"
                    >
                    <v-icon small class="mr-1">mdi-factory</v-icon>
                    Companies</v-chip>
                or
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Contacts')"
                    >
                    <v-icon small class="mr-1">mdi-briefcase</v-icon>
                    Contacts</v-chip>
            </div>
        </template>
        <v-list v-else>
        <v-list-item dense
            v-for="(item, key) in bookmarks"
            v-if="ui_tabs=='all' || ui_tabs==item.category"
            @click="Interface.Goto(item.href)"
            :key="key"
            class="pl-3">
            <v-list-item-icon>
                <v-icon
                    @click.stop="User.BookmarkClear(item)"
                    >mdi-delete</v-icon>
                </v-list-item-icon>
            <v-list-item-icon class="mr-2">
                <el-marker view="icon" :item="item"/>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                {{item.title}}
                </v-list-item-title>
            <v-list-item-subtitle>
                /{{item.category}}/{{item.id}}
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-list>

    </section>

<!-- ================================ -->

    </v-sheet>

<!-- ================================ -->

</v-container>
</template>
<script>

///*/// ---------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    data = {
        msg:'',
        ui_tabs: 'all',
    ...data }

    computed = {
        bookmarks () {
            let list = [...this.$store.state.user.ui.bookmarks]
            return list.reverse()
        },
    ...computed }

///*/// ---------------------------- Interface

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }

///*/// ---------------------------- User

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }

///*/// ---------------------------- Headsome

    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }


///*/// ---------------------------- export ready

export default {

    name: 'ProfileBookmarks',
    props,
    components,
    methods,
    computed,
    data () { return data },

// --------------------------------- created

    created () {
        
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
