<template>
<v-container class="el-dashboard-header pa-0 pb-4">

    <div class="d-flex align-start">

<!-- ================================ Loading State -->

        <div class="caption px-4">
            <div>Status: {{Interface.ui_statelabel}}</div>
            <div>{{Interface.ui_statelog[0] || ''}}</div>
        </div>

<!-- ================================ User Name -->

        <v-spacer/>

        <div class="caption mr-4 ml-auto text-left"
            @click="Interface.Goto('/Profile')"
            style="cursor:pointer;width:min-content; white-space:nowrap">
            User:
            <b>{{User.profile.name}}</b><br>
            <span
                style="text-decoration:underline"
                class="blue--text text--darken-2 text-decoration-underline">
                Profile & Settings
                </span>
        </div>


<!-- ================================ Welcome Message Button -->


        <v-expand-x-transition>
        <div v-if="!Interface.dashboard_welcome_message">
            <div class="pr-3">


            <v-avatar size="32"
                @click="Interface.dashboard_welcome_message = true"
                class="amber lighten-3 brown--text text--lighten-3"
                style="cursor:pointer">
                <b>1</b><!-- *issue - messages history/hounter -->
            </v-avatar>

            </div>
        </div>
        </v-expand-x-transition>


<!-- ================================ -->


    </div>

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


// models


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'el-dashboard-header',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
