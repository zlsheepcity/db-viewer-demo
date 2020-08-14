/* Userbox API - saved bookmarks, settings e.t.c. */
/*

// --------------------------------- Userbox in state

    import Userbox from '@/app/Userbox.js'
    Userbox.Connect()
    state = { Userbox, ...state }

// --------------------------------- Userbox in use

    const Userbox = function () { return this.$store.state.Userbox }
    computed = { Userbox, ...computed }

*/
const UserboxAPI = function () {

    let RNA = this

    RNA.Connect = f => false

// --------------------------------- bookmarks

    RNA.bookmarks = []
    RNA.ReMark = it => {
        if (RNA.GetMark(it)===false)
            RNA.SetMark(it)
        else
            RNA.RemMark(it)
    }
    RNA.SetMark = it => {
        if( RNA.GetMark(it)!==false ) return false // check if already
        RNA.bookmarks.push(it) // add mark
        it.bookmarked = true
    }
    RNA.RemMark = it => {
        let mark = RNA.GetMark(it)
        if ( !mark || mark.index===false ) return false // nothing to remove
        RNA.bookmarks.splice(mark.index, 1) // remove mark
        it.bookmarked = false
    }
    RNA.GetMark = item => {
        let { id, category } = item
        let index = false
        let inmap = (el,i) => {
            if ( id==el.id && category==el.category )
                index = i
        }
        RNA.bookmarks.map(inmap)
        if (index===false) return false
        return { index, id, category, item: RNA.bookmarks[index] }
    }
}

export default new UserboxAPI()
