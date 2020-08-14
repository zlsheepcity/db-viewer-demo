/** config db-filter
ok    2020.7.5 */

// opConfig Story


///*/// ---------------------------- Workers


    import Dataman from '@/app/Dataman.js'

    let CreateFOG = category => Object.assign({
        opc:[],              // configured fields
        resources:[],        // functions - download more fields
        }, {category} )      // filter id


///*/// ---------------------------- Loaders

    const SuggestCompany = (op, name) => {
        if (!name && name!=='') name = op.suggestring || ''
        let dna = {name}
        let eat = responce => op.SetValuesList(responce.data['hydra:member'])
        Dataman.DB.getCompanies(dna).then(eat)
    }
    const SuggestBrand = (op, name) => {
        if (!name && name!=='') name = op.suggestring || ''
        let dna = {params:{name}}
        let eat = responce => op.SetValuesList(responce.data)
        Dataman.Filter.getProductBrands(dna).then(eat)
        //Dataman.DB.getBrands(dna).then(eat) /// *issue TODO
    }
    const LoadProductTypes = () => {
        let abc = (a,b) => a.name > b.name ? 1 : -1 // sorting function
        let iPromise = (resolve, reject) => {
            let iResolvePromise = r => { resolve(r.data.sort(abc)) }
            Dataman.Filter.getProductTypes()
                .then(iResolvePromise)
                .catch(reject)
        }
        return new Promise(iPromise)
    }
    const LoadProductStatuses = () => {
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
                resolve(list)
            }
            Dataman.Filter.getProductFeatures()
                .then(iResolvePromise)
                .catch(reject)
        }
        return new Promise(iPromise)

    }

///*/// ---------------------------- products OPC

    let products = CreateFOG('products')
    products.resources = [LoadFeatures]
    products.opc = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
        {
            id:         'productName',
            label:      'Product Name',
            type:       'single',
            group:      'General',
        },
        {
            id:         'types',
            label:      'Product Type',
            group:      'General',
            type:       'list',
            GetValues:  LoadProductTypes,
        },
        {
            id:         'productionStatus.id',
            label:      'Production Status',
            group:      'Bussiness',
            type:       'list',
            GetValues:  LoadProductStatuses,
        },
        {
            id:         'company.name',
            label:      'Company',
            group:      'Bussiness',
            type:       'suggestion',
            Suggest:    SuggestCompany,
        },
        {
            id:         'brand.name',
            label:      'Brand',
            group:      'Bussiness',
            type:       'suggestion',
            Suggest:    SuggestBrand,
        },
        {
            id:         'appeared',
            label:      'Appeared',
            group:      'Date',
            type:       'date',
        },
        {
            id:         'created',
            label:      'Created',
            group:      'Date',
            type:       'date',
        },
    ]

///*/// ---------------------------- components OPC

    let components = CreateFOG('components')
    components.opc = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
        {
            id:         'name',
            label:      'Name',
            type:       'single',
            group:      'General',
        },
        {
            id:         'marking',
            label:      'Model on chip / Type',
            type:       'single',
            group:      'General',
        },
    ]

///*/// ---------------------------- companies OPC

    let companies = CreateFOG('companies')
    companies.opc = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
        {
            id:         'name',
            label:      'Name',
            type:       'single',
            group:      'General',
        },
        {
            id:         'location',
            label:      'Location',
            type:       'single',
            group:      'General',
        },
    ]

///*/// ---------------------------- contacts OPC

    let contacts = CreateFOG('contacts')
    contacts.opc = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
        {
            id:         'name',
            label:      'Name',
            type:       'single',
            group:      'Personal Data',
        },
        {
            id:         'surname',
            label:      'Surname',
            type:       'single',
            group:      'Personal Data',
        },
        {
            id:         'email',
            label:      'E-mail',
            type:       'single',
            group:      'Contacts',
        },
    ]

///*/// ---------------------------- brands OPC

    let brands = CreateFOG('brands')
    brands.opc = [
        {
            id:         'id',
            label:      'ID Number',
            type:       'single',
            group:      'General',
        },
    ]

///*/// ----------------------------




    // export filters
    let FOGS = [ products, components, companies, contacts, brands ]




///*/// ---------------------------- Convert

    let ConvertToQuery = FLI => {

        let query = {}    // initial template
        let features = [] // inner template
        let Feature = opid => {
            if (opid.toString().search('feature')<0) return false
            return opid.toString().substr(7)
        }
        let ExtractCondition = opid => {
            let op = FLI.raw[opid]
            let value = op.list || op.single || '' // list or single
            if ( op.from||op.to )
                value = `${op.from}...${op.to}`    // range

            if (false) {} // start chain

            // if feature

            else if (Feature(opid)) {
                let feature   = {}
                let featureID = Feature(opid)
                feature[featureID] = value
                features.push(feature)
            }

            // if date created/appeared

            else if (opid=='created') {
                if (op.from) query['createdAt[after]']  = op.from
                if (op.to)   query['createdAt[before]'] = op.to
            }
            else if (opid=='appeared') {
                if (op.from) query['appeared[after]']  = op.from
                if (op.to)   query['appeared[before]'] = op.to
            }

            // if other

            else query[opid] = value
        }

        // extract conditions

        Object.keys(FLI.raw).map(ExtractCondition)

        // insert features

        if (features.length) query.features = features

        // add searchRule (if not empty)

        if ( Object.keys(query).length ) query.searchRule = FLI.searchRule


        ///////////////////// *issue - B21 features[] hack
        if (query.features && query.features.length)
            query.features = JSON.stringify(query.features)
        /////////////////////

        return query
    }

///*/// ---------------------------- export ready

export default { FOGS, ConvertToQuery }
