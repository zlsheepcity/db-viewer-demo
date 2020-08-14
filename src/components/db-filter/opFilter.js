/** define filter state and values
    2020.7.6 **/

import opConfig from '@/components/db-filter/opConfig.js'

const opFilter__Model = function (dna) {

///*/// ---------------------------- Polymerase

    let protein = {
        category:   '',
        active:     false,
        loaded:     false,

        ops: [],
        raw: {},
        raw_milk: false,

        label:        'New Filter',
        searchString: '',
        searchRule:   'any',
        lastResult:   0,
    }
    Object.assign(this, protein, dna)
    let RNA = this

///*/// ---------------------------- workers


    RNA.RAW_Update = f => {
        RNA.raw = {} // reset
        let Eat = op => {
            if (op.IsTaken() && op.NotEmpty())
                RNA.raw[op.id] = op.ExtractShort() }
        RNA.ops.map(Eat)
        RNA.raw_milk = RNA.RAW_Milk()
    }

    RNA.RAW_Milk = f => {
        if ( !RNA.HasConditions() ) return false
        return JSON.stringify(RNA.ConvertToQuery())
    }

    RNA.OpIndex = opid => {
        let opindex = -1 // not found
        let find = (op,i) => { if (op.id===opid) opindex=i }
        RNA.ops.map(find)
        return opindex
    }



///*/// ---------------------------- VALUES


    RNA.OPS_Set = ops => {
        RNA.ops = ops
        RNA.Update()
        // *issue TODO - update raw/milk
    }
    RNA.SearchRule_Set = rule => {
        RNA.searchRule = rule || any
        RNA.Update()
    }
    RNA.FLI_Refresh = f => {
        RNA.raw = {}
        RNA.searchString = ''
        RNA.searchRule   = 'any'
        RNA.lastResult   = false
        RNA.label        = 'New Filter',
        RNA.ops.map( op=>op.ResetValue() )
    }
    RNA.FLI_ResetValues = f => {
        RNA.FLI_Refresh()
        RNA.Update()
    }
    RNA.FLI_TakeValues = fli => {

        // reset current

        RNA.FLI_Refresh()

        // support different formats
        let raw = fli.raw || fli.conditions || fli.value || false

        // export raw values

        if (raw) {
            let ConvertOp = opid => {
                let opindex = RNA.OpIndex(opid)
                if (opindex < 0 ) return false // wrong operator

                RNA.ops[opindex].value.Update(raw[opid])
                RNA.ops[opindex].TakenAdd()
            }
            Object.keys(raw).map(ConvertOp)
        }

        // export filter parameters

        let {label, searchString, searchRule, lastResult} = fli || {}

        if (label)        RNA.label        = label
        if (searchString) RNA.searchString = searchString
        if (searchRule)   RNA.searchRule   = searchRule
        if (lastResult)   RNA.lastResult   = lastResult

        // auto activate

        RNA.active = true

        // ready

        RNA.Update()
    }

    RNA.HasConditions = f => !!Object.keys(RNA.raw).length


///*/// ---------------------------- API


    RNA.Update = f => {
        RNA.RAW_Update()
        // *issue TODO - get lastResult
    }

    RNA.TakeValues = RNA.FLI_TakeValues

    RNA.Extract = f => {
        let { label, category, searchString, searchRule, lastResult } = RNA
        let conditions = RNA.raw
        return { label, category, searchString, searchRule, lastResult, conditions }
    }

    RNA.ConvertToQuery = f => opConfig.ConvertToQuery(RNA)

    RNA.ResetValues = f => RNA.FLI_ResetValues()
    RNA.ResetOPS    = f => RNA.OPS_Set([])
    RNA.DefineOPS = ops => RNA.OPS_Set(ops)

///*/// ----------------------------

}
export default opFilter__Model
