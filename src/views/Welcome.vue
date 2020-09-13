<template>
<div class="root fullscreen-promo-image">

<!-- ========================================= HEADER -->

<v-card tile>
<v-container class="pa-0">
<v-row>
    <v-col cols="12" sm="3" class="pa-0">
    </v-col>
    <v-col cols="12" sm=6>
        <div class="d-flex justify-center align-center">

            <v-btn text color="primary"
                class="ma-1"
                @click="Interface.login.Show"
                >{{texts.loginButton}}</v-btn>

            <v-btn text color="blue white--text"
                class="ma-1"
                @click="Interface.register.Show"
                >{{texts.registrationButton}}</v-btn>

        </div>
    </v-col>
</v-row>
</v-container>
</v-card>

<!-- ========================================= MAY WELCOME -->

<section class="welcome-blue-top">
<v-container>

    <header>
        <h1><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span></h1>
        <h2>Aliquam tincidunt mauris eu risus</h2>
    </header>

    <div class="d-none d-md-flex justify-center">
        <div v-for="(item, key) in l.counters" :key="key"
               style="width: min-content;" class="mx-4 my-8">
                <v-list-item dense>
                <v-list-item-icon class="mt-4 mr-4">
                    <el-marker view="icon" iconsize="x-large" :item="item"/>
                </v-list-item-icon>
                <v-list-item-content class="white--text">
                    <div
                        v-text="item.value"
                        style="white-space:nowrap"
                        class="display-2 font-weight-bold mb-0"/>
                    <div class="title" v-text="item.label"/>
                </v-list-item-content>
                </v-list-item>
        </div>
    </div>

    <v-row class="d-md-none my-4">
        <v-col
            cols="12" sm="6"
            v-for="(item, key) in l.counters"
            :key="key">
                <v-list-item dense style="width:16em;max-width:100%;margin:0 auto;">
                <v-list-item-icon class="mt-4 mr-4">
                    <el-marker view="icon" iconsize="x-large" :item="item"/>
                </v-list-item-icon>
                <v-list-item-content class="white--text">
                    <div
                        v-text="item.value"
                        style="white-space:nowrap"
                        class="display-2 font-weight-bold mb-0"/>
                    <div class="title" v-text="item.label"/>
                </v-list-item-content>
                </v-list-item>
        </v-col>
    </v-row>

    <div class="body-1 text-left px-4 mx-auto"
        style="max-width: 60rem;">
        <h3 class="title pb-2">Vestibulum auctor dapibus neque</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    </div>

    <div class="d-flex justify-center pt-4">

        <v-btn large color="primary"
            class="ma-2" style="width:8rem"
            @click="Interface.login.Show"
            >{{texts.loginButton}}</v-btn>

        <v-btn large color="blue white--text"
            class="ma-2" style="width:8rem"
            @click="Interface.register.Show"
            >{{texts.registrationButton}}</v-btn>

    </div>

</v-container>
</section>

<section class="welcome-white-mid">
<v-card flat tile>
<v-container class="py-12">

    <div class="body-1 px-4 mx-auto"
        style="max-width: 60rem;">

        <h2 class="display-2 font-weight-bold text-center pb-4">
            Aliquam tincidunt mauris eu risus?
        </h2>

        <div>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.</p>
        </div>

    </div>

</v-container>
</v-card>
</section>

<!-- ========================================= UI SCREENS -->

<article class="d-none BONAPARTY">
<v-card flat tile color="pink lighten-4">
<v-container class="py-12">

    <h2 class="display-2 font-weight-bold text-center">
        {{texts.titleSecond}}
    </h2>
    <v-row class="mt-8">
        <v-col cols="12" sm="6" lg="4">
            <v-card tile flat outlined>
                <v-card-title>
                    {{texts.frameTitleOne}}
                </v-card-title>
                <v-card-subtitle>
                    {{texts.frameSubtitleOne}}
                </v-card-subtitle>
                <figure class="pa-4">
                    <img width="120" height="80" style="width:100%;height:auto"
                        src="../assets/illustrations/ui-screen--product-preview.png"
                        alt="">
                </figure>
            </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg="4">
            <v-card tile flat outlined>
                <v-card-title>
                    {{texts.frameTitleTwo}}
                </v-card-title>
                <v-card-subtitle>
                    {{texts.frameSubtitleTwo}}
                </v-card-subtitle>
                <figure class="pa-4">
                    <img width="120" height="80" style="width:100%;height:auto"
                        src="../assets/illustrations/ui-screen--filter.png"
                        alt="">
                </figure>
            </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg="4">
            <v-card tile flat outlined>
                <v-card-title>
                    {{texts.frameTitleThree}}
                </v-card-title>
                <v-card-subtitle>
                    {{texts.frameSubtitleThree}}
                </v-card-subtitle>
                <figure class="pa-4">
                    <img width="120" height="80" style="width:100%;height:auto"
                        src="../assets/illustrations/ui-screen--report-maker.png"
                        alt="">
                </figure>
            </v-card>
        </v-col>

    </v-row>

