/** download and create conditions for filter
ok    2020.7.5 */

import opConfig from '@/components/db-filter/opConfig.js'
import opErator from '@/components/db-filter/opErator.js'

const opLoader__Model = function () {

// OP-Loader Story

    let RNA = this
    RNA.FBX = false

    RNA.UnpackFOGS = f => {
        const FOGS = opConfig.FOGS // source
        FOGS.map(RNA.UnpackFOG)
    }

    RNA.UnpackFOG  = FOG => {
        let FBX = RNA.FBX
        let category = FOG.category

        // Create FLI

        let FLI = FBX.FilterCreate(category)

        // Create OPS

        RNA.CreateOPS = OPS => {
            let UpdateValues = op => {
                if (op.GetValues) op.GetValues().then(op.ValuesListSet)
            }
            FLI.DefineOPS(OPS)
            FLI.ops.map(UpdateValues)
            RNA.UnpackFOG_Complete(FLI) // *issue - values still not loaded
        }
        RNA.PromiseGetOPSFromConfig(FOG).then(RNA.CreateOPS)

    }

    RNA.PromiseGetOPSFromConfig = FOG => {
        let OPC = FOG.opc // config
        let OPS = []      // result

        // extract default opc

        let CreateOP = dna => OPS.push( new opErator(dna) )
        OPC.map(CreateOP)

        // extract resources
        let resource = FOG.resources[0] ////// *issue - 1 resource limit
        let iPromise = (resolve, reject) => {
            let ResolveMoreOps = more_ops => {
                more_ops.map(CreateOP)
                resolve(OPS)
            }
            if (!resource) resolve(OPS) // no resorces
            else resource().then(ResolveMoreOps)
        }
        return new Promise(iPromise)
    }

    // Report Loaded

    RNA.UnpackFOG_Complete = FLI => { FLI.loaded = true }


///*/// ---------------------------- API

    RNA.Start = dna => {
        RNA.FBX = dna.Filterbox // set storage
        RNA.UnpackFOGS()        // create filters
    }

///*/// ----------------------------

}
export default new opLoader__Model()
