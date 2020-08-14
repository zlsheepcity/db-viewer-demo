<template>
<div>

    <article v-if="FBX.filter_products && !!FBX.filter_products.ops">
        <header>
            <v-icon @click="expandFLI = !expandFLI">mdi-menu-down</v-icon>
            filter_products
            (active:{{FBX.Active('products')}})
            milk: {{FBX.filter_milk_products}}
        </header>
        <v-expand-transition>
        <section v-if="expandFLI">
            <span>
                label:{{FBX.filter_products.label}},
                loaded:{{FBX.filter_products.loaded}},
                active:{{FBX.filter_products.active}},
                searchString:{{FBX.filter_products.searchString}},
                searchRule:{{FBX.filter_products.searchRule}},
                lastResult:{{FBX.filter_products.lastResult}},
            </span>
            <div>MILK:{{FBX.filter_products.raw_milk}}</div>
        </section>
        </v-expand-transition>
        <header>
            <v-icon @click="expandOPS = !expandOPS">mdi-menu-down</v-icon>
            OPS - {{FBX.filter_products.ops.length}}
        </header>
        <v-expand-transition>
        <section v-if="expandOPS">
            <div v-for="op in FBX.filter_products.ops" class="pl-2">
                <b>{{op.label}}</b>{{op}}
            </div>
        </section>
        </v-expand-transition>
    </article>

    <v-divider></v-divider>

    <article v-if="FBX.filter_companies && !!FBX.filter_companies.ops">
        <header>
            <v-icon @click="expandOPC = !expandOPC">mdi-menu-down</v-icon>
            OPS - {{FBX.filter_companies.ops.length}} -
            <span>
                loaded:{{FBX.filter_companies.loaded}},
                active:{{FBX.filter_companies.active}},
                searchRule:{{FBX.filter_companies.searchRule}},
                lastResult:{{FBX.filter_companies.lastResult}},
                label:{{FBX.filter_companies.label}},
            </span>
        </header>
        <v-expand-transition>
        <section v-if="expandOPC">
            <div v-for="op in FBX.filter_companies.ops" class="pl-2">
                <b>{{op.label}}</b>{{op}}
            </div>
        </section>
        </v-expand-transition>
    </article>


</div>
</template>
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


///*/// ---------------------------- Interface
    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }
///*/// ---------------------------- Filterbox
    const Filterbox = function () { return this.$store.state.Filterbox }
    computed = { Filterbox, ...computed }
    computed = {
        category () { return 'products' },
        FBX () { return this.$store.state.Filterbox },
        OPC () { return [] },
        OPF () { return this.FBX.Filter(this.category) },
        OPS () { return this.FBX.OPS(this.category) },
    ...computed }
///*/// ---------------------------- User
    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }
///*/// ----------------------------

    data = {
        expandOPS:false,
        expandOPC:false,
        expandFBX:false,
        expandFLI:false,
    ...data }


///*/// ---------------------------- export ready

export default {

    name: 'op-devstate',
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
