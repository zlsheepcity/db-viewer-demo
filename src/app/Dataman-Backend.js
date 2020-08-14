import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const BackendModel_Axios = function (config) {

  let Backend = this;

    Backend.config = config || {
        apiHost: 'https://wims2.winglegroup.com',
        apiUrlLogin: 'https://wims2.winglegroup.com/login_check',
        apiUrlLeads: 'https://wims2.winglegroup.com/api/leads',
        apiUrlUser: 'https://wims2.winglegroup.com/api/users/profile',
        apiUrlProducts: 'https://wims2.winglegroup.com/api/products',
        apiUrlComponents: 'https://wims2.winglegroup.com/api/components',
        apiUrlCompanies: 'https://wims2.winglegroup.com/api/companies',
        apiUrlContacts: 'https://wims2.winglegroup.com/api/contacts',
        apiUrlReports: 'https://wims2.winglegroup.com/api/products/report',
        apiUrlProductTypes: 'https://wims2.winglegroup.com/api/producttypes',
        apiUrlProductStatuses: 'https://wims2.winglegroup.com/api/production_statuses',
        apiUrlProductBrands: 'https://wims2.winglegroup.com/api/brands',
        apiUrlProductFeatures: 'https://wims2.winglegroup.com/api/features',
        apiUrlSuffix: '.jsonld',
    };

  Backend.ReportTimeout = f=>false
  Backend.token = '';
  Backend.eatToken = f => {
    Backend.token = f
  };

    // Catch 401

    Backend.CatchError = r => false

  // POST ONCE
  // { url, data: { username, password } }

    Backend.postOnce = dna => {
        return axios({method: 'post', ...dna});
    };

  // POST

    Backend.post = dna => {
        let {params, ...rest} = dna
        let AX = {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + Backend.token,
            },
            params: params,
            ...rest,
        }

        let ReturnPromise = (resolve, reject) => {
            let ErrorCatcher = r => {
                Backend.CatchError(r)
                reject(r)
            }
            axios(AX)
            .then(resolve)
            .catch(ErrorCatcher)
        }

        return new Promise(ReturnPromise)
    }

  // PATCH

    Backend.patch = dna => {
        let {params, ...rest} = dna
        let AX = {
            method: 'patch',
            headers: {
                'Authorization': 'Bearer ' + Backend.token,
            },
            data: params,
            ...rest,
        }

        let ReturnPromise = (resolve, reject) => {
            let ErrorCatcher = r => {
                Backend.CatchError(r)
                reject(r)
            }
            axios(AX)
            .then(resolve)
            .catch(ErrorCatcher)
        }

        return new Promise(ReturnPromise)
    }

  // GET Product
  // { url, data: { id, company, company_id, types:[] } }

    Backend.get = dna => {
        let {params, ...rest} = dna
        if (!params) params = {}
        params.draft = false // *issue - drafts from api
        let AX = {
            method: 'get',
            contentType: 'application/json; charset=utf-8',
            headers: { 'Authorization': 'Bearer ' + Backend.token,},
            params: params,
            ...rest,
        }

        let ReturnPromise = (resolve, reject) => {
            let ErrorCatcher = r => {
                Backend.CatchError(r)
                reject(r)
            }
            axios(AX)
            .then(resolve)
            .catch(ErrorCatcher)
        }

        return new Promise(ReturnPromise)
    }

    // Download Report
    Backend.download = (dna) => {
        let AX = {
          method: 'post',
          contentType: 'application/json; charset=utf-8',
          responseType: 'arraybuffer',
          headers: {
            'Authorization': 'Bearer ' + Backend.token,
          },
          ...dna
        }

        let ReturnPromise = (resolve, reject) => {
            let ErrorCatcher = r => {
                Backend.CatchError(r)
                reject(r)
            }
            axios(AX)
            .then(resolve)
            .catch(ErrorCatcher)
        }

        return new Promise(ReturnPromise)
  }
};

let Backend = new BackendModel_Axios()

export default Backend
