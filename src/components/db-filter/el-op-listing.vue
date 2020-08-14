<!-- Filter UI Component - all operators
ok     2020.7.3 -->

<template><section class="el-op-listing">

    <header class="d-flex align-center pa-3">

<!-- === Select -->

        <v-btn color="primary" class="mr-4"
            :disabled="!OPS_CountTakenOps()"
            @click="UI_SheetlistConfirm">
            Select
            <span
                v-if="OPS_CountTakenOps()"
                >({{OPS_CountTakenOps()}})</span>
            </v-btn>

<!-- === Select All -->

        <v-btn text color="secondary"
            @click="UI_SheetlistSelectAll"
            >Select All</v-btn>

<!-- === Reset All -->

        <v-btn text color="secondary"
            @click="UI_SheetlistResetAll"
            >Reset All</v-btn>

<!-- === close -->

        <v-spacer/>

        <v-btn text color="secondary" class="d-none d-sm-block"
            @click="UI_SheetlistClose"
            >close</v-btn>

<!-- === -->

    </header>

    <v-divider/>

<!-- *issue - hardcoded layout -->

    <section>
    <v-row no-gutters>
    <template
        v-for ="group in OPS_Grouped"
        v-if  ="group.groupname!='Features' && group.ops && group.ops.length">
        <v-col cols="12" sm="6" md="4" lg="3" x-lg="2">

            <div class="overline px-4 pt-3"
                >{{group.groupname}}</div>

<!-- === display op -->

            <template v-for="op in group.ops">
            <v-list-item dense
                @click="UI_SheetlistOpClick(op)">
            <v-list-item-action class="mr-3">
                <v-icon v-if="op.taken">mdi-checkbox-marked</v-icon>
                <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    {{op.label}}
                    <v-icon
                        class="ml-1"
                        color="blue-grey lighten-4"
                        @click.stop="UI_SheetlistOpQuick(op)"
                        >mdi-flash</v-icon>
                       </v-list-item-title>
           </v-list-item-content>
           </v-list-item>
            </template>

<!-- === -->

        </v-col>
    </template>
    <template
        v-for ="group in OPS_Grouped"
        v-if  ="group.groupname=='Features' && group.ops && group.ops.length">

        <v-col cols="12">
            <div class="overline px-4 pt-3"
                >{{group.groupname}}</div>
                </v-col>

<!-- === display op -->

        <template v-for="op in group.ops">
        <v-col cols="12" sm="6" md="4" lg="3" x-lg="2" class="py-0">
            <v-list-item dense
                @click="UI_SheetlistOpClick(op)">
            <v-list-item-action class="mr-3">
                <v-icon v-if="op.taken">mdi-checkbox-marked</v-icon>
                <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    {{op.label}}
                    <v-icon
                        class="ml-1"
                        color="blue-grey lighten-4"
                        @click.stop="UI_SheetlistOpQuick(op)"
                        >mdi-flash</v-icon>
                       </v-list-item-title>
           </v-list-item-content>
           </v-list-item>
        </v-col>
        </template>

<!-- === -->

    </template>
    </v-row>
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


    data = {
        msg:'',
    ...data }


///*/// ---------------------------- Exit
    props   = ['exit', ...props ]
    methods = { Exit () { this.$props.exit() }, ...methods }
///*/// ----------------------------

///*/// ---------------------------- OPS

    props    = ['ops', ...props ]
    computed = { OPS () { return this.$props.ops || [] }, ...computed }

    data = {
        OPS_Grouped: {},
    ...data }

    methods = {

        // Workers

        DefineActors () {
            let RNA = this
            let OPS = this.OPS
            return { RNA, OPS }
            // let { RNA, OPS } = this.DefineActors()
        },

        OPS_ListByGroup () {
            let { RNA, OPS } = this.DefineActors()
            let grouped = {}
            let grouped_polymerase = op => {
                let grname = op.group || 'Other' // *txt
                grouped[grname] = grouped[grname] || []
                grouped[grname].push(op)
            }
            for (let op in OPS) grouped_polymerase(OPS[op])

            let list = []
            let UpdateList = group => list.push({
                groupname:group,
                ops:grouped[group], })
            Object.keys(grouped).map(UpdateList)

            return list
        },

        OPS_CountTakenOps () {
            let { RNA, OPS } = this.DefineActors()
            let has = 0
            let check = op => { if (op.taken) has++ }
            if (OPS && OPS.length) OPS.map(check)
            return has
        },

    ...methods }


///*/// ---------------------------- UI

    methods = {

        UI_SheetlistConfirm   () { this.Exit() },
        UI_SheetlistSelectAll () { this.OPS.map(op => op.TakenAdd()) },
        UI_SheetlistResetAll  () { this.OPS.map(op => op.TakenRemove()) },

        UI_SheetlistClose () { this.Exit() },

        UI_SheetlistOpClick (op) {
            if (op.taken) op.TakenRemove()
            else          op.TakenAdd()
        },
        UI_SheetlistOpQuick (op) {
            op.TakenAdd()
            this.Exit()
        },

    ...methods }


///*/// ---------------------------- export ready

export default {

    name: 'el-op-listing',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        let RNA = this
        RNA.OPS_Grouped = RNA.OPS_ListByGroup()
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
