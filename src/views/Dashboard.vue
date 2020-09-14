<template>
<v-container>

    <el-head-some caption="Dashboard"/>

    <el-dashboard-header/>
    <el-dashboard-message/>
    <el-dashboard-tabs/>

<!-- ================================ Dashboard Content -->

    <v-row class="mb-4">
    <v-col cols="9">

<!-- ================================ elChartLine -->


    <section >
        <v-list-item dense>
            <v-list-item-icon class="mr-2">
                <v-icon class="primary--text">mdi-chart-bar</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="primary--text d-flex align-center">
                <span>Stats</span>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text small
                      v-bind="attrs"
                      v-on="on">
                      {{chartlist[chartmodel || 0].label}}
                      <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list v-model="chartmodel">
                    <v-list-item dense
                      v-for="(item, index) in chartlist"
                      :key="index"
                      @click="ChartMe(item.chart); chartmodel=index">
                      <v-list-item-title>{{ item.label }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        <v-divider/>
        <div class="pa-4"
            :style="{'background-color':demoChartBackground}">
            <el-chart-line
                :chartData="demoChart.data"
                :options="demoChart.options"
                :width="500"
                :height="194"
                />
        </div>
    </section>


<!-- ================================ -->

    </v-col>
    <v-col cols="3">

<!-- ================================ Filters -->


    <section
        style="display:flex; flex-direction:column; justify-content: flex-start; height: 100%">

        <div class="flex-grow-0">
        <v-list-item dense
            @click="Interface.Goto('/Profile/Filters')">
            <v-list-item-icon class="mr-2">
                <v-icon class="primary--text">mdi-magnify-plus</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="primary--text d-flex align-center">
                Filters
                ({{ User.FiltersCount() || 0 }})
                <v-spacer></v-spacer>
                <v-icon small
                    color="blue-grey lighten-3"
                    class="mr-1"
                    >mdi-pencil</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        <v-divider/>
        </div>

        <div
            v-if="!User.FiltersCount()"
            @click="Interface.Goto('/Profile/Filters')"
            style="cursor:pointer"
            class="caption text-center py-2 px-4  blue-grey--text flex-grow-0">
            Manage Filters...
        </div>

        <div v-else class="flex-grow-0">
        <v-list
            v-model="chartFilters">

        <v-list-item dense
            v-for="(it,key) in User.FiltersShortlist()"
            :key="key"
            @click="GoUseFilter(it)">
            <v-list-item-content>
            <v-list-item-title>
                {{it.label}}
                </v-list-item-title>
            <v-list-item-subtitle>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <span>products</span>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon color="primary">mdi-open-in-app</v-icon>
                </v-list-item-icon>
            </v-list-item>

            <v-list-item dense
                @click="Interface.Goto('/Profile/Filters')">
                <v-list-item-content>
                <v-list-item-title>
                    <v-icon>mdi-dots-horizontal</v-icon>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>

        </v-list>
        </div>

        <v-spacer/>

       <div class="flex-grow-0" >

        <div class="overline ml-4 mt-4">templates</div>

        <v-list-item dense style="opacity:0.5"
            @click="">
            <v-list-item-content>
            <v-list-item-title>
                Products last Mounth
                </v-list-item-title>
            <v-list-item-subtitle>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <b>280</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-icon>
            <v-list-item-icon
                @click.stop="Interface.Goto('/Products')">
                <v-icon color="primary">mdi-open-in-app</v-icon>
                </v-list-item-icon>
            </v-list-item>

        <v-list-item dense style="opacity:0.5"
            @click="">
            <v-list-item-content>
            <v-list-item-title>
                Products last Year
                </v-list-item-title>
            <v-list-item-subtitle>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <b>8783</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-icon>
            <v-list-item-icon
                @click.stop="Interface.Goto('/Products')">
                <v-icon color="primary">mdi-open-in-app</v-icon>
                </v-list-item-icon>
            </v-list-item>

        <v-list-item dense style="opacity:0.5"
            @click="">
            <v-list-item-content>
            <v-list-item-title>
                Top Companies
                </v-list-item-title>
            <v-list-item-subtitle>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'companies'}"/>
                <b>10</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-icon>
            <v-list-item-icon
                @click.stop="Interface.Goto('/Companies')">
                <v-icon color="primary">mdi-open-in-app</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </div>
    </section>

