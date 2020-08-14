/*

    Layer: UI + API

*/

import Dataman from '@/app/Dataman.js'

let ModelUI2API = function () {
let RNA = this

RNA.apid2id = s => s.match(/\d+/)[0] // "/api/companies/1194" => "1194"

RNA.issueB24 = name => {
    let value = { // 2020.06.04
        "under development":1,
        "trial production":2,
        "pre-orders/mass production":3,
        "concept":4,
        "canceled":5,
        "stopped":6,
    }
    return { name, id:value[name] }
}


// --------------------------------- Search Filter


RNA.GetFilterOptions = f => {

    let SuggestCompany = (op, name) => {
        if (!name && name!=='') name = op.suggestring || ''
        let dna = {name}
        let eat = responce => op.SetValuesList(responce.data['hydra:member'])
        Dataman.DB.getCompanies(dna).then(eat)
    }

    let LoadProductTypes = () => {
        let abc = (a,b) => a.name > b.name ? 1 : -1 // sorting function
        let iPromise = (resolve, reject) => {
            let iResolvePromise = r => { resolve(r.data.sort(abc)) }
            Dataman.Filter.getProductTypes()
                .then(iResolvePromise)
                .catch(reject)
        }
        return new Promise(iPromise)
    }

    let LoadProductStatuses = () => {
        let ordering = (a,b) => a.ordering > b.ordering ? 1 : -1
        let iPromise = (resolve, reject) => {
            let iResolvePromise = r => { resolve(r.data.sort(ordering)) }
            Dataman.Filter.getProductStatuses()
                .then(iResolvePromise)
                .catch(reject)
        }
        return new Promise(iPromise)
    }

    const LoadFeatures = () => {

        let features_polymerase = dna => {
            let define_type = ai => ai==='number' ? 'range' : ai
            let define_vals = ai => {
                let valuesList = []
                for ( let i in ai ) valuesList.push( {id:i, name:ai[i]} )
                return valuesList }
            return {
                id:            `feature${dna.id}`, // *issue - naming
                label:          dna.name,
                type:           define_type(dna.fieldType),
                valuesList:     define_vals(dna.values || []),
                group:         'Features',
                featureID:      dna.id, }}

        let iPromise = (resolve, reject) => {

            let iResolvePromise = r => {
                let list = []
                let Convert = dna => list.push(features_polymerase(dna))
                if (r.data && r.data.length) r.data.map(Convert)
                /*list = [
                    {
                        id:         'test',
                        label:      'test',
                        type:       'single',
                        group:      'General',
                    },
                ]*/
                resolve(list)
            }
            Dataman.Filter.getProductFeatures()
                .then(iResolvePromise)
                .catch(reject)
        }
        return new Promise(iPromise)

    }

    let filter_options = {}
    filter_options.products = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
        {
            id:         'company',
            label:      'Company',
            type:       'suggestion',
            group:      'General',
            Suggest:    SuggestCompany,
        },
        {
            id:         'types',
            label:      'Product Type',
            type:       'list',
            group:      'General',
            GetValues:  LoadProductTypes,
        },
        {
            id:         'status',
            label:      'Production Status',
            type:       'list',
            group:      'Description',
            GetValues:  LoadProductStatuses,
        },
        {
            id:         'brand',
            label:      'Brand',
            type:       'suggestion',
            group:      'Description',
            Suggest:    f=>false, //////////////
        },
        {
            id:         'appeared',
            label:      'Appeared',
            type:       'date',
            group:      'Date',
        },
        {
            id:         'created',
            label:      'Created',
            type:       'date',
            group:      'Date',
        },
        {
            Resource:   LoadFeatures,
        },
    ]

    return filter_options
}

