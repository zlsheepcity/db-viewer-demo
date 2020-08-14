/** db-filter storage
    2020.7.2 */

import opFilter from '@/components/db-filter/opFilter.js'

const FilterboxModel = function () {

    let RNA = this

    RNA.FilterCreate = category => {
        RNA[`filter_${category}`] = new opFilter({category})
        RNA[`filter_milk_${category}`] = false
        return RNA[`filter_${category}`]
    }

    RNA.Filter   = category => RNA[ `filter_${category}` ]
    RNA.FLI      = category => RNA.Filter(category)
    RNA.OPS      = category => RNA.FLI(category) && RNA.FLI(category).ops || []

    // Filter API

    RNA.TakenOPS = category => RNA.OPS(category).filter(op=>op.taken)
    RNA.Refresh  = category => {
        RNA.FLI(category).Update()
        RNA[`filter_milk_${category}`] = RNA.FLI(category).RAW_Milk()
    }
    RNA.Active   = category => RNA.FLI(category).active
    RNA.Activate =(category,command) => {
        let state = command
        if (state == 'toggle') state = !RNA.Active(category)
        RNA.FLI(category).active = state
    }
    RNA.Reset = category => {
        RNA.FLI(category).ResetValues()
        RNA.Refresh(category)
    }
    RNA.SetFLI = fli => {
        let {category} = fli || {category:'products'}
        RNA.FLI(category).FLI_TakeValues(fli)
        // refresh
        RNA[`filter_milk_${category}`] = RNA.FLI(category).RAW_Milk()
    }
    RNA.HasConditions = category => RNA.FLI(category).HasConditions()


    //////////////// *issue - predefined variables in vuex

    RNA.filter_products   = new opFilter({category:'products'})
    RNA.filter_components = new opFilter({category:'components'})
    RNA.filter_companies  = new opFilter({category:'companies'})
    RNA.filter_contacts   = new opFilter({category:'contacts'})
    RNA.filter_brands     = new opFilter({category:'brands'})


    RNA.Watcher   = category => {
        if (!RNA.Active(category)) return false
        return RNA[ `filter_milk_${category}` ]
    }
    RNA.Searcher = category => RNA.Filter(category).searchString

    RNA.filter_milk_products   = false
    RNA.filter_milk_components = false
    RNA.filter_milk_companies  = false
    RNA.filter_milk_contacts   = false
    RNA.filter_milk_brands     = false



///////////////////////////////////////////////////////// REMOVE

///*/// ---------------------------- config

    RNA.config = {}
    RNA.ConfigOPS    = cat => RNA.config[cat] && RNA.config[cat].ops || []
    RNA.ConfigLoaded = cat => RNA.config[cat] && !RNA.config[cat].loading

///*/// ---------------------------- current filters

    RNA.filter = {}
    RNA.FilterLoaded = cat => RNA.filter[cat] && !RNA.config[cat].loading

///*/// ----------------------------

}

export default new FilterboxModel()
