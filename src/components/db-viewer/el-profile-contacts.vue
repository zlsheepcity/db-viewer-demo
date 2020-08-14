<template><section class="el-products-card">


<!-- ================================ TOOLBAR -->

    <v-divider/>

    <section>
        <div class="d-flex align-center py-1">

            <!-- Download -->

            <v-btn text color="secondary"
                @click="DownloadItem">
                <v-icon>mdi-file</v-icon>
                <span class="d-none d-sm-block pl-1">Download</span>
            </v-btn>

            <!-- bookmark -->

            <v-spacer/>

            <v-btn text color="blue" style="min-width:14rem"
                @click="User.BookmarkToggle(ox)">
                <v-spacer/>
                <span class="d-none d-sm-block">
                    {{
                        User.BookmarkIs(ox)
                        ? 'Remove Bookmark'
                        : 'Save Bookmark'
                    }}
                </span>
                <v-icon class="pl-1">
                    {{
                        User.BookmarkIs(ox)
                        ? 'mdi-bookmark'
                        : 'mdi-bookmark-outline'
                    }}
                </v-icon>
            </v-btn>

        </div>
    </section>

    <v-divider/>

<!-- ================================ HEADER -->

    <header class="pt-2">
       <div class="d-flex align-center px-4 py-4">

            <!-- title -->

            <div class="preview-title-text d-flex align-center">
                <span class="display-1">
                    {{ox.title || 'n/a'}}
                </span>
                <v-chip small color="transparent">
                    <el-marker view="icon" iconsize="small" :item="ox"/>
                    <span class="ml-1">{{ox.id}}</span>
                </v-chip>
            </div>

       </div>
    </header>


<!-- ================================ CARD -->

    <div class="d-flex px-3">

        <div>
            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Company Name
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.companyName || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Position
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.position || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>
        </div>


    </div>


    <header class="py-4 px-4">
        <div class="d-flex align-center">
            <span class="display-1">Contact Info</span>
        </div>
    </header>


    <div class="d-flex px-3">

        <div>
            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Email
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.email || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Private Phone
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.privatePhone || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>

            <v-list-item dense flat>
            <v-list-item-content>
            <v-list-item-subtitle class="caption">
                Work Phone
            </v-list-item-subtitle>
            <div class="body-2">
                {{ox.workPhone || 'n/a'}}
            </div>
            </v-list-item-content>
            </v-list-item>
        </div>


    </div>


<!-- ================================ -->

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


// models


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


// card story


///*/// ---------------------------- Item DNA


    props = [ 'item', ...props ]
    computed = {
        ox () { return this.$props.item },
    ...computed }


///*/// ---------------------------- download button


    methods = {

        DownloadItem () {
            let RNA = this
            RNA.$store.state.report.setItems([this.ox])
            RNA.Interface.Goto('/ReportMaker')
        },

    ...methods }



///*/// ---------------------------- export ready

export default {

    name: 'el-products-card',
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
