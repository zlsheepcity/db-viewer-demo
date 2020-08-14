/*  Mr Dataman - frontend requests to backend */

import Backend from '@/app/Dataman-Backend.js'
import DemoData from '@/webdata/demodata.js'

let Dataman = {
    User:{},
    DB:{},
    Filter:{}
}

// --------------------------------- Helpers

Dataman = {

    Polymerase:  (constructor, src) => {
        return new constructor(src)
    },

    PolymeraseList:  (constructor, src) => {
        const list = []
        const transcription = dna => list.push(new constructor(dna))
        !!src.map && src.map(transcription)
        return list
    },

...Dataman }

// --------------------------------- Catch Error

Dataman.CatchError = r => false
Backend.CatchError = r => Dataman.CatchError(r)

// --------------------------------- Lead


Dataman = {

    SaveLead (data) {
        return new Promise( (resolve, reject) => {

            const url = Backend.config.apiUrlLeads

            Backend
                .post( {url, data} )
                .then(resolve)
                .catch(reject)
        })
    },

...Dataman }


// --------------------------------- User

const getToken = function (data) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlLogin

        const success = responce => {
            Backend.eatToken(responce.data.token)
            resolve(responce)
        }

        Backend
            .postOnce( {url, data} )
            .then(success)
            .catch(reject)
    })
}
const getLocalToken = function (data) {
    const  token = localStorage.getItem('xiva')
    return token
}
const setLocalToken = function (token) {
    if(token) localStorage.setItem('xiva', token)
    else      localStorage.removeItem("xiva")
}
const eatToken = function (token) { Backend.eatToken(token) }
const getUser = function (data) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlUser

        Backend
            .get( {url, data} )
            .then(resolve)
            .catch(reject)
    })
}
const updProfile = function (params) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlUser

        Backend
            .patch( {url, params} )
            .then(resolve)
            .catch(reject)
    })
}
const TimeoutAction = f => { Backend.ReportTimeout = f }

Dataman.User = {
    getToken,
    getLocalToken,
    setLocalToken,
    eatToken,
    getUser,
    updProfile,
    TimeoutAction,
...Dataman.User }


// --------------------------------- Products


const getProducts = function (params) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProducts + Backend.config.apiUrlSuffix

        Backend
            .get( {url, params} )
            .then(resolve)
            .catch(reject)
    })
}

const getProductDetails = function (id) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProducts + '/' + id

        Backend
            .get( {url} )
            .then(resolve)
            .catch(reject)
    })
}

Dataman.DB = {
    getProducts,
    getProductDetails,
...Dataman.DB }


// --------------------------------- Components


const getComponents = function (params) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlComponents + Backend.config.apiUrlSuffix
        Backend
            .get( {url, params} )
            .then(resolve)
            .catch(reject)
    })
}

const getComponentDetails = function (id) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlComponents + '/' + id
        Backend
            .get( {url} )
            .then(resolve)
            .catch(reject)
    })
}

Dataman.DB = {
    getComponents,
    getComponentDetails,
...Dataman.DB }



// --------------------------------- Companies


const getCompanies = function (params) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlCompanies + Backend.config.apiUrlSuffix

        Backend
            .get( {url, params} )
            .then(resolve)
            .catch(reject)
    })
}

const getCompanyDetails = function (id) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlCompanies + '/' + id
        Backend
            .get( {url} )
            .then(resolve)
            .catch(reject)
    })
}

Dataman.DB = {
    getCompanies,
    getCompanyDetails,
...Dataman.DB }

// --------------------------------- Contacts


const getContacts = function (params) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlContacts + Backend.config.apiUrlSuffix
        Backend
            .get( {url, params} )
            .then(resolve)
            .catch(reject)

        //resolve( {data:DemoData.DB.Contacts} )
    })
}

const getContactsDetails = function (id) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlContacts + '/' + id
        Backend
            .get( {url} )
            .then(resolve)
            .catch(reject)
    })
}

Dataman.DB = {
    getContacts,
    getContactsDetails,
...Dataman.DB }

// --------------------------------- Filter Library


const getProductTypes = function (dna) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProductTypes

        Backend
            .get( {url, ...dna} )
            .then(resolve)
            .catch(reject)
    })
}

const getProductStatuses = function (dna) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProductStatuses

        Backend
            .get( {url, ...dna} )
            .then(resolve)
            .catch(reject)
    })
}

const getProductBrands = function (dna) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProductBrands

        Backend
            .get( {url, ...dna} )
            .then(resolve)
            .catch(reject)
    })
}



const getProductFeatures = function (dna) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlProductFeatures

        Backend
            .get( {url, ...dna} )
            .then(resolve)
            .catch(reject)
    })
}

Dataman.Filter = {
    getProductTypes,
    getProductFeatures,
    getProductStatuses,
    getProductBrands,
...Dataman.Filter }


// --------------------------------- Report


const getReport = function (dna) {
    return new Promise( (resolve, reject) => {

        const url = Backend.config.apiUrlReports

        const success = response => {

            //let fileURL  = window.URL.createObjectURL(new Blob([response.data]));
            let fileURL  = window.URL.createObjectURL(new Blob([response.data]))

            // ISSUE cant't get Content-Disposition header
            //https://stackoverflow.com/questions/43912862/axios-expose-response-headers-content-disposition
            //let fileName = response.xhr.getResponseHeader('Content-Disposition').split("filename=")[1];

            let fileTypeMap = {
                'pdf':'.pdf',
                'presentation':'.pptx',
                'sheets-types':'.xls',
                'sheets-features':'.xls',
            }
            let fileType = fileTypeMap[dna.data.format] || ''
            let fileName = response.headers && response.headers['content-disposition']
                ? response.headers['content-disposition'].split("filename=")[1]
                : 'Report'+fileType

            let fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', fileName);
            document.body.appendChild(fileLink);

            fileLink.click();
            fileLink.remove();
            resolve(response)
        }

        Backend
            .download( {url, ...dna} )
            .then(success)
            .catch(reject)
    })
}

Dataman = {
    getReport,
...Dataman }


// --------------------------------- UNREFACTORED
// --------------------------------- UNREFACTORED
// --------------------------------- UNREFACTORED


// ---------------------------------

const TODO = {}


// temporary contacts

const getContactById = function (id) {
    return getById__cheat(id, Dataman.DB.getContactsDefault())
}
const getById__cheat = (id, source) => {
    /* used in demo content */
    if (!id) return {id:0,title:'Not found'}
    let filter = source.filter(el=>el.id==id)
    let random = source[Math.round(Math.random()*source.length)]
    return filter.length ? filter[0] : random
}
Dataman.DB = {
    getContactsDefault:   f  => DemoData.DB.Contacts,
    getContactById,
...Dataman.DB }



// set order message

Dataman = {
    Contact: {
        sendOrder: order => TODO,
    },
...Dataman }



export default Dataman
