<template>
    <span>

        <template v-if="view=='icon'">
            <v-icon
                class="brand-color-for"
                :class="category"
                :small="small || icon_size==='small'"
                :large="icon_size==='large'"
                :x-large="icon_size==='x-large'"
                >{{icon[category]}}</v-icon>
        </template>

        <template v-if="view=='color'">
            <span
                class="brand-color-for"
                :class="category"
                ><slot/></span>
        </template>

        <template v-if="view=='idtag'">
            <span
                class="brand-color-for"
                :class="category"
                ><slot/></span>
        </template>

        <template v-if="view=='chip'">
            <v-chip
                class="caption brand-color-for"
                :class="category"
                ><slot/></v-chip>
        </template>

    </span>
</template>
<style>
    .brand-color-for {
      --color-products:   #EF746F; /* -- AB3E5B */
      --color-components: #FFBE40;
      --color-companies:  #B3CC57; /* ++ ECF081 */
      --color-contacts:   #4ECDC4;
    }
    .v-chip.caption.brand-color-for {
        background-color: transparent;
        border: 1px solid currentColor;
    }
    .brand-color-for.products   { color: var(--color-products);   }
    .brand-color-for.components { color: var(--color-components); }
    .brand-color-for.companies  { color: var(--color-companies);  }
    .brand-color-for.contacts   { color: var(--color-contacts);   }
    .v-chip.brand-color-for.products   { border-color: var(--color-products);   }
    .v-chip.brand-color-for.components { border-color: var(--color-components); }
    .v-chip.brand-color-for.companies  { border-color: var(--color-companies);  }
    .v-chip.brand-color-for.contacts   { border-color: var(--color-contacts);   }
    .v-icon.brand-color-for.products   { color: var(--color-products);   }
    .v-icon.brand-color-for.components { color: var(--color-components); }
    .v-icon.brand-color-for.companies  { color: var(--color-companies);  }
    .v-icon.brand-color-for.contacts   { color: var(--color-contacts);   }
</style>
<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

// --------------------------------- Get Data

    props    = [ 'item', 'view', 'small', 'iconsize', ...props ]
    computed = {
        category () { return this.$props.item && this.$props.item.category || 'products' },
        icon_size () { return this.$props.iconsize || false },
    ...computed }

// --------------------------------- Map Icons

    let icon = {
        products:   'mdi-cube-outline',
        components: 'mdi-cube',
        companies:  'mdi-factory',
        contacts:   'mdi-briefcase',
    }
    data = { icon, ...data }

// --------------------------------- export ready

export default {

    name: 'el-marker',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
