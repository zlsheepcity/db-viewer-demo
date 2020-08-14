<template>
    <article class="block-purchase">
        <v-dialog v-model="ui.purchaseDialog" max-width="420px" v-if="item">

            <!-- button -->

            <template v-slot:activator="{ on }">
            <div v-on="on">

                <v-btn text v-if="$props.type!='icon'"
                    color="teal"
                    
                    @click="uiPurchaseButton()">
                    <slot/>
                    </v-btn>

                    <div v-if="$props.type=='icon'">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon v-on="on"
                                @click="uiPurchaseButton()"
                                color="teal"
                                >mdi-truck</v-icon>
                        </template>
                        <span>
                            Order Sample
                        </span>
                    </v-tooltip>
                    </div>

            </div>
            </template>

            <!-- popup -->

            <v-card>
            <v-card-title    v-text="item.title"/>
            <v-card-subtitle v-text="item.company && item.company.name"/>
            <v-card-text>
                <p class="body-1">We'll check available of the product after your order and contact you</p>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn text color="teal"
                    @click="uiPurchaseButton()">Order Sample</v-btn>
                <v-btn text color="secondary"
                    @click="uiCancelButton()">Cancel</v-btn>
            </v-card-actions>
            </v-card>

        </v-dialog>
    </article>
</template>

<script>

import Dataman from '@/app/Dataman.js'

/// ================================ UI methods

let methods = {
    uiHideDialog: function() {
        this.$data.ui.purchaseDialog=false
    },
    uiPurchaseButton: function() {
        Dataman.Contact.sendOrder({user:{}, item:this.$props.item})
        this.uiHideDialog()
    },
    uiCancelButton: function() {
        this.uiHideDialog()
    },
}

/// ================================ UI data

let data = {
    ui: {
        purchaseDialog: false,
    }
}

export default {
    name: 'block-purchase',
    props: {
        item: Object,
        type: String,
    },
    components: {},
    methods,
    data () { return data }
}
</script>
