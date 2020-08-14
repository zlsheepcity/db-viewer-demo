<template>
<v-container>

    <el-head-some caption="Report-Maker"
        />

    <section>

        <header class="overline primary--text pa-4">
            Products ({{Report.getItemsCount()}})
        </header>

        <el-table category="reports"
            :items="Report.items"
            :showPreview="true"
            :ActionPage="false"
            />

    </section>

    <section>

        <header class="overline primary--text pa-4">
            Template
        </header>

        <v-item-group v-model="template" mandatory>
        <div>
            <v-row>
                <v-col cols="12" sm="4" lg="2"
                    class="d-flex flex-column"
                    v-for="tmpl in templates"
                    :key="tmpl.uid">
                <v-item v-slot:default="{ active, toggle }">
                    <figure class="pa-2 mt-auto" @click="toggle" style="cursor:pointer">
                        <img v-if="tmpl.uid===0"
                            src="../assets/ui/report-avatar-type1.png"
                            style="max-width:100%"
                            alt=""/>
                        <img v-if="tmpl.uid===1"
                            src="../assets/ui/report-avatar-type2.png"
                            style="max-width:100%"
                            alt=""/>
                        <img v-if="tmpl.uid===2"
                            src="../assets/ui/report-avatar-ppt.png"
                            style="max-width:100%"
                            alt=""/>
                        <div v-if="tmpl.uid===3 || tmpl.uid===4"
                            class="display-1 grey--text py-2">
                            {{tmpl.txt}}
                            </div>
                        <figcaption>
                            <v-icon
                                v-if="active"
                                color="primary"
                                >mdi-checkbox-blank-circle</v-icon>
                            <v-icon
                                v-if="!active"
                                color="primary"
                                >mdi-checkbox-blank-circle-outline</v-icon>
                            <span class="caption ml-1">{{tmpl.title}}</span>
                        </figcaption>
                    </figure>
                </v-item>
                </v-col>
            </v-row>
        </div>
        </v-item-group>


    </section>

    <v-expand-transition>
    <section v-if="template===0 || template===1">

        <header class="overline primary--text pa-4">
            Settings
        </header>

        <div class="px-4">
            <div class="caption">Image</div>
            <div style="max-width:24em;">
                <v-select solo outlined dense
                  :items="settings_types"
                  v-model="settings.type"/>
            </div>

            <v-checkbox dense class="mt-0"
              v-model="settings.logo"
              label="Use Wingle logo"/>
        </div>

    </section>
    </v-expand-transition>

    <section>
        <div class="pa-4">
            <v-btn large color="primary"
                @click="DownloadReport">
                Download
                </v-btn>
        </div>
    </section>

    <div style="display:none">
        <div>{{Report.post}}</div>
        <div>{{banner}}</div>
    </div>

    <div style="height:50vh"></div>

</v-container>
</template>
<style>
    /* sorting arrows - fixed position */
    .block-table thead th>span { display:block; }
</style>
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

// --------------------------------- Headsome

    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }

// --------------------------------- Table Items

    import elTable from '@/components/el-items-table.vue'
    components = { elTable, ...components }

    data = {
        items:[],
    ...data }



// --------------------------------- Add User

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }

// --------------------------------- Add Report

    const Report = function () { return this.$store.state.report }
    computed = { Report, ...computed }

// --------------------------------- Template Settigs

    data = {
        settings: {
            type: 1,
            logo: true,
        },
        settings_types: [
            {value:1,text:'Default Image'},
            {value:2,text:'USP'},
        ],
        template:  0,
        templates: [
            {
                title: 'PDF Template #1',
                value: { template: 1, format:'pdf' },
                uid: 0,
                img: '../assets/ui/report-avatar-type1.png',
                txt: '',
                ico: 'mdi-file-pdf',
            },
            {
                title: 'PDF Template #2',
                value: { template: 2, format:'pdf' },
                uid: 1,
                img: '../assets/ui/report-avatar-type2.png',
                txt: '',
                ico: 'mdi-file-pdf',
            },
            {
                title: 'PPTX Presentation',
                value: { format:'presentation' },
                uid: 2,
                img: '../assets/ui/report-avatar-ppt.png',
                txt: '',
                ico: 'mdi-file-powerpoint',
            },
            {
                title: 'XLS Spreadsheets',
                value: { format:'sheets-types' },
                uid: 3,
                img: '',
                txt: 'Types',
                ico: 'mdi-file-excel',
            },
            {
                title: 'XLS Spreadsheets',
                value: { format:'sheets-types' },
                uid: 4,
                img: '',
                txt: 'Features',
                ico: 'mdi-file-excel',
            },
        ],
    ...data }

// --------------------------------- Report Settigs

    data = {
        rs: {
            template: 1,
            type: 1,
            logo: true,
        },
        rsTemplateItems: [
            {value:1,text:'PDF #1'},
            {value:2,text:'PDF #2'},
            {value:3,text:'Presentation #1'},
        ],
        rsTypeItems: [
            {value:1,text:'Default Image'},
            {value:2,text:'USP'},
        ],
        banner:'',
    ...data }

// --------------------------------- Report Actions

    methods = {

        DownloadReport () {
            let RNA = this
            let template = RNA.$data.templates[RNA.$data.template]
            let settings = RNA.$data.settings
            RNA.$store.state.report.getFile({
                ...template.value,
                ...settings,
            }).then(responce=>{RNA.$data.banner=responce})
        },

        downloadButtonClick (format) {
            let RNA = this
            RNA.$store.state.report.getFile({
                format,
                ...RNA.$data.rs,
            }).then(responce=>{RNA.$data.banner=responce})
        },

        RemoveFormList (item) {
            let RNA = this
        },

    ...methods }

// ---------------------------------



// --------------------------------- export ready

export default {

    name: 'ReportMaker',
    props,
    components,
    methods,
    computed,
    data () { return data },

    created () {

    },

}

</script>
