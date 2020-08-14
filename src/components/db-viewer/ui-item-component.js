const ComponentItem = function( dna={} ){

    let protein = {
        category: 'components',
        id:        0,
        title:    '',
        productsAmount: 0,
        company:  '',
        products: [],
        data:     {},
    }

    Object.assign(this, protein, dna)
    const RNA   = this
    this.dna = dna // save

    // *issue - "category" in data
    if (dna.category) {
        RNA.component_category = dna.category
        RNA.category = 'components'
    }

 // Polymerase

    RNA.title = RNA.name || 'unnamed'

 // API

    RNA.ProfileLink = f => '/Components/' + RNA.id
    RNA.href = RNA.ProfileLink()

    RNA.CountProducts     = f => RNA.products.length

    RNA.PreviewContent = f => { return RNA.data }

}

export default ComponentItem
