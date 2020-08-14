<template>
<div class="white--text">

<!--  -->

    <v-list-item
        :class="{ 'v-list-item--active':act('/Dashboard') }"
        :active="act('/Dashboard')"
        @click="goto('/Dashboard')">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
    </v-list-item>

    <v-divider/><!-- ================================ -->

    <v-list-item
        :class="{ 'v-list-item--active':act('/Products') }"
        :active="act('/Products')"
        @click="goto('/Products')">
            <v-list-item-icon>
                <el-marker view="icon" :item="{category:'products'}"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Products
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="has('/Products')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-icon>
    </v-list-item>

    <v-list-item
        :class="{ 'v-list-item--active':act('/Components') }"
        :active="act('/Components')"
        @click="goto('/Components')">
            <v-list-item-icon>
                <el-marker view="icon" :item="{category:'components'}"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Components
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="has('/Components')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-icon>
    </v-list-item>

    <v-list-item
        :class="{ 'v-list-item--active':act('/Companies') }"
        :active="act('/Companies')"
        @click="goto('/Companies')">
            <v-list-item-icon>
                <el-marker view="icon" :item="{category:'companies'}"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Companies
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="has('/Companies')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-icon>
    </v-list-item>

    <v-list-item
        :class="{ 'v-list-item--active':act('/Contacts') }"
        :active="act('/Contacts')"
        @click="goto('/Contacts')">
            <v-list-item-icon>
                <el-marker view="icon" :item="{category:'contacts'}"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Contacts
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="has('/Contacts')">
                <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-icon>
    </v-list-item>

    <v-divider/><!-- ================================ -->

    <v-list-item
        :class="{ 'v-list-item--active':act('/News') }"
        :active="act('/News')"
        @click="goto('/News')">
                    <v-list-item-icon>
                        <v-icon>mdi-newspaper</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            News
                        </v-list-item-title>
                    </v-list-item-content>
    </v-list-item>

    <!-- ================================ -->

<!-- ================================ DEVELOPER -->
<template v-if="User.Dev()">

    <v-divider/>

    <v-list-item
        :class="{ 'v-list-item--active':act('/DevBlog') }"
        :active="act('/DevBlog')"
        @click="goto('/DevBlog')">
                    <v-list-item-icon>
                        <v-icon color="amber lighten-3">mdi-code-array</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="amber--text text--lighten-3">
                            Dev Blog
                        </v-list-item-title>
                    </v-list-item-content>
    </v-list-item>

</template>
<!-- ================================ -->



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

// --------------------------------- props

    props = [ 'exit', ...props ]

// --------------------------------- links

    methods = {
        goto (x) {
            let RNA = this
            RNA.$props.exit && this.$props.exit()
            RNA.Interface.Goto(x)
            RNA.$vuetify.goTo(0,0,0)  // scroll top
        },
        act (x) { return this.$route.path === x || this.has(x) },
        has (x) {
            let path = this.$route.path
            return path.indexOf(x) === 0 && path !== x
        },
        logout () {
            let RNA = this
            RNA.$store.state.user.Logout()
            RNA.goto('/')
            RNA.$vuetify.goTo(0,0,0)  // scroll top
        },
    ...methods }



// --------------------------------- export ready

export default {

    name: 'el-menu',
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