<!-- ================================ -->

    </v-col>
    </v-row>

    <v-row>
    <v-col cols="6">

<!-- ================================ News -->

    <section>
        <v-list-item dense @click="goto('/News')">
            <v-list-item-icon class="mr-2">
                <v-icon class="primary--text"
                >mdi-newspaper</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="primary--text d-flex align-center">
                News
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <v-divider/>

        <template v-for="(news,key) in NewsList">
        <v-list-item dense @click="goto('/News')" >
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">{{news.date}}</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                {{news.title}}
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </template>

        <v-list-item dense @click="goto('/News')" >
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <div class="d-none BONAPARTY">

        <v-list-item dense @click="" >
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">Jun 10</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                INDOSE: vaporizer overview report
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense @click="">
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">Jun 8</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                E-CIGARETTE STANDARDS IN PRC
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense @click="">
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">Jun 8</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                New patent applicants/inventors January-June 2018
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense @click="">
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">Apr 1</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                <v-chip label x-small color="teal white--text overline">SPECIAL</v-chip>
                HEAT-NOT-BURN TOBACCO STICK VAPORIZERS TREND
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense @click="">
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                <div class="overline">Feb 2</div>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                Technical Product Analysis Object “Hacker II, Hack"
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense @click="">
            <v-list-item-icon class="mr-0 align-center" style="width:4rem">
                
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </div>

    </section>

<!-- ================================ -->

    </v-col>
    <v-col cols="3">

<!-- ================================ Reports -->

    <section>

        <v-list-item dense @click="goto('/ReportMaker')">
            <v-list-item-icon class="mr-2">
                <v-icon class="primary--text">mdi-file</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="primary--text d-flex align-center">
                Reports
                (0)
                <v-spacer></v-spacer>
                <v-icon small
                    color="blue-grey lighten-3"
                    >mdi-pencil</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <v-divider/>

        <div
            v-if="!User.ReportsCount()"
            class="caption text-center py-2 px-4">
            no saved reports
        </div>

        <div class="overline ml-4 mt-4">templates</div>


    <v-list class="TEMPLATE" style="opacity:0.5">
        <v-list-item dense class="" @click="">
            <v-list-item-icon class="mr-2">
                <v-icon>mdi-file-pdf</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                <span class="mr-2">Today, 5:30 PM</span>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <b>5</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        <v-list-item dense class="" @click="">
            <v-list-item-icon class="mr-2">
                <v-icon>mdi-file-pdf</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                <span class="mr-2">Jun 10, 11:11 AM</span>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <b>25</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        <v-list-item dense class="" @click="">
            <v-list-item-icon class="mr-2">
                <v-icon>mdi-file-pdf</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>
                <span class="mr-2">Jun 10, 11:08 AM</span>
                <el-marker
                    view="icon" iconsize="small"
                    :item="{category:'products'}"/>
                <b>26</b>
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        <v-list-item dense @click="" class="pl-12">
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
    </v-list>

    </section>

<!-- ================================ -->

    </v-col>
    <v-col cols="3">

