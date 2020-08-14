let Model = function (dna) {

    let protein = {
        id:    null,
        name:  '',
        value: '',
    }

    Object.assign(this, protein, dna)
    let RNA = this

    RNA.Startup = Dataman => {
        RNA.Dataman = Dataman
    }
}

export default Model
