// --------------------------------- Item Master

import Dataman     from '@/app/Dataman.js'
import Interface   from '@/app/Interface.js'

import itProduct   from '@/components/db-viewer/ui-item-product.js'
import itComponent from '@/components/db-viewer/ui-item-component.js'
import itCompany   from '@/components/db-viewer/ui-item-company.js'
import itContact   from '@/components/db-viewer/ui-item-contact.js'

const ItemMaster = {}

ItemMaster.getList = dna => {

    let { category } = dna || {}
    let { filter   } = dna || {}
    let Categories   = {}

    Categories.products = {
        category: 'products',
        Load: Dataman.DB.getProducts,
        List: rawdata => Dataman.PolymeraseList( itProduct, rawdata ),
    }

    Categories.companies = {
        category: 'companies',
        Load: Dataman.DB.getCompanies,
        List: rawdata => Dataman.PolymeraseList( itCompany, rawdata ),
    }

    Categories.components = {
        category: 'components',
        Load: Dataman.DB.getComponents,
        List: rawdata => Dataman.PolymeraseList( itComponent, rawdata ),
    }

    Categories.contacts = {
        category: 'contacts',
        Load: Dataman.DB.getContacts,
        List: rawdata => Dataman.PolymeraseList( itContact, rawdata ),
    }

    let duke = Categories[category]

    const ListLoaded = (dna) => {
        let {duke, resolve, responce, category} = dna
        let items = []
        let total = false

        // JSON-LD or JSON default?

        let LD_protocol = !!responce.data && !!responce.data['hydra:member']
        if (LD_protocol) {
            items = responce.data['hydra:member']
            total = responce.data['hydra:totalItems']
        } else {
            items = responce.data
        }

        // Update Frontend

        Interface[`total_${duke.category}`] = total || 0
        resolve( duke.List(items) )
    }

    let ReturnPromise = (resolve, reject) => {
        duke.Load(filter)
            .then(responce => ListLoaded({duke, resolve, responce, category}) )
            .catch(reject)
    }
    return new Promise(ReturnPromise)

}

ItemMaster.getListItem = dna => {

    let { category } = dna || {}
    let { id }       = dna || {}
    let Categories   = {}

    Categories.products = {
        Load: Dataman.DB.getProductDetails,
        List: rawdata => Dataman.Polymerase( itProduct, rawdata ),
    }

    Categories.companies = {
        Load: Dataman.DB.getCompanyDetails,
        List: rawdata => Dataman.Polymerase( itCompany, rawdata ),
    }

    Categories.components = {
        Load: Dataman.DB.getComponentDetails,
        List: rawdata => Dataman.Polymerase( itComponent, rawdata ),
    }

    Categories.contacts = {
        Load: Dataman.DB.getContactsDetails,
        List: rawdata => Dataman.Polymerase( itContact, rawdata ),
    }

    let duke = Categories[category]

    let loaded_json = (duke, resolve, responce) => {
        resolve( duke.List(responce.data) )
    }

    let loaded_jsonLD = (duke, resolve, responce) => {
        resolve( duke.List(responce.data) )
    }

    let ReturnPromise = (resolve, reject) => {
        duke.Load(id)
            .then(responce => loaded_json(duke, resolve, responce) )
            .catch(reject)
    }
    return new Promise(ReturnPromise)

}

// --------------------------------- export ready

export default ItemMaster
