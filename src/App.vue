<template>
<v-app>


    <!--

    <template v-if="!User || !User.logged">
        <welcome-page/>
    </template>

    <el-dialog-login/>
    <el-dialog-register/>
     -->

<!--    <template v-if="User.logged">-->
        <v-content class="fill-height">
            <router-view/>
        </v-content>
<!--    </template>-->

</v-app>
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
///*/// ---------------------------- Filters
    const Filterbox = function () { return this.$store.state.Filterbox }
    computed = { Filterbox, ...computed }
///*/// ----------------------------


// components


///*/// ---------------------------- WelcomePage
    import WelcomePage from '@/views/Welcome.vue'
    components = { WelcomePage, ...components }
///*/// ----------------------------

///*/// ---------------------------- Login Froms
    import elDialogLogin from '@/components/el-dialog-login.vue'
    components = { elDialogLogin, ...components }
    import elDialogRegister from '@/components/el-dialog-register.vue'
    components = { elDialogRegister, ...components }
///*/// ----------------------------


///*/// ---------------------------- User CheckIn

    import DBFilter_ConfigLoader from '@/components/db-filter/opLoader.js'

    methods = {
        AfterCheckIn_Tasks (RNA) {
            let Filterbox = RNA.Filterbox
            let Interface = RNA.Interface
            DBFilter_ConfigLoader.Start({Filterbox,Interface})
            RNA.Interface.item_operators_Create()
        },
        AfterCheckIn_Activate () {
            let RNA  = this
            let User = RNA.User
            let Func = f => RNA.AfterCheckIn_Tasks(RNA)
            User.OnCheckIn_Assign(Func)
        },
    ...methods }
///*/// ----------------------------

///*/// ---------------------------- export ready

export default {

    name: 'App',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        this.AfterCheckIn_Activate() // primary loader
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
