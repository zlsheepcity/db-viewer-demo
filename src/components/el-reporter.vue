<!-- // --------------------------------- Usage

    <el-reporter
        ref="Reporter"
        />

// --------------------------------- Reporter

    import elReporter from '@/components/el-reporter.vue'
    components = { elReporter, ...components }
    methods = { Reportage (o) {this.$refs.Reporter.Select(o)}, ...methods }

  -->
<template>
<section>
<v-snackbar :timeout="0" v-model="showbar">
    <div class="body-1">
        <b class="primary--text">{{counter}}</b> selected
    </div>
    <v-btn color="primary" @click="ReportProceed">Create Report</v-btn>
</v-snackbar>
</section>
</template>
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

// --------------------------------- message

    data = {
        msg:'',
    ...data }

// --------------------------------- Load Items


    const Report = function () { return this.$store.state.report }

    computed = {
        counter () {
            return this.$store.state.report.CountItems() || 0
        },
    ...computed }

    methods = {

        ReportProceed () {
            let RNA = this
            RNA.HideBar()
            RNA.Interface.Goto('/ReportMaker')
        },

        Select (items) {
            let RNA = this
            RNA.$store.state.report.setItems(items)
            RNA.PressConference()
        },

        ReportClear () {
            let RNA = this
            RNA.Select([])
        },

    ...methods }


// --------------------------------- ui


    data = {
        showbar: false,
    ...data }

    methods = {

        PressConference () {
            let RNA = this
            if (RNA.counter) RNA.ShowBar()
            else             RNA.HideBar()
        },

        ShowBar () {
            let RNA = this
            RNA.$data.showbar = true
        },
        HideBar () {
            let RNA = this
            RNA.$data.showbar = false
        },

    ...methods }



// --------------------------------- export ready

export default {

    name: 'el-reporter',
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
