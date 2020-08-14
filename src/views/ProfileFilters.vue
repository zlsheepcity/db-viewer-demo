<template>
<v-container>

    <el-head-some
        caption="Manage Filters"
        />

    <v-sheet tile elevation="1">

<!-- ================================ Tabs -->

    <section class="blue-grey darken-3">
        <v-btn-toggle tile mandatory
            v-model="ui_tabs">
            <v-btn value="all">
                <v-icon>mdi-magnify-plus</v-icon>
                <span class="ml-1">
                    All <span class="hidden-sm-and-down">Filters</span>
                    ({{User.ui.filters.length}})
                </span>
            </v-btn>
        </v-btn-toggle>
    </section>

<!-- ================================ List Items -->

    <section class="py-4">

        <template v-if="!User.FiltersCount()">
            <div class="caption pa-4 text-center" >
                no saved filters
            </div>
            <div class="body-2 pa-4 text-center" >
                Create Filters for
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Products')"
                    >
                    <v-icon small class="mr-1">mdi-cube-outline</v-icon>
                    Products</v-chip>
            </div>
        </template>
        <template v-else>
        <v-list>
        <v-list-item dense
            v-for="(item, key) in User.ui.filters"
            v-if="ui_tabs=='all' || ui_tabs==item.category"
            :key="key"
            @click="GoUseFilter(item)"
            class="pl-3">
            <v-list-item-icon class="align-self-center">
                <v-icon
                    @click.stop="msg=User.FilterRemove(item)"
                    >mdi-delete</v-icon>
                </v-list-item-icon>
            <v-list-item-icon class="align-self-center mr-2 d-none">
                <v-icon
                    >mdi-pencil</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                {{item.label}}
                </v-list-item-title>


<!--
                    <v-text-field solo flat dense
                        v-model      ="item.label"
                        class        ="body-2"
                        :outlined    ="true"
                        :readonly    ="!true"
                        hide-details/>

                @keyup.enter ="if (User.profile.name) editname=false; User.UpdateProfile(['name'])"
                @keyup.esc   ="editname=false; User.LoadProfile()"
                        :outlined    ="editname"
                        :readonly    ="!editname"
                -->
            </v-list-item-content>
            </v-list-item>
        </v-list>
            <div class="body-2 pa-4 text-center" >
                Create more Filters for
                <v-chip small class="ma-1"
                    @click="Interface.Goto('/Products')"
                    >
                    <v-icon small class="mr-1">mdi-cube-outline</v-icon>
                    Products</v-chip>
            </div>
        </template>
    </section>

<!-- ================================  -->

    </v-sheet>


<!-- ================================ TODO -->


    <div class="amber lighten-3 pa-4 my-8 body-2 d-none">
        <div class="overline pb-2">*issue F64</div>
        <div class="body-2">
            Добавить функционал к списку фильтров:<br>
            1. перейти к результатам<br>
            2. показывать последние/новые результаты в цифрах<br>
            3. переименовать фильтр<br>
            4. группировать фильтры<br>
            5. изменить порядок<br>
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
    let data        = {}

    data = {
        msg:'',
        ui_tabs: 'all',
        editmode: {},
    ...data }



///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ---------------------------- Filter
    const FBX = function () { return this.$store.state.Filterbox }
    computed = { FBX, ...computed }
///*/// ----------------------------

///*/// ---------------------------- Headsome
    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }
///*/// ----------------------------


    methods = {
        GoUseFilter (fli) {
            let RNA = this
            let MUI = RNA.Interface
            let FBX = RNA.FBX
            let category = fli.category

            RNA.FBX.SetFLI( fli )

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


///*/// ---------------------------- export ready

export default {

    name: 'ProfileFilters',
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