<!-- ================================ Bookmarks -->

    <section>

        <v-list-item dense
            @click="Interface.Goto('/Profile/Bookmarks')">
            <v-list-item-icon class="mr-2">
                <v-icon class="primary--text"
                >mdi-bookmark</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title class="primary--text d-flex align-center">
                Bookmarks
                ({{ User.BookmarksCount() || 0 }})
                <v-spacer/>
                <v-icon small
                    color="blue-grey lighten-3"
                    >mdi-pencil</v-icon>
            </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        <v-divider/>

        <div
            v-if="!User.BookmarksCount()"
            @click="Interface.Goto('/Profile/Bookmarks')"
            style="cursor:pointer"
            class="caption text-center py-2 px-4 blue-grey--text">
            Manage Bookmarks...
        </div>

        <v-list v-else>

        <v-list-item dense class=""
            v-for="(item, key) in User.BookmarksShortlist()"
            :key="key"
            @click="Interface.Goto(item.href)">
            <v-list-item-icon class="mr-2">
                <el-marker view="icon" :item="item"/>
                </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-title>
                {{item.title}}
                </v-list-item-title>
            <v-list-item-subtitle>
                {{item.category}} / {{item.id}}
                </v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

        <v-list-item dense class="pl-12"
            @click="Interface.Goto('/Profile/Bookmarks')">
            <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-dots-horizontal</v-icon>
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </v-list>

        <div class="overline ml-4 mt-4">templates</div>

        <v-list class="TEMPLATE" style="opacity:0.5">
            <v-list-item dense class=""
                @click="">
                <v-list-item-icon class="mr-2">
                    <el-marker view="icon" :item="{category:'products'}"/>
                    </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>
                    Some Item
                    </v-list-item-title>
                <v-list-item-subtitle>
                    products/id
                    </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            <v-list-item dense class=""
                @click="">
                <v-list-item-icon class="mr-2">
                    <el-marker view="icon" :item="{category:'companies'}"/>
                    </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>
                    Some Item
                    </v-list-item-title>
                <v-list-item-subtitle>
                    companies/id
                    </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
        </v-list>

    </section>

<!-- ================================ -->

    </v-col>
    </v-row>

</v-container>
</template>
<style>
    .x1 {
        background-image: url(../assets/demo/chart-prod.svg);
        background-size: 100% auto;
        background-position: bottom;
        position: relative;
    }
    .x2 {
        background-image: url(../assets/demo/chart-comps.svg);
        background-size: 100% auto;
        background-position: bottom;
        position: relative;
    }
    .x3 {
        background-image: url(../assets/demo/chart-companies.svg);
        background-size: 100% auto;
        background-position: bottom;
        position: relative;
    }
    .x4 {
        background-image: url(../assets/demo/chart-contacts.svg);
        background-size: 100% auto;
        background-position: bottom;
        position: relative;
    }
    .x1,.x2,.x3,.x4 {
        cursor: pointer;
    }
    .x1 .font-weight-black,
    .x2 .font-weight-black,
    .x3 .font-weight-black,
    .x4 .font-weight-black {
        transition: transform 120ms ease-out;
        transform-origin: center center;
    }
    .x1:hover .font-weight-black,
    .x2:hover .font-weight-black,
    .x3:hover .font-weight-black,
    .x4:hover .font-weight-black {
        /*transform: scale(1.1);*/
    }
</style>
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


///*/// ---------------------------- Router
    import Router from '@/app/router'
    components = { Router, ...components }
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


// components


///*/// ---------------------------- Headsome
    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }
///*/// ----------------------------

///*/// ---------------------------- Dashboard Header
    import elDashboardHeader from '@/components/el-dashboard-header.vue'
    components = { elDashboardHeader, ...components }
///*/// ----------------------------

///*/// ---------------------------- Dashboard Message
    import elDashboardMessage from '@/components/el-dashboard-message.vue'
    components = { elDashboardMessage, ...components }
///*/// ----------------------------

///*/// ---------------------------- Dashboard Tabs
    import elDashboardTabs from '@/components/el-dashboard-tabs.vue'
    components = { elDashboardTabs, ...components }
