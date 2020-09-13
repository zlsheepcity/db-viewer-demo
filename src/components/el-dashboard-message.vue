<template>
<div class="el-dashboard-message">


    <v-expand-transition>
    <div v-if="Interface.dashboard_welcome_message">
    <div class="pb-3">
    <article class="devmessage pa-2 pa-md-3 body-2">

        <v-row class="pl-2">
            <v-col cols="12" class="pt-0 d-flex align-start">

                <div class="pt-1">
                <div class="overline">release VII-10</div>
                <div class="overline">welcome message</div>
                </div>

                <v-spacer/>

                <header class="d-flex align-start justify-end">
                    <v-icon disabled
                        style="opacity:0.32" class="pa-1"
                        >mdi-arrow-left</v-icon>
                    <v-icon disabled
                        style="opacity:0.32" class="pa-1"
                        >mdi-arrow-right</v-icon>
                    <v-avatar size="32"
                        @click="Interface.dashboard_welcome_message = false"
                        style="opacity:0.32" class="brown darken-1 ml-1">
                        <v-icon
                            @click
                            color="white"
                            class="pa-1"
                            >mdi-close</v-icon>
                    </v-avatar>
                </header>

            </v-col>
        </v-row>

        <v-row class="caption pl-2">
            <v-col cols="6" class="d-flex align-end">
                <v-img src="../assets/illustrations/devart-reading.svg"
                    class="fill-height">
                    <div class="text-right pr-12">
                        <div class="display-2 font-weight-bold">
                            Fresh Look!
                        </div>
                        <div class="pb-4">
                            This is a demo interface for database.<br> Public copy of real project.
                        </div>
                        <div>
                            <span @click="User.Perk('developer', !User.Dev())"
                            style="cursor:pointer;">
                            <v-icon small v-if="User.Dev()"
                            >mdi-checkbox-marked-outline</v-icon>
                            <v-icon small v-else
                            >mdi-checkbox-blank-outline</v-icon>
                            <span class="ml-1"
                                style="vertical-align: middle"
                                >Get «User Developer» perk</span>
                            </span>
                            <div>
                                to see hidden messages<br> and values
                            </div>
                            <div class="pt-1" v-if="User.Dev()">
                                <b>you are developer!</b>
                            </div>
                        </div>
                    </div>
                </v-img>
            </v-col>
            <v-col cols="2">
                <div><b>Database Categories</b></div>
                <ul class="pb-1">
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Products')"
                            >Products</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Components')"
                            >Components</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Companies')"
                            >Companies</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Contacts')"
                            >Contacts</span>
                        </li>
                </ul>
                <div><b>Pages</b></div>
                <ul class="pb-1">
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Dashboard')"
                            >Dashboard</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/ReportMaker')"
                            >Report Generator</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Profile/Bookmarks')"
                            >User Bookmarks</span>
                        </li>
                    <li>
                        <span class="as_link"
                            @click="Interface.Goto('/Profile/Filters')"
                            >User Filters</span>
                        </li>
                </ul>
            </v-col>
            <v-col cols="4" class="pr-8">
                <div><b>Short Description</b></div>
                <div class="pb-1">
                    Фронтенд подгружает данные из API и разделяет на «категории». Записи выводятся в <i>таблице</i>, в <i>окне предварительного просмотра</i> и в <i>карточке</i>.
                </div>
                <div class="pb-1">
                    <i>Конструктор фильтров</i> создаёт параметры для запросов к API. Параметры настраиваются отдельно для каждой категории.
                </div>
                <div class="pb-1">
                    В
                    <span class="as_link"
                        @click="Interface.Goto('/DevBlog')"
                        >блоге разаботчиков</span> описаны ключевые детали и ссылки.
                </div>
                <div class="overline pb-1">
                    zl, 2020.VII.10
                </div>
            </v-col>
        </v-row>

    </article>
    </div>
    </div>
    </v-expand-transition>



</div>
</template>
<style>
    .as_link { text-decoration: underline; cursor:pointer; }
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


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


// components




///*/// ---------------------------- export ready

export default {

    name: 'el-dashboard-message',
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
