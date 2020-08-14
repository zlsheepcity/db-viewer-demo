<template>
<v-container>

    <el-head-some
        caption="Profile"
        :subtitle="User.profile.name"
        />


<!-- ================================ ACCOUNT -->


    <v-row no-gutters class="pb-8">
    <v-col cols="12" md="8">

    <v-simple-table class="user-id-card">
    <template v-slot:default>
        <thead>
            <tr>
            <th colspan="2">
                <h2 class="overline primary--text">
                    Account
                </h2>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="caption">Name</div></td>
                <td class="d-flex align-center pl-0">

                    <v-text-field solo flat dense
                        v-model      ="User.profile.name"
                        @keyup.enter ="if (User.profile.name) editname=false; User.UpdateProfile(['name'])"
                        @keyup.esc   ="editname=false; User.LoadProfile()"
                        :outlined    ="editname"
                        :readonly    ="!editname"
                        class        ="body-2"
                        hide-details/>

                    <v-icon v-if="editname"
                        @click="editname=false; User.UpdateProfile(['name'])"
                        :disabled="!User.profile.name"
                        color="green"
                        >mdi-check</v-icon>
                    <v-icon v-if="editname"
                        @click="editname=false; User.LoadProfile()"
                        color="orange"
                        >mdi-close</v-icon>

                    <v-spacer/>

                    <v-icon
                        @click="editname=!editname"
                        >mdi-pencil</v-icon>
                </td>
            </tr>
            <tr>
                <td><div class="caption">Username</div></td>
                <td class="d-flex align-center pl-0">

                    <v-text-field solo flat dense readonly
                        v-model      ="User.profile.username"
                        class        ="body-2"
                        hide-details/>

                </td>
            </tr>
            <tr>
                <td><div class="caption">E-mail</div></td>
                <td class="d-flex align-center pl-0">

                    <v-text-field solo flat dense readonly
                        v-model      ="User.profile.email"
                        class        ="body-2"
                        hide-details/>

                </td>
            </tr>
            <tr>
                <td><div class="caption">Phone</div></td>
                <td class="d-flex align-center pl-0">

                    <v-text-field solo flat dense
                        v-model      ="User.profile.phone"
                        @keyup.enter ="if (User.profile.phone) editphone=false; User.UpdateProfile(['phone'])"
                        @keyup.esc   ="editphone=false; User.LoadProfile()"
                        :outlined    ="editphone"
                        :readonly    ="!editphone"
                        class        ="body-2"
                        hide-details/>

                    <v-icon v-if="editphone"
                        @click="editphone=false; User.UpdateProfile(['phone'])"
                        :disabled="!User.profile.phone"
                        color="green"
                        >mdi-check</v-icon>
                    <v-icon v-if="editphone"
                        @click="editphone=false; User.LoadProfile()"
                        color="orange"
                        >mdi-close</v-icon>

                    <v-spacer/>

                    <v-icon
                        @click="editphone=!editphone"
                        >mdi-pencil</v-icon>
                </td>
            </tr>
            <tr>
                <td><div class="caption">Since</div></td>
                <td>
                    <div class="caption">
                    {{ User.profile.registerDate ? Date(User.profile.registerDate.date) : '-' }}
                    </div>
                </td>
            </tr>
        </tbody>
    </template>
    </v-simple-table>

    </v-col>
    <v-col cols="12" md="4">

    <div class="primary darken-2 white--text fill-height">
        <h2 class="overline pa-4">Account Actions</h2>

        <div class="pb-4 pl-1">
            <v-btn text dark disabled
                @click=""
                color="white">
                <v-icon class="mr-2">mdi-email-outline</v-icon>
                Change e-mail
                </v-btn>
        </div>

        <div class="pb-4 pl-1">
            <v-btn text dark disabled
                @click=""
                color="white">
                <v-icon class="mr-2">mdi-account-key</v-icon>
                Change password
                </v-btn>
        </div>

        <template v-if="User.Dev()">
        <article class="devmessage px-5 py-4 body-2">
            <header class="overline">
                *issues FA56, FA57
            </header>
        </article>
        </template>

    </div>

    </v-col>
    </v-row>