///*/// ----------------------------



    methods = {
        goto (x) {
            let RNA = this
            RNA.$vuetify.goTo(0,0,0)  // scroll top
            RNA.Interface.Goto(x)
        },
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


// --------------------------------- News


    import NewsList from '@/webdata/demonews.js'
    data = {
        NewsList,
    ...data }


// --------------------------------- Chart Line

    /*
        *issue
        hardcoded chart data
    */

    import elChartLine from '@/components/el-dashboard-chart.vue'
    components = { elChartLine, ...components }

    let demo_chart_select_list = [
        {
            label: 'Data growth',
            chart: 'all',
        },
        {
            label: 'Latest Products',
            chart: 'products',
        },
        {
            label: 'Latest Components',
            chart: 'components',
        },
        {
            label: 'Latest Companies',
            chart: 'companies',
        },
        {
            label: 'Latest Contacts',
            chart: 'contacts',
        },
    ]

    data.chartlist = demo_chart_select_list
    data.chartmodel = null

    let chartDataProducts = {
        pointRadius: 5,
        pointBackgroundColor:'hsla(3, 62%, 63%, 0.8)',
        label: 'Products',
        backgroundColor: ['hsla(3, 62%, 63%, 0.2)'],
        borderColor:     'hsla(3, 62%, 63%, 0.8)',
        data: [
            9370, //jan
            9439, //feb
            9467, //mar
            9523, //apr
            9736, //may
            10986 //jun
        ],
    }

    let chartDataComponents = {
        pointRadius: 5,
        pointBackgroundColor:'hsla(39, 80%, 58%, 0.8)',
        label: 'Components',
        backgroundColor: ['hsla(39, 80%, 58%, 0.2)'],
        borderColor:     'hsla(39, 80%, 58%, 0.8)',
        data: [
            0, //jan
            0, //feb
            0, //mar
            0, //apr
            0, //may
            1359, //jun
        ],
    }

    let chartDataCompanies = {
        pointRadius: 5,
        pointBackgroundColor:'hsla(73, 44%, 53%, 0.8)',
        label: 'Companies',
        backgroundColor: ['hsla(73, 44%, 53%, 0.2)'],
        borderColor:     'hsla(73, 44%, 53%, 0.8)',
        data: [
            960, //jan
            960, //feb
            1066, //mar
            1549, //apr
            1676, //may
            1732, //jun
        ],
    }

    let chartDataContacts = {
        pointRadius: 5,
        pointBackgroundColor:'hsla(176, 46%, 51%,0.8)',
        label: 'Contacts',
        backgroundColor: ['hsla(176, 46%, 51%,0.2)'],
        borderColor:     'hsla(176, 46%, 51%,0.8)',
        data: [
            0, //jan
            0, //feb
            0, //mar
            0, //apr
            100, //may
            2531, //jun
        ],
    }

    let chartDataAbstract = {
        label: 'Abstract Example',
        backgroundColor: ['hsla(176, 46%, 51%,0.2)'],
        borderColor:     ['hsla(176, 46%, 51%,0.8)'],
        data: [
            133,
            72,
            121,
            78,
            114,
            130,
        ],
    }

    data = {
        chartFilters: null,
        demoChartActive: '',
        demoChartBackground: 'hsla(3, 62%, 63%, 0.1)',
        demoChart: {
            data: {
                labels:
                ['January 2020', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    //chartDataProducts,
                    chartDataComponents,
                    chartDataCompanies,
                    chartDataContacts,
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 0.5,
                scales: {
                    yAxes: [{ ticks: {beginAtZero: false} }]
                }
            },
        },
    ...data }

    methods = {
        ChartMe (chart) {
            let datasets = {
                products:[chartDataProducts],
                components:[chartDataComponents],
                companies:[chartDataCompanies],
                contacts:[chartDataContacts],
                all: [
                    //chartDataProducts,
                    chartDataComponents,
                    chartDataCompanies,
                    chartDataContacts,
                ],
                default: [
                    //chartDataProducts,
                    chartDataComponents,
                    chartDataCompanies,
                    chartDataContacts,
                ],
                abstract: [chartDataAbstract],
            }
            let colors = {
                products:'hsla(3, 62%, 63%, 0.1)',
                components:'hsla(39, 80%, 58%, 0.1)',
                companies:'hsla(73, 44%, 53%, 0.2)',
                contacts:'hsla(176, 46%, 51%,0.1)',
                all:'hsla(3, 62%, 63%, 0.1)',
                abstract:'hsla(176, 46%, 51%,0.1)',
            }
            let RNA = this

            if ( chart == RNA.$data.demoChartActive ) chart = 'default'

            RNA.$data.demoChartBackground = colors[chart]
            RNA.$data.demoChart.data = {
                labels: ['January 2020', 'February', 'March', 'April', 'May', 'June'],
                datasets: datasets[chart]
            }
            RNA.$data.demoChartActive = chart
        },
    ...methods }


// --------------------------------- Add Report

    const Report = function () { return this.$store.state.report }
    computed = { Report, ...computed }
    methods = {
        ReportMaker () { Router.push('/ReportMaker') },
    ...methods }



///*/// ---------------------------- export ready

export default {

    name: 'Template',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

// --------------------------------- mounted

    mounted () {
        
    },

// ---------------------------------

}

///*/// ---------------------------- END
</script>
