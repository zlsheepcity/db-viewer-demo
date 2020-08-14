import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// --------------------------------- export seed

    let state     = {}
    let mutations = {}
    let actions   = {}
    let modules   = {}

    import Dataman from '@/app/Dataman.js'

// --------------------------------- Connect Interface

    import Interface from '@/app/Interface.js'
    Interface.Connect()
    state = { Interface, ...state }

// --------------------------------- Reports

    import report from '@/models/ui-report.js'
    report.Connect(Dataman)
    state = { report, ...state }

// --------------------------------- User

    import    user from '@/models/ui-user.js'
    user.Connect(Dataman.User)
    Dataman.User.TimeoutAction(user.CheckOut) // *issue deprecated //
    Dataman.CatchError = responce => {
        //{code: 401, message: "Expired JWT Token"}
        let message = JSON.stringify(responce)
        if ( message.search('Expired')>-1 || message.search('401')>-1 ) {
            user.CheckOut()
            Interface.login.show()
        }
        else Interface.CatchError = responce + ' | ' + typeof(responce)
    }

    state = { user, ...state }

// --------------------------------- Userbox

    import Userbox from '@/app/Userbox.js'
    Userbox.Connect()
    state = { Userbox, ...state }

// --------------------------------- Filterbox

    import Filterbox from '@/app/Filterbox.js'
    state = { Filterbox, ...state }


// --------------------------------- export ready

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
})
