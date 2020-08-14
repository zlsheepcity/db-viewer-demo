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

            <!-- purchase -->

            <block-purchase :item="ox">
                <v-icon>mdi-truck</v-icon>
                <span class="d-none d-sm-block pl-1">Order</span>
            </block-purchase>

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

    <div class="d-flex pa-1">

        <!--    -->

        <div>

            <!-- company -->

            <v-list-item dense flat>
            <v-list-item-content class="pt-0">
            <v-list-item-subtitle class="caption">
                Company
            </v-list-item-subtitle>
            <v-list-item-title>
                <div v-if="ox.company && ox.company.id"
                    style="cursor:pointer"
                    @click="Interface.Goto('/Companies/'+ox.company.id)">
                    {{ox.company.name}}
                    <v-icon small color="primary">mdi-open-in-app</v-icon>
                    </div>
                <div v-else>n/a</div>
            </v-list-item-title>
            </v-list-item-content>
            </v-list-item>

            <!-- brand -->

            <v-list-item dense flat>
            <v-list-item-content class="">
            <v-list-item-subtitle class="caption">
                Brand
            </v-list-item-subtitle>
            <v-list-item-title>
                <div v-if="ox.brand && ox.brand.id"
                    style="cursor:pointer"
                    @click="f=>'*issue brands'">
                    {{ox.brand.name}}
                    <v-icon small color="secondary">mdi-open-in-app</v-icon>
                    </div>
                <div v-else>n/a</div>
            </v-list-item-title>
            </v-list-item-content>
            </v-list-item>


        </div>

        <!-- types -->

        <template v-if="ox.types && ox.types.length">
            <div class="px-4">

                <div class="caption grey--text text--darken-1 px-2 pb-2"
                    style="white-space:nowrap">
                    Product Types
                </div>

                <div v-for="(type, key) in ox.types" :key="key">
                <v-chip small color="transparent" class="mr-1 mb-1">
                    <v-icon
                        size="8"
                        color="amber"
                        class="ml-n1 mr-1"
                        >mdi-checkbox-blank-circle</v-icon>
                    {{type.name}}
                </v-chip>
                </div>
            </div>
        </template>

        <!--    -->

        <div class="flex-grow-1">

            <!-- description -->

            <div class="caption grey--text text--darken-1 pl-4 pb-1">
                Description
            </div>
            <div class="caption px-4 wrapped-dbtext" style="max-width:38em">
                <div v-if="ox.description" v-html="ox.description"/>
                <div v-else>n/a</div>
            </div>

            <!-- PreviewContent -->

            <div v-if="ox.PreviewContent">
            <template
                v-if="value"
                v-for="(value, tag) in ox.PreviewContent()">
                <v-list-item dense>
                <v-list-item-content>
                <v-list-item-subtitle v-text="tag" class="caption"/>
                <v-list-item-title    v-text="value"/>
                </v-list-item-content>
                </v-list-item>
            </template>
            </div>

        </div>



        <!-- image -->

        <figure>
        <v-img
            v-if="ox.defaultImage"
            :aspect-ratio="0.74825"
            :src="'//'+ox.defaultImage.url"
            width="180"
            alt=""/>
        </figure>

        <!--  -->

    </div>

<!-- ================================ Specifications -->

    <section class="pa-4">
        <div class="display-1">Specifications</div>
        <div class="wrapped-dbtext body-2"
             v-html="ox.specification || 'n/a'"/>
    </section>

<!-- ================================ Features -->

    <section class="py-4 px-1">
        <div class="d-flex align-center px-3">
            <span class="display-1 mr-1">Features</span>
            <b class="body-1 grey--text">
                ({{ox.features && ox.features.length || 0}})</b>
            </div>

        <v-simple-table v-if="ox.features && ox.features.length"
            style="max-width:32em" class="mb-3">
            <template v-slot:default>
                <tbody>
                    <tr
                       v-for="(feature, key) in ox.features"
                       :key="key">
                        <td class="caption" style="width:12rem">
                            {{ feature.name }}
                        </td>
                        <td>{{ feature.value }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

    </section>

<!-- ================================ Components -->

    <section class="pa-4">
        <div class="d-flex align-center">
            <span class="display-1 mr-1">Components</span>
            <b class="body-1 grey--text">
                ({{ox.componentsInProduct && ox.componentsInProduct.length || 0}})</b>
            </div>
        <!-- *issue TODO -->
    </section>

<!-- ================================ Images -->

    <section class="pa-4">
        <div class="display-1">Images</div>

        <div v-if="ox.images && ox.images.length">

          <v-carousel
            v-if="ox.images && ox.images.length"
            class="pt-2"
            cycle
            height="500"
            show-arrows-on-hover>

            <v-carousel-item
              v-for="(img, i) in ox.images"
              :key="i">

              <v-sheet tile
                class="pa-1"
                color="blue-grey lighten-2"
                height="100%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >

                      <img
                          :src="img.url"
                          :alt="ox.title"
                          style="object-fit: contain; max-width: 100%; max-height: 360px;">

                </v-row>

              </v-sheet>

            </v-carousel-item>
          </v-carousel>

        </div>
        <div v-else>n/a</div>

    </section>

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


///*/// ---------------------------- purchase button


    import BlockPurchase from '@/components/el-purchase.vue'
    components = { BlockPurchase, ...components }



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
