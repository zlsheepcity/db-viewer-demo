/* Interface API - popups, messages e.t.c. */

import Router from '@/app/router'
import ui2api from '@/models/ui2api.js'
//import opFilter from '@/models/opFilter.js'
//import opErator from '@/models/opErator.js'
import opFilter from '@/components/db-filter/opFilter.js'
import opErator from '@/components/db-filter/opErator.js'


const InterfaceAPI = function () {

    let RNA = this

    // system messages

    RNA.dashboard_welcome_message = true

    RNA.ui_statelabel = 'Initializing...'
    RNA.ui_statelog = []

    RNA.category = 'products' // default
    RNA.CategorySet = category => RNA.category = category +''
    RNA.CategoryIs = category => RNA.category === category

    // router

    RNA.Goto = x => { Router.push(x).catch(err => {}) }
    RNA.GotoFilter = filter => { Router.push('/Products').catch(err => {}) }
    RNA.NavigateBack = f => Router.back()
    RNA.IsCurrentPage = x => false

    // main menu

    RNA.mobileMenuShown = false
    RNA.ShowMobileMenu  = f => RNA.mobileMenuShown = true
    RNA.HideMobileMenu  = f => RNA.mobileMenuShown = false


    // user actions

    RNA.login = {
        popup: false,
        Show:  f => RNA.login.popup = true,
        Hide:  f => RNA.login.popup = false,
    }

    RNA.register = {
        popup: false,
        Show:  f => RNA.register.popup = true,
        Hide:  f => RNA.register.popup = false,
    }

    RNA.Clear = f => {
        RNA.login.Hide()
    }

    // data table

    RNA.total_products   = 0
    RNA.total_components = 0
    RNA.total_companies  = 0
    RNA.total_contacts   = 0
    RNA.ItemsTotal = category => RNA[`total_${category}`]


///////////////////////////////////////////// DEPRECATED ?
    RNA.filter_products   = false
    RNA.filter_components = false
    RNA.filter_companies  = false
    RNA.filter_contacts   = false
    RNA.CurrentFilter = category => RNA[`filter_${category}`]
    RNA.filter_in_use = {
        products: {milk:false},
    }

    RNA.useProductFilter = false
/////////////////////////////////////////////



///*/// ---------------------------- FILTERS
///*/// -- op filters 20.7.1

 // define initial models

    RNA.item_filters = {
        products: new opFilter({category:'products'}),
    }

 // viewers ans watchers

    RNA.view_filters = {}           // {category:filterhash}
    RNA.view_filters_counters = {}  // {category:boolean}

 // confugiration

    RNA.item_operators = {}
    RNA.item_operators_state = {}
    RNA.item_operators_Create = f => {
        let filter_options = ui2api.GetFilterOptions() // source
        let CreateCategory = category => {
            RNA.item_operators[category] = []          // content
            RNA.item_operators_state[category] = false // loading

            let CreateOp = dna => {
             // create
                let op = new opErator(dna)
             // request selectable values
                let FillValuesList =v=> op.SetValuesList(v)
                if (op.GetValues)
                    op.GetValues()
                    .then(FillValuesList)
             // add to list
                RNA.item_operators[category].push(op)
            }

            let CreateOpsFromResource = dna => {
                let eat = list => list.map(CreateOp)
                dna.Resource().then(eat)
            }

            let ConvertOp = dna => {
                if (dna.Resource) CreateOpsFromResource(dna)
                else CreateOp(dna)
            }

            filter_options[category].map(ConvertOp)
        }
        let categories = Object.keys(filter_options)
        categories.map(CreateCategory)
    }

 // api

    RNA.FilterChange_Message = filter => {
        let category = filter && filter.category || 'products'
        let milk = filter && filter.GetMilk
                 ? filter.GetMilk()
                 : false
        RNA.view_filters[category] = milk // update watchers
    }

    RNA.FilterImport = filter => {
        RNA.item_filters.products.TakeConditions(filter.raw)
        RNA.Goto('/DevFilter') ///////////// *issue TODO
    }

    // others

    RNA.Connect = f => RNA
    RNA.test = 1999
    RNA.nav = f => Router.path

}

export default new InterfaceAPI()
