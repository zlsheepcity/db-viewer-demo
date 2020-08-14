/** define complex value
ok    2020.7.4

    value = {
        single:'',
        from:'',
        to:'',
        list:[]
    }

    type:single, {single}
    type:list,   {list}
    type:range,  {from,to}

*/
const opValueModel = function (dna) {

    let RNA = this

///*/// ---------------------------- workers

    RNA.MakeUniqueValue = dna => {
        let { single, list, from, to } = dna || {}
        return {
            single: single ? single + '' : '',
            list:   list   ? [ ...list ] : [],
            from:   from   ? from   + '' : '',
            to:     to     ? to     + '' : '', }
    }

///*/// ---------------------------- API

    RNA.Reset  =f=> Object.assign( RNA, RNA.MakeUniqueValue() )
    RNA.Update =v=> Object.assign( RNA, RNA.MakeUniqueValue(v) )

 // Get value

    RNA.ExtractShort =f=> {
        let short = {}
        if (RNA.HasSingle()) short.single = RNA.single
        if (RNA.HasFromTo()) short.from   = RNA.from
        if (RNA.HasFromTo()) short.to     = RNA.to
        if (RNA.HasList())   short.list   = [...RNA.list]
        return RNA.NotEmpty() ? short : false
    }

 // Check value

    RNA.HasSingle =f=> !!RNA.single
    RNA.HasFromTo =f=> !!RNA.from || !!RNA.to
    RNA.HasList   =f=> !!RNA.list && !!RNA.list.length
    RNA.NotEmpty  =f=> // check opvalue
           RNA.HasSingle()
        || RNA.HasFromTo()
        || RNA.HasList()

 // Add/Remove single value into list

    RNA.Ixlist =v=> RNA.list.indexOf(v)
    RNA.Inlist =v=> RNA.Ixlist(v) > -1
    RNA.Uplist =v=>!RNA.Inlist(v) ? RNA.list.push(v) :false
    RNA.Unlist =v=> RNA.Inlist(v) ? RNA.list.splice(RNA.Ixlist(v),1) :false
    RNA.Tglist =v=> RNA.Inlist(v) ? RNA.Unlist(v) : RNA.Uplist(v)



///*/// ---------------------------- Init

    RNA.Update(dna) // set fields

///*/// ----------------------------
}

export default opValueModel
