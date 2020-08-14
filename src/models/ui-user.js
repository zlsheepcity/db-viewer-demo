import VueJwtDecode from 'vue-jwt-decode'

const UserModel = function() {
    let RNA = this

// --------------------------------- Init

    RNA.id = 0
    RNA.username ='falcone-9'
    RNA.online   = false
    RNA.logged   = false
    RNA.profile  = {}

    //  init ui

    let protein_ui = {
        bookmarks: [],
        filters:   [],
        reports:   [],
        perks:     [],
    }
    RNA.ui = Object.assign({}, protein_ui)

    // connections

    RNA.OnCheckIn  = f=>false // will come from outside
    RNA.OnCheckOut = f=>false // will come from outside
    RNA.OnCheckIn_Assign  = func => { RNA.OnCheckIn  = func }
    RNA.OnCheckOut_Assign = func => { RNA.OnCheckOut = func }

// --------------------------------- Workers

const responce2tokenkey = responce => {
    let token = responce.data && responce.data.token
    return token2tokenkey(token)
}
const token2tokenkey = token => {
    let tokin = VueJwtDecode.decode(token)
    let id = tokin.id
    let username = tokin.username
    return { token, id, username }
}
const responce2profile = responce => responce.data

// --------------------------------- Interface

    RNA.EnterCredentials = credentials  => {
        const iPromise = (resolve, reject) => {

            let resolve_responce = responce => {
                let { token, id, username } = responce2tokenkey(responce)
                RNA.CheckIn({ token, id, username })
                resolve(id)
            }

         // Request data from server
            RNA.DM.getToken(credentials)
                .then(resolve_responce)
                .catch(reject)
        }

        return new Promise(iPromise)
    }
    RNA.EnterToken = token => {
        const iPromise = (resolve, reject) => {
            let tokenkey =  token2tokenkey(token)
            if(!tokenkey)   reject()
            RNA.DM.eatToken(token)

            let SuccessCheck = responce => {
                RNA.CheckIn(tokenkey)
                resolve(tokenkey.id)
            }
            let NegativeCheck = responce => {
                RNA.CheckOut()
                reject()
            }

         // Check Token
            RNA.DM.getUser()
                .then(SuccessCheck)
                .catch(NegativeCheck)
        }

        return new Promise(iPromise)
    }
    RNA.CheckReservation = f => {
        let token = RNA.DM.getLocalToken()
        if (token)  RNA.EnterToken(token)
    }
    RNA.CheckIn = tokenkey => {
        let { token, id, username } = tokenkey
        // global
        RNA.DM.setLocalToken(token)
        // user
        RNA.id       = id
        RNA.username = username
        RNA.logged   = true
        RNA.LoadProfile(id)
        // others
        RNA.OnCheckIn()
    }
    RNA.CheckOut = f => {
        // global
        RNA.DM.setLocalToken(false)
        // user
        RNA.id       = 0
        RNA.username = 'Username'
        RNA.logged   = false
        RNA.profile  = {}
        // others
        RNA.OnCheckOut()
    }
/////////////////////////// deprecated
    RNA.UIPorter = (q, userkey) => {
        if ( q==='CheckIn') {
            RNA.id       = userkey.id
            RNA.username = userkey.username
            RNA.logged   = true
        }
        if ( q==='CheckOut') {
            RNA.id       = 0
            RNA.username = 'Username'
            RNA.logged   = false
            RNA.profile  = {}
        }
    }
///////////////////////////////
    RNA.LoadProfile = f => {
        const iPromise = (resolve, reject) => {

            let resolve_responce = responce => {
                let profile = responce2profile(responce)
                RNA.profile = profile
                RNA.ReadUI()
                resolve(profile)
            }

         // Request data from server
            RNA.DM.getUser()
                .then(resolve_responce)
                .catch(reject)
        }

        return new Promise(iPromise)
    }
    RNA.UpdateProfile = fields => {

        let params = {                  // default
            name:    RNA.profile.name,
            phone:   RNA.profile.phone,
            company: RNA.profile.company,
            //ui:      RNA.profile.ui,
        }

        if (fields && fields.length) {  // custom fields
            params = {}                 // reset default
            let in_use = o => { params[o] = RNA.profile[o] }
            fields.map(in_use)
        }

        const iPromise = (resolve, reject) => {
            RNA.DM.updProfile(params)  // server post
                .then(resolve)
                .catch(reject)
        }

        return new Promise(iPromise)
    }

// --------------------------------- UI

    RNA.UpdateUI = f => {

        // bookmarks

        let bookmarks = []
        let bookmarks_polymerase = o => {
            //let x = {}
            //x[o.category] = o.id
            //bookmarks.push(x)
            bookmarks.push(o) // easy push
        }
        RNA.ui.bookmarks.map(bookmarks_polymerase)

        // bookmarks

        let filters = []
        let filters_polymerase = o => {
            filters.push(JSON.stringify(o)) // string push
        }
        RNA.ui.filters.map(filters_polymerase)

        // reports

        let reports = []

        // perks

        let perks = [...RNA.ui.perks]

        // save profile

        let profile_ui = {
            bookmarks,
            filters,
            reports,
            perks,
        }

        RNA.profile.ui = JSON.stringify(profile_ui)
        return RNA.UpdateProfile(['ui'])
    }
    RNA.ReadUI = f => {
        let profile_ui = JSON.parse(RNA.profile.ui) || {}

        let bookmarks = profile_ui.bookmarks || []

        let filters   = profile_ui.filters || []
        filters = filters.map( o => JSON.parse(o) )

        // reports

        let reports = []

        // perks

        let perks = profile_ui.perks || []

        RNA.ui = {
            bookmarks,
            filters,
            reports,
            perks,
        }

    }
    RNA.ClearUI = f => {
        RNA.profile.ui = JSON.stringify({}) // clear ui
        RNA.ui = Object.assign({}, protein_ui)
        return RNA.UpdateProfile(['ui'])
    }

// --------------------------------- Bookmarks

    RNA.BookmarkAdd = ox => {
        if (!!RNA.BookmarkIs(ox)) return true
        let {id, category, title, href} = ox      // extract dna
        RNA.ui.bookmarks.push({id, category, title, href}) // add
        return RNA.UpdateUI() // save
    }
    RNA.BookmarkClear = ox => {
        let i  = RNA.BookmarkIs(ox)         // find index
        if (!i) return true
        RNA.ui.bookmarks.splice(i.i,1)      // clear
        return RNA.UpdateUI() // save
    }
    RNA.BookmarkToggle = ox => {
        if (!RNA.BookmarkIs(ox)) RNA.BookmarkAdd(ox)
        else                     RNA.BookmarkClear(ox)
    }
    RNA.BookmarkIs = (ox) => {
        let n = false
        let check = (o,ox) => {
            return o.id==ox.id && o.category==ox.category
        }
        RNA.ui.bookmarks.map((o,i)=>{ if (check(o,ox)) n={i} })
        return n
    }
    RNA.BookmarksCount = f => {
        return RNA.ui.bookmarks.length || 0
    }
    RNA.BookmarksShortlist = f => {
        return [...RNA.ui.bookmarks].reverse().slice(0,7)
    }

// --------------------------------- Filters

    RNA.FilterAdd = dna => {
        let {label, value} = dna
        RNA.ui.filters.unshift( {label, value } ) // add
        return RNA.UpdateUI() // save
    }
    RNA.FilterRemove = item => {
        let {label, value} = item
        let n = false
        let check = (item,filter) => {
            return item.label && item.label===filter.label
        }
        RNA.ui.filters.map( (fl,i) =>{ if (check(item,fl)) n=i } )
        if (n!==false) RNA.ui.filters.splice(n,1) // remove
        return RNA.UpdateUI() // save
    }
    RNA.FilterList = f => {
        const iPromise = (resolve, reject) => {

            let resolve_responce = responce => {
                resolve(RNA.ui.filters || [])
            }

            RNA.LoadProfile()
                .then(resolve_responce)
                .catch(reject)
        }
        return new Promise(iPromise)
    }
    RNA.FiltersCount = f => {
        return RNA.ui.filters.length || 0
    }
    RNA.FiltersShortlist = f => {
        return [...RNA.ui.filters].slice(0,7)
    }

    RNA.Filter__AddToCollection = fli => RNA.ui.filters.unshift(fli)

    RNA.SaveFilter = fli => {
        RNA.Filter__AddToCollection(fli)
        return RNA.UpdateUI() // save
    }

// --------------------------------- Reports

    RNA.ReportsCount = f => {
        return 0
    }

// --------------------------------- Perks

    RNA.Dev  = f => RNA.ui.perks.indexOf('developer') > -1
    RNA.Help = f => RNA.ui.perks.indexOf('uihelpers') > -1
    RNA.Perk = (perk, attach = true) => {
        let i = RNA.ui.perks.indexOf(perk)
        if (!!attach && i<0) RNA.ui.perks.push(perk)  // attach
        if (!attach && i>-1) RNA.ui.perks.splice(i,1) // clear
        return RNA.UpdateUI()
    }



// *issue - needs refactor
// ---------------------------------
// ---------------------------------

    RNA.DM = {
        getToken: f => { return {data:{token:'falcon-9'}}; }
    }

    RNA.Connect = Dataman => {
        RNA.DM = Dataman
        RNA.online = true
        RNA.CheckReservation()
    }

// --------------------------------- Authorization

    RNA.doLogin = data => {
        RNA.logged = true
        RNA.token  = data.token
        RNA.id     = data.id
    }

    RNA.doLogout = f => {
        RNA.logged = false
        RNA.token  = ''
    }

    let AuthorizationPromise = credentials => {
        return new Promise(
            (resolve,reject) => {
                let success = responce => {
                    RNA.doLogin({credentials, data:responce.data})
                    resolve(responce)
                }
                RNA.DM.getToken(credentials)
                    .then(success)
                    .catch(reject)
            }
        )
    }


// --------------------------------- API

    RNA.Login       = RNA.EnterCredentials
    RNA.Logout      = RNA.CheckOut
    RNA.DemoLogin   = f => false

// END UserModel

}

// --------------------------------- export ready


const User = new UserModel()

export default User
