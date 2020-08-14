<template>
<v-container class="blog-articles body-1">

    <el-head-some caption="Developers Blog"
        />

    <v-divider/>

    <article>
        <h1 class="display-1">Environment</h1>
        <p>
            Framework: vue-cli<br>
            <a href="https://cli.vuejs.org/">https://cli.vuejs.org/</a>
        </p>
        <p>
            UI Components: vuetify<br>
            <a href="https://vuetifyjs.com/">https://vuetifyjs.com/</a>
        </p>
        <p>
            Git Repo (frontend release, 2020.7.10)<br>
            <a href="https://github.com/zlsheepcity/winglebase">https://github.com/zlsheepcity/winglebase</a><br>
            Folder: framework<br>
        </p>


        <h2 class="title pt-4">Структура кода</h2>
        <p>
            Ключевое слово <b>*issue</b> в комментариях в коде. Попадается на месте временного или недоделанного функционала. Иногда комментарий дополняется пояснениями по сути дела.
        </p>
    </article>

    <article>
        <h1 class="display-1">API Requests</h1>
        <p>
            <b>Dataman</b> — контроллер api-запросов.<br>
            <b>Dataman-Backend</b> — слой с настройками к конкретному api. Post/get команды в этом файле.
        </p>
        <ul>
            <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/app/Dataman.js">/src/app/Dataman.js</a></li>
            <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/app/Dataman-Backend.js">/src/app/Dataman-Backend.js</a></li>
        </ul>
    </article>

    <article>
        <h1 class="display-1">Просмотр записей</h1>
        <p>
            <a href="https://github.com/zlsheepcity/winglebase/tree/master/framework/src/components/db-viewer">/src/components/db-viewer</a>
        </p>
        <p>
            У каждой категории собственная модель данных и вёрстка. Массив записей показывается в таблице, с возможностью посмотреть предварительную карточку отдельной записи или полный профайл.
        </p>
        <p>
             У каждой категории собственная модель данных. Вёрстка отображения чаще всего выполнена блоками v-if=category.../v-else...
        </p>
        <h2 class="title pt-4">Таблица</h2>
        <ul>
            <li>
                Компонент для отображения таблицы: <a href="https://vuetifyjs.com/en/components/data-tables/">v-data-table</a>
            </li>
            <li>
                <a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-items-table.vue#L415">Заголовки таблиц</a>
            </li>
        </ul>
        <h2 class="title pt-4">Вёрстка превью:</h2>
        <ul>
            <li>
                <a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-items-preview.vue#L16">Вёрстка Preview Card</a>
            </li>
        </ul>
        <h2 class="title pt-4">Вёрстка профайлов:</h2>
        <ul>
           <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-profile-products.vue">el-profile-products.vue</a></li>
           <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-profile-components.vue">el-profile-components.vue</a></li>
           <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-profile-companies.vue">el-profile-companies.vue</a></li>
           <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-viewer/el-profile-contacts.vue">el-profile-contacts.vue</a></li>
        </ul>
    </article>

    <article>
        <h1 class="display-1">
            Конструктор фильтров<br>
        </h1>
        <p>
            <a href="https://github.com/zlsheepcity/winglebase/tree/master/framework/src/components/db-filter">/src/components/db-filter</a> — компоненты<br>
            <a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-filter/_filter_model.md">_filter_model.md</a> — краткий перечень свойств модели.
        </p>
        <p>
            <b>OpConfig</b> с настройками фильтров. Здесь же хранятся функции для suggestion.<br>
        </p>
        <ul>
            <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-filter/opConfig.js#L89">Конфигурация опций</a></li>
            <li><a href="https://github.com/zlsheepcity/winglebase/blob/master/framework/src/components/db-filter/opConfig.js#L247">Конвертор фильтра в request params</a></li>
        </ul>
    </article>

</v-container>
</template>
<style>
    .blog-articles article {
        padding: 1rem;
        max-width: 42em;
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


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------


///*/// ---------------------------- Headsome
    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }
///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'DevBlog',
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