///////////////////// deprecated 20.7.1
RNA.StartConstructFilterOptions = UIMaster => {
    let ops = []

    // --------------------------------- manual

    ops = [
        {
            id:   'id',
            name: 'ID Number',
            type: 'single',
            group:'General',
        },
     ...ops ]

    // --------------------------------- company

    const StartUpdateCompanies = f => {

        let Suggest = (op, name) => {
            if (!name && name!=='') name = op.suggestring || ''
            let dna = {name}
            let eat = o => UIMaster.Upchoise('company', o.data['hydra:member'])
            Dataman.DB.getCompanies(dna).then(eat)
        }

        UIMaster.EatOne({
            id:         'company',
            name:       'Company',
            type:       'suggestion',
            group:      'General',
            valuesList:  [],
            suggestring: '',
            Suggest,
        })
    }


    // --------------------------------- types tags

    const StartUpdateTypes = f => {

        UIMaster.EatOne({
            id:   'types',
            name: 'Product Type',
            type: 'list',
            valuesList: [],
            group:'General',
        })

        let abc = (a,b) => a.name > b.name ? 1 : -1 // sorting function
        let eat = o => UIMaster.Upchoise('types', o.data.sort(abc))
        Dataman.Filter.getProductTypes().then(eat)

    }

    // --------------------------------- status

    const StartUpdateStatus = f => {

        UIMaster.EatOne({
            id:         'status',
            name:       'Production Status',
            type:       'list',
            group:      'Description',
            valuesList:  [],
        })

        let ordering = (a,b) => a.ordering > b.ordering ? 1 : -1
        let eat = o => UIMaster.Upchoise('status', o.data.sort(ordering))
        Dataman.Filter.getProductStatuses().then(eat)
    }

    // --------------------------------- brands

    const StartUpdateBrands = f => {

        let Suggest = (op, name) => {
            if (!name && name!=='') name = op.suggestring || ''
            let dna = {params:{name}}
            let eat = o => UIMaster.Upchoise('brand', o.data)
            Dataman.Filter.getProductBrands(dna).then(eat)
        }

        UIMaster.EatOne({
            id:         'brand',
            name:       'Brand',
            type:       'suggestion',
            group:      'Description',
            valuesList:  [],
            suggestring: '',
            Suggest,
        })
    }

    // --------------------------------- date

    ops = [
        {
            id:   'appeared',
            name: 'Appeared',
            type: 'date',
            group:'Date',
        },
        {
            id:   'created',
            name: 'Created',
            type: 'date',
            group:'Date',
        },
     ...ops ]

    // --------------------------------- features

    const StartUpdateFeatures = f => {
        let features_polymerase = dna => {
            let p_type = ai => ai==='number' ? 'range' : ai
            let p_vmap = ai => {
                let valuesList = []
                for ( let i in ai ) valuesList.push( {id:i, name:ai[i]} )
                return valuesList
            }

            return {
                id:            'feature'+dna.id,
                name:           dna.name,
                type:           p_type(dna.fieldType),
                valuesList:     p_vmap(dna.values || []),
                group:         'Features',
                featureID:      dna.id,
            }
        }
        let oneByOne = dna => UIMaster.EatOne( features_polymerase(dna) )
        let eat = o => o.data.map(oneByOne)
        Dataman.Filter
            .getProductFeatures()
            .then(eat)
    }


    // --------------------------------- Constructor

    ops.map( op => UIMaster.EatOne(op) )
    StartUpdateCompanies()
    StartUpdateTypes()
    StartUpdateFeatures()
    StartUpdateStatus()
    StartUpdateBrands()

}
RNA.ConvertFilterToAPIQuery = raw => {

    let war = {}

    let filterback = {}
    let filterback_polymerase = opid => {
        let op = raw[opid]

        // define output value

        let vv = op.list || op.single || ''
        if ( op.from||op.to ) vv = `${op.from}...${op.to}`

        // if feature
        filterback.features = filterback.features || []
        if (opid.toString().search('feature')>-1) {
            let id = opid.toString().substr(7)
            //filterback.features[id] = vv
            let ff = {}
            ff[id] = vv
            filterback.features.push(ff)
        }

        // use as search by name or id
        else if (opid=='search') {
            //if ( !isNaN(vv) ) filterback.id = vv
            //else {
                filterback.name = vv
                filterback.productName = vv
            //}
            
        }

        // rename productionStatus
        else if (opid=='status') {
            filterback['productionStatus.id'] = vv
        }

        // rename company to company.name
        else if (opid=='company') {
            filterback['company.name'] = vv
        }

        // default use
        else filterback[opid] = vv

    }
    for ( let opid in raw ) filterback_polymerase( opid )

    // B21 features[] hack
    if (filterback.features && filterback.features.length)
        filterback.features = JSON.stringify(filterback.features)

    return filterback
}
RNA.CheckEmptyMilk = milk => {
    let milker = {...milk}
    let answer = false
    let NotEmpty = v =>
           !!v.single
        || !!v.from
        || !!v.to
        || !!v.list && v.list.length
        || false
    for ( let opid in milker ) answer = NotEmpty(milker[opid]) || answer
    return answer
}

// ---------------------------------

}

export default new ModelUI2API()