<!-- ================================ COLLECTIONS-->


    <v-row no-gutters class="pb-8">
    <v-col cols="12" md="8">


    <v-simple-table class="user-id-card">
    <template v-slot:default>
        <thead>
            <tr>
            <th colspan="2">
                <h2 class="overline primary--text">
                    Collections
                </h2>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="d-flex align-center pl-0">
                    <v-btn text small color="secondary"
                        @click="Interface.Goto('/Profile/Bookmarks')">
                        <v-icon small class="mr-1">mdi-bookmark</v-icon>
                        Bookmarks
                        <span class="primary--text">
                            ({{User.ui.bookmarks.length}})
                        </span>
                        </v-btn>
                </td>
            </tr>
            <tr>
                <td class="d-flex align-center pl-0">
                    <v-btn text small color="secondary"
                        @click="Interface.Goto('/Profile/Filters')">
                        <v-icon small class="mr-1">mdi-magnify-plus</v-icon>
                        Filters
                        <span class="primary--text">
                            ({{User.ui.filters.length}})
                        </span>
                        </v-btn>
                </td>
            </tr>
        </tbody>
    </template>
    </v-simple-table>

    </v-col>
    <v-col cols="12" md="4">

    <div class="grey lighten-3 fill-height">
        <h2 class="overline pa-4">Collections Actions</h2>

        <div class="pb-4 pl-1">
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text
                        v-on="on"
                        color="red">
                        <v-icon class="mr-2">mdi-history</v-icon>
                        Reset Collections
                        </v-btn>
                </template>
                <v-list>
                <v-list-item @click="User.ClearUI">
                <v-list-item-title class="red--text">Delete all bookmarks, filters, e.t.c</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>

    </v-col>
    </v-row>


<!-- ================================ PERKS-->


    <v-row no-gutters class="pb-8">
    <v-col cols="12" md="8">

        <h2 class="overline primary--text pa-4">
            Perks
        </h2>

        <v-list-item dense
            @click="User.Perk('developer', !User.Dev())">
            <v-list-item-icon class="mr-2">
                <v-icon v-if="User.Dev()">mdi-checkbox-marked-outline</v-icon>
                <v-icon v-else >mdi-checkbox-blank-outline</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Developer
                    </v-list-item-title>
                    </v-list-item-content>
        </v-list-item>
        <article class="devmessage px-5 py-4 body-2">
           <v-row>
            <v-col cols="12" sm="8" class="pt-0 order-1">
                <div class="overline pb-2">developer</div>
                <div class="body-1">Девелоперы могут видеть скрытые сообщения и тестовый функционал.</div>
                </v-col>
            <v-col cols="12" sm="4" class="pt-0 order-0 order-sm-2">
                <figure>
                    <div class="pa-4">
                        <v-img
                            src="../assets/illustrations/devart-service.svg"
                            />
                        </div>
                    <figcaption
                        class="headline font-weight-black text-center"
                        >Wise Choice</figcaption>
                </figure>
                <div >

                </div>


            </v-col>
           </v-row>
        </article>

        <v-list-item dense
            @click="User.Perk('uihelpers', !User.Help())">
            <v-list-item-icon class="mr-2">
                <v-icon v-if="User.Help()">mdi-checkbox-marked-outline</v-icon>
                <v-icon v-else >mdi-checkbox-blank-outline</v-icon>
                </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    Interface Helper
                    </v-list-item-title>
                    </v-list-item-content>
        </v-list-item>
        <article class="devmessage px-5 py-4 body-2">
           <v-row>
            <v-col cols="12" sm="8" class="pt-0 order-1">
                <div class="overline pb-2">Interface Helper</div>
                <div class="body-1">Рядом со сложным или новым функционалом появится Интерфейсный Подсказчик.</div>
                </v-col>
            <v-col cols="12" sm="4" class="pt-0 order-0 order-sm-2">
                <figure>
                    <div class="py-4 px-12">
                        <v-img
                            src="../assets/illustrations/devart-helper.svg"
                            />
                        </div>
                    <figcaption
                        class="headline font-weight-black text-center"
                        >Let Us Help!</figcaption>
                </figure>
                <div >

                </div>


            </v-col>
           </v-row>
        </article>

    </v-col>
    </v-row>


<!-- ================================ -->


</v-container>
</template>
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

    // Interface

    const Interface = function () { return this.$store.state.Interface }
    computed = { Interface, ...computed }

// --------------------------------- Headsome


    import elHeadSome from '@/components/el-head-some.vue'
    components = { elHeadSome, ...components }


// --------------------------------- Add User

    const User = function () { return this.$store.state.user }
    computed = { User, ...computed }

// --------------------------------- Load Profile

    import Dataman from '@/app/Dataman.js'

    methods = {

        LoadProfile () {},

    ...methods }

// --------------------------------- UI Actions

    data = {
        editname:  false,
        editphone: false,
    ...data }

// --------------------------------- Ancient Actions

data.ui = {
    changeName: false,
    changePass: false,
    newPasswordField: '',
}
methods = {
    hideChangeName () { this.$data.ui.changeName = false },
    hideChangePass () { this.$data.ui.changePass = false },
    requestNameChanger () { this.hideChangeName() },
    requestPassChanger () { this.hideChangePass() },
...methods }




// --------------------------------- export ready

export default {

    name: 'PageProfile',
    components,
    props,
    methods,
    computed,
    data () { return data },

// --------------------------------- created

    created () {
        
    },

}

</script>
