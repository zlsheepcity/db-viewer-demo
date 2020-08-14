<template>
    <v-dialog v-model="Interface.register.popup" max-width="420px">
        <v-card>
        <v-card-title>Registration</v-card-title>

            <v-card-text>

                <v-form ref="form" v-model="validation.status">

                    <v-text-field
                        name="fullname"
                        v-model="fields.name"
                        required :rules="validation.requiredRules"
                        label="Full Name *"/>

                    <v-text-field
                        type="email"
                        name="email"
                        v-model="fields.email"
                        required :rules="validation.requiredRules"
                        label="Contact Email *"/>

                    <v-text-field
                        name="phone"
                        v-model="fields.phone"
                        required :rules="validation.requiredRules"
                        label="Contact Phone *"/>

                    <v-text-field
                        name="company"
                        v-model="fields.company"
                        label="Company"/>

                </v-form>

            </v-card-text>

            <v-divider/>

            <v-card-actions class="mx-2">

                <v-btn text color="primary"
                    @click="ApplyButton"
                    >Apply</v-btn>

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

// --------------------------------- Save Lead

    import Dataman from '@/app/Dataman.js'


    methods = {

        SaveLead () {
            let RNA = this
            Dataman.SaveLead( RNA.$data.fields )
                .then(RNA.uiClearAndHide)
                .catch(RNA.FormMessage)
        },

    ...methods }


// --------------------------------- Form Fields

    data = {

        fields: {
            name: '',
            email: '',
            phone: '',
            company: '',
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
            this.Interface.register.Hide()
            this.$data.reaction.message = ''
        },

        ApplyButton () {
            if ( !this.$refs.form.validate() ) return false
            this.SaveLead()
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

// --------------------------------- export ready

export default {

    name: 'el-dialog-register',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
