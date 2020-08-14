<template>
    <v-dialog v-model="Interface.login.popup" max-width="420px">
        <v-card>
        <v-card-title>User Login</v-card-title>

            <v-card-text>

                <v-form ref="form" v-model="validation.status">

                    <v-text-field
                        v-model="fields.username"
                        required :rules="validation.requiredRules"
                        label="Username"/>

                    <v-text-field type="password"
                        v-model="fields.password"
                        required :rules="validation.requiredRules"
                        label="Password"/>

                </v-form>

            </v-card-text>

            <v-divider/>

            <v-card-actions class="mx-2">

                <v-btn text color="primary"
                    @click="LoginButton"
                    >Login</v-btn>

                <v-spacer/>

                <v-btn text color="secondary"
                    @click="CancelButton"
                    >Cancel</v-btn>

            </v-card-actions>

            <v-card-text v-if="reaction.message"
                class="body-1 error white--text pt-4">
                {{reaction.message}}
            </v-card-text>

        </v-card>
    </v-dialog>
</template>
<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    // Interface

    const Interface = function() { return this.$store.state.Interface }
    computed = { Interface, ...computed }

    // Router

    import Router from '@/app/router'
    components = { Router, ...components }

// --------------------------------- Form Fields

    data = {

        fields: {
            username: '',
            password: '',
        },

        validation: {
            status: false,
            requiredRules: [ v=>!!v || 'Required' ],
        },

    ...data }

// --------------------------------- UI Actions

    methods = {

        uiClearAndHide () {
            this.$refs.form.reset()
            this.Interface.login.Hide()
            this.$data.reaction.message = ''
        },

        // UI API

        LoginButton () {
            if ( !this.$refs.form.validate() ) return false
            this.SendAuthorization()
        },

        CancelButton () {
            this.uiClearAndHide()
        },

        FormMessage (msg) {
            this.$data.reaction.message = msg
        },

    ...methods }

    data = {

        reaction: {
            message: '',
        },

    ...data }

// --------------------------------- Form Actions

    methods = {

        SendAuthorization (demo) {
            let {username,password} = this.$data.fields
            let action = demo === 'demo'
                ? this.$store.state.user.DemoLogin
                : this.$store.state.user.EnterCredentials
            let Delegator = this

            const resolve = f => {
                Delegator.uiClearAndHide()
                //let redirect = this.$route.path
                //if (redirect === '/') redirect = '/Dashboard'
                let redirect = '/Dashboard'
                Router.push(redirect).catch(err => {})
            }

            const reject = f => {
                Delegator.FormMessage('Access denied')
            }

            action({username,password})
                .then(resolve)
                .catch(reject)
        },

    ...methods }

// --------------------------------- export ready

export default {

    name: 'el-dialog-login',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
