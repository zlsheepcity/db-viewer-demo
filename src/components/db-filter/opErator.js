/** define condition for filter OPC+OPS
ok    2020.7.5 */

import opValues from '@/components/db-filter/opValues.js'

const opEratorModel = function (dna) {

    let protein = {

        id:    'Protein',
        label: 'Protein',

     // OPC values

        group: 'General',
        type:  'single',
        valuesList: [],         // type:list
        GetValues:false,        // type:list
        Suggest: f=>false,      // type:suggestion

     // OPS values

        taken: false,
        value: new opValues(),
        suggestring: '',        // type:suggestion
    }

    Object.assign(this, protein, dna)
    let RNA = this

///*/// ---------------------------- workers

    RNA.SetTakenState = state => { RNA.taken = !!state }

///*/// ---------------------------- API

    RNA.ResetValue = f => {
        RNA.value.Reset()
        RNA.SetTakenState(false)
    }

    RNA.IsTaken  = f => !!RNA.taken
    RNA.NotEmpty = RNA.value.NotEmpty

    RNA.ExtractShort = RNA.value.ExtractShort

    // Label from valuesList by value-id

    RNA.ValueLabel = id => {
        let name = false
        let find_name_by_id = o => { if (id==o.id) name=o.name }
        if (RNA.valuesList && RNA.valuesList.length)
            RNA.valuesList.map(find_name_by_id)
        return name || `id:${id}`
    }

    // Values List

    RNA.ValuesListSet = list => { RNA.valuesList = list || [] }
    RNA.SetValuesList = RNA.ValuesListSet

    // Using state for UI Constructor

    RNA.TakenAdd    =f=> RNA.SetTakenState(true)
    RNA.TakenRemove =f=> RNA.ResetValue()


///*/// ----------------------------

}
export default opEratorModel
