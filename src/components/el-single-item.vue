<template>

    <div class="el-single-item">

        <template v-if="view=='table'">
            <div @click.stop="Interface.Goto(items[ox.id].href)"
                 class="caption">
                 {{items[ox.id] && items[ox.id].title || ''}}
                 
                 </div>
        </template>

    </div>

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

// --------------------------------- Define Item

    props = [ 'master',  ...props ]
    props = [ 'itemapid', 'itemid', 'category', ...props ]
    props = [ 'view',  ...props ]

    import ui2api from '@/models/ui2api.js'

    computed = {
        ox () { return {
            id: this.$props.itemid || ui2api.apid2id(this.$props.itemapid),
            category: this.$props.category || 'products',
        }},
    ...computed }

// --------------------------------- Load Item


    import ItemMaster   from '@/app/ItemMaster.js'

    data = {
        items:{},
        item: {},
        isLoading: false,
    ...data }

    methods = {

        LoadItem (dna) {
            let RNA = this
            let {id,category} = dna

            this.$data.isLoading = true
            ItemMaster.getListItem({id,category})
                .then(  this.LoadingComplete )
                .catch( this.LoadingFailed )
        },

        LoadingComplete (item) {
            this.$data.items[item.id] = item
            this.$data.item      = item
            this.$data.isLoading = false
        },

        LoadingFailed (dna) {
            this.$data.isLoading = false
        },

    ...methods }



// --------------------------------- export ready

export default {

    name: 'el-single-item',
    props,
    components,
    methods,
    computed,
    data () { return data },

// --------------------------------- created

    created () {
        let RNA = this

     // load items
        let ox  = this.ox
        RNA.LoadItem(ox)
    },

}

</script>
