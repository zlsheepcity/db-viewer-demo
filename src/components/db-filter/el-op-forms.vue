<!-- Filter UI Component - forms accordion
ok     2020.7.5 -->

<template><section class="el-op-forms">

    <v-expansion-panels tile accordion focusable
        v-model="opi_accordeon">
        <template
            v-for="(op, opkey) in OPS">
        <v-expand-transition>
        <v-expansion-panel
            v-if="op.taken"
            active-class="amber lighten-5">



        <v-expansion-panel-header hide-actions class="py-0 pl-4 pr-4">
        <div class="d-flex justify-start align-center flex-wrap flex-grow-1">

        <!-- label -->

        <div class="caption">{{op.label}}</div>


<!-- ================================ OP HEADER -->

        <template v-if="op.type===false"></template>

<!-- === HEAD LIST / SUGGESTION  || op.type=='suggestion'-->

        <template v-else-if="op.type=='list'">
        <template v-for="v in op.value.list">
            <v-chip small outlined class="ma-1"
                @click.stop="OPI_ListValueRemove(op,v)">
                <v-icon
                    size ="8"
                    color="grey lighten-1"
                    class="ml-n1 mr-1"
                >mdi-checkbox-blank-circle</v-icon>
                {{op.ValueLabel(v)}}
                </v-chip>
        </template>
        <v-chip small class="mx-1" @click>
            <v-icon>mdi-dots-horizontal</v-icon>
        </v-chip>
        </template>

<!-- === HEAD RANGE / DATE -->

        <template v-else-if="op.type=='range' || op.type=='date'">
        <div class="caption ml-1">
            from
            <b v-html="op.value.from || opi_label_unlimited"/>
        </div>
        <div class="caption ml-1">
            to
            <b v-html="op.value.to || opi_label_unlimited"/>
        </div>
        </template>

<!-- === HEAD SINGLE / DEFAULT -->

        <template v-else>
        <div class="caption font-weight-bold ml-2"
             v-html="op.value.single || opi_label_anyValues"/>
        </template>

<!-- ================================ -->

        <!-- remove from panel -->

        <v-spacer/>
        <div class="flex-grow-0"><v-icon
            tabindex="-1"
            color="grey lighten-1"
            @click.stop="OPI_OperatorRemove(op)"
            >mdi-delete</v-icon></div>

        <!--  -->

        </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
        <div class="d-flex justify-start align-center flex-wrap pt-4">

<!-- ================================ OP BODY -->


        <template v-if="op.type===false"></template>

<!-- === BODY LIST -->

        <template v-else-if="op.type=='list'">
        <template v-for="val in op.valuesList">
            <v-chip small
                @click.stop="OPI_ListValueToggle(op, val.id)"
                :style="{opacity:op.value.Inlist(val.id)?0.5:1}"
                color="transparent" class="ma-1">
                <v-icon
                    size="8"
                    color="grey lighten-2"
                    class="ml-n1 mr-1"
                    >mdi-checkbox-blank-circle</v-icon>
                {{val.name}}
                </v-chip>
        </template>
        </template>

<!-- === BODY RANGE -->

        <template v-else-if="op.type=='range'">
        <v-text-field outlined hide-details clearable
           @keyup.enter ="OPI_TextValue_KeyEnter(op)"
           @input       ="OPI_TextValue_Modifyed(op)"
           :autofocus="opi_accordeon===opkey"
           class="flex-grow-0 ma-2"
           label="From"
           v-model="op.value.from"/>
        <v-text-field outlined hide-details clearable
           @keyup.enter ="OPI_TextValue_KeyEnter(op)"
           @input       ="OPI_TextValue_Modifyed(op)"
           class="flex-grow-0 ma-2"
           label="To"
           v-model="op.value.to"/>
        </template>

<!-- === BODY DATE -->

        <template v-else-if="op.type=='date'">
        <div>
            <v-text-field dense outlined hide-details clearable
                label="From"
                :autofocus="opi_accordeon===opkey"
                @input="OPI_DateValue_Modifyed(op)"
                v-model="op.value.from"/>
            <v-date-picker no-title scrollable
                @input="OPI_DateValue_Modifyed(op)"
                v-model="op.value.from"/>
        </div>
        <div class="ml-3">
            <v-text-field dense outlined hide-details clearable
                label="To"
                @input="OPI_DateValue_Modifyed(op)"
                v-model="op.value.to"/>
            <v-date-picker no-title scrollable
                @input="OPI_DateValue_Modifyed(op)"
                v-model="op.value.to"/>
        </div>
        </template>

<!-- === BODY SUGGESTION -->

        <template v-else-if="op.type=='suggestion'">
        <div class="flex-grow-1">
            <v-container fluid class="pa-0">
            <v-combobox outlined hide-details clearable
                @keyup.enter ="OPI_TextValue_KeyEnter(op)"
                @input       ="OPI_TextValue_Modifyed(op)"
                @update:search-input="s=>{op.Suggest(op,s)}"
                v-model="op.value.single"
                :items= "op.valuesList.map(o=>o.name)"
                :search-input.sync="op.suggestring"
                :autofocus   ="opi_accordeon===opkey"
                hide-selected
                no-filter
                class="ma-0">
            </v-combobox>
            </v-container>
        </div>
        </template>

<!-- === BODY SINGLE / DEFAULT -->

        <template v-else>
        <v-text-field solo outlined hide-details clearable
            class="ma-0"
            @keyup.enter ="OPI_TextValue_KeyEnter(op)"
            @input       ="OPI_TextValue_Modifyed(op)"
            :autofocus   ="opi_accordeon===opkey"
            v-model      ="op.value.single"/>
        </template>

<!-- ================================ -->

        </div>
        </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expand-transition>
        </template>
    </v-expansion-panels>


</section></template>
<style>

    .el-op-forms .v-expansion-panel-content__wrap {
        /* design fix - similar paddings */
        padding-left:  12px;
        padding-right: 12px;
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


///*/// ---------------------------- Define Callback

    props = [ 'onapply', ...props ]
    methods = {
        Apply () { if (this.$props.onapply) this.$props.onapply() },
    ...methods }


///*/// ---------------------------- Create Actors

    props = [ 'ops', ...props ]
    computed = {
        OPS () { return this.$props.ops },
    ...computed }


///*/// ---------------------------- OPI

    let opi_label_class = 'blue-grey--text text--lighten-2'

    data = {
        opi_accordeon: null,
        opi_label_class,
        opi_label_anyValues: `<span class="${opi_label_class}">any</span>`,
        opi_label_unlimited: `<span class="${opi_label_class}">...</span>`,
    ...data }

    methods = {

        OPI_OperatorRemove (op) {
            let RNA = this
            op.TakenRemove()
            RNA.OPI_AccordeonFold()
            RNA.Apply()
        },

        // value controls

        OPI_ListValueRemove (op,v) { op.value.Unlist(v); this.Apply() },
        OPI_ListValueToggle (op,v) { op.value.Tglist(v); this.Apply() },

        OPI_TextValue_KeyEnter (op) { this.OPI_AccordeonFold() },
        OPI_TextValue_Modifyed (op) { this.Apply() },
        OPI_DateValue_Modifyed (op) { this.Apply() },

        // ui workers

        OPI_AccordeonFold () { this.$data.opi_accordeon = null  },

    ...methods }

///*/// ----------------------------


///*/// ---------------------------- export ready

export default {

    name: 'el-op-forms',
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
