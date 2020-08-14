const ReportModel = function() {
    let RNA = this

    RNA.online = false
    RNA.post = ''

 // items to report

    RNA.items = []
    RNA.CountItems = f => RNA.items.length
    RNA.getItemsList  = f => RNA.items.map(i=>i.id)
    RNA.addItems = list => { RNA.items = [ ...list, ...RNA.items ] }
    RNA.setItems = list => { RNA.items = [ ...list ] }
    RNA.RemoveItem = it => { RNA.items = RNA.items.filter(el=>el.id!=it.id) }

 // deprecated

    RNA.getItemsCount = RNA.CountItems

 // API

    RNA.getFile = dna => {

        // add items
        let products = RNA.getItemsList().join(',')
        let data = { products, ...dna }

        // log request
        RNA.post = data

        // request file with promise
        return RNA.DM.getReport({data})
    }

// Backend

    RNA.DM = {
        getReport: f => false,
    }

    RNA.Connect = Dataman => {
        RNA.DM  = Dataman
        RNA.online = true
    }

}

const Report = new ReportModel()

export default Report