</v-container>
</v-card>
</article>

<!-- ========================================= FORM --

    <article id="ApplyForm">
        <v-card tile flat color="blue accent-1 py-10" style="min-height:100vh">
            <v-container>

                <h2 class="display-2">Apply Form</h2>
                <h3 class="display-1">note: we respect your privacy</h3>

                <div class="py-10" style="max-width: 38em">
                    <v-form>

                        <v-text-field outlined color="black"
                            label="Full Name"
                            ></v-text-field>

                        <v-text-field outlined color="black"
                            label="E-mail"
                            ></v-text-field>


                        <v-text-field outlined color="black"
                            label="Phone"
                            ></v-text-field>

                        <v-btn x-large color="primary"
                            >Submit Form</v-btn>

                    </v-form>
                </div>

            </v-container>
        </v-card>
    </article>

-->
<!-- ========================================= FOOTER -->

    <v-container>
        <div class="d-flex align-center white--text">
            <div class="caption">
                {{texts.copyright}}
            </div>
        </div>
    </v-container>

</div>
</template>

<style>

    .fullscreen-promo-image {
      --min-height:       100vh;
        min-height:       var(--min-height);

      --background-color: var(--brand-color);
        background-color: var(--background-color);
      --color:            var(--brand-color--text);
        color:            var(--color);

        background-image: url(../assets/promo-si.png);
        background-size:  cover;
        background-attachment: fixed;
        background-position: bottom center;
    }

    .root {
      --logo-color:          hsl(213, 85%, 55%);
      --brand-color:         hsl(212, 34%, 29%);
      --brand-color--text:   hsl(226, 27%, 90%);
      --action-color:        hsl(359, 59%, 43%);
      --action-color--text:  hsl(226, 27%, 90%);

      --back-color:         white;
      --back-color-accent:  snow;
      --back-color-descent: whitesmoke;

      --text-color:         black;
      --text-color-accent:  darkslategray;
      --text-color-descent: lightslategray;

      --link-color:         firebrick;
      --link-color-accent:  darkred;
      --link-color-descent: lightsteelblue;

      --shadow-color: var(--shadow-color--for-light-base);
      --light-shadow: var(--light-shadow--for-light-base);

      --shadow-color--for-light-base: hsla(  0,  0%,   0%, 0.3 );
      --light-shadow--for-light-base: hsla(  0,  0%,   0%, 0.05);
      --shadow-color--for-dark-base:  hsla(  0,  0%, 100%, 0.2 );
      --light-shadow--for-dark-base:  hsla(  0,  0%, 100%, 0.05);
    }

    /* welcome-may */

    .wingle-logo-img {
        display:block;
        height:4rem;
    }
    @media (min-width: 600px) {
        .wingle-logo-img {
            transform: scale(1.25);
            transform-origin: top left;
        }
    }

    .welcome-blue-top {
        padding: 2rem 0;
    }
    .welcome-blue-top header {
        text-transform: uppercase;
        text-align:     center;
    }
    .welcome-blue-top header h1 {
        font-weight:    bold;
        font-size:      2.5em;
        line-height:    1.25;
        letter-spacing: 2px;
    }
    .welcome-blue-top header h2 {
        font-weight:    bold;
        font-size:      1.5em;
        line-height:    1.25;
        letter-spacing: 1px;
        color: black;
        padding-top:    0.5rem;
    }

</style>

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

// --------------------------------- text labels


//////////////////////////////////////////////////////////
    let texts = {
        title: 'Innovation Product Monitoring Platform',
        subtitle: 'Stay updated with latest technologies and products developments',
        introText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
        titleSecond: 'Features',
        subtitleSecond: 'rich content, friendly UI',
        frameTitleOne: 'Detailed Database',
        frameSubtitleOne: 'Products, components, manufacturers and contacts',
        frameTitleTwo: 'Search Filter',
        frameSubtitleTwo: 'Configure feeds for monitoring changes',
        frameTitleThree: 'Customizable Reports',
        frameSubtitleThree: 'Download as PDF or Stylesheets',
        copyright: '© Vestibulum auctor dapibus neque',

        registrationButton: 'Register',
        loginButton:        'Login',

    }
//////////////////////////////////////////////////////////


    data = {
        texts,
    ...data }

// --------------------------------- labels



    data = {
        l: {

            counters: [
                {
                    category: 'products',
                    label:    'Products',
                    value:    '10986',
                },
                {
                    category: 'components',
                    label:    'Components',
                    value:    '1359',
                },
                {
                    category: 'companies',
                    label:    'Companies',
                    value:    '1732',
                },
                {
                    category: 'contacts',
                    label:    'Contacts',
                    value:    '989',
                },
            ],

        },
    ...data }


// --------------------------------- export ready

export default {

    name: 'WelcomePage',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
