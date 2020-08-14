<!-- Filter UI Component - control bar
     2020.7.6 -->

<template><section class="el-op-controlsbar">

<section class="d-flex align-center pt-1 pb-8">

    <!-- === apply filter -->

    <v-btn
        color="primary"
        class="ma-1 mr-2"
        :text="FBX.Active(category)"
        @click="UI_ApplyButton">
            <v-icon small v-if="FBX.Active(category)"
            >mdi-checkbox-marked-outline</v-icon>
            <v-icon small v-else
            >mdi-checkbox-blank-outline</v-icon>
            <span class="ml-1">
            Apply Filter</span>
        </v-btn>

    <!-- === load filter -->

    <!--<v-spacer v-if="FBX.Active(category)"/>-->

    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text
                :disabled="!User.FiltersCount()"
                v-on="on">
                <v-icon>mdi-menu-down</v-icon>
                <span>Load Filter</span>
                </v-btn>
        </template>
        <v-list>
        <template v-for="ufi in User.FiltersShortlist()">
            <v-list-item @click="UI_LoadFilter(ufi)">
            <v-list-item-title>{{ufi.label}}</v-list-item-title>
            </v-list-item>
        </template>

        <!-- More User Filters -->

        <v-list-item dense @click="Interface.Goto('/Profile/Filters')">
        <v-list-item-content>
        <v-list-item-title>
            <v-icon>mdi-dots-horizontal</v-icon>
        </v-list-item-title>
        </v-list-item-content>
        </v-list-item>

        </v-list>
    </v-menu>

    <!-- === Save -->

    <template v-if="FBX.Active(category)">

        <v-text-field dense regular hide-details
            class="ma-0 ml-4 caption"
            style="max-width:10em"
            :disabled="!FBX.FLI(category).HasConditions()"
            v-model="FBX.FLI(category).label"/>

        <v-btn text color="secondary"
            :disabled="!FBX.FLI(category).HasConditions()"
            @click="UI_SaveFilter">
            Save
            </v-btn>

    </template>

    <!-- === -->

</section>

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


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


// OP-Constructor Story


///*/// ---------------------------- Define Category

    props = [ 'for', ...props ]
    computed = {
        category () { return this.$props.for || 0 },
    ...computed }

///*/// ---------------------------- Create Actors

    computed = {
        FBX () { return this.$store.state.Filterbox },
    ...computed }


    methods = {

        UI_ApplyButton () {
            let RNA = this
            let FBX = RNA.FBX
            let category = RNA.category
            FBX.Activate(category,'toggle')
            if (FBX.Active(category) && !FBX.HasConditions(category))
                RNA.OpenSheetlist() // Auto-open Sheetlist
        },
        UI_LoadFilter (fli) {
            let RNA = this
            let FBX = RNA.FBX
            FBX.SetFLI(fli)
        },
        UI_SaveFilter () {
            let RNA = this
            let cat = RNA.category
            let FLI = RNA.FBX.FLI(cat)
            RNA.User.SaveFilter(FLI.Extract())
        },

    ...methods }

///*/// ---------------------------- Auto-open Sheetlist

    props = [ 'opensheetlist', ...props ]
    methods = {
        OpenSheetlist () {
            let RNA = this
            let func = RNA.$props.opensheetlist
            if (typeof(func)==='function') func()
        },
    ...methods }


///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'el-op-controlsbar',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {},

// ---------------------------------

}

///*/// ---------------------------- END
</script>
