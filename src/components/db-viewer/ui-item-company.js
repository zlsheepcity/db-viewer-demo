const CompanyItem = function( dna={} ){

    let protein = {

        category: 'companies',

     // table values

        id: '',
        title: '',
        image: '',
        image_mini: null,
        brandsAmount: 0,
        productsAmount: 0,
        location_string: '',

     // profile values

        originalName: '',
        address: '',
        foundationYear: '',
        registrationNumber: '',
        description: '',
        image_midi: '',
        switchedToOtherIndustry: false,
        outOfBusiness: false,
        products: [],

     // rest values

        image:    '',
        updated:  '',
        brands:   [],
        cProducts: 0,
        contacts: [],
        data:     {},
    }


    Object.assign(this, protein, dna)
    const RNA   = this
    RNA.dna = dna // save

    // Fagocitoz

    RNA.title      = RNA.title || RNA.name

    RNA.image_mini = RNA.defaultImage && RNA.defaultImage.thumbnailUrl || ''
    RNA.image_midi = RNA.defaultImage && RNA.defaultImage.url || ''
    RNA.image = RNA.image_mini

    RNA.image_mini = RNA.image_mini ? '//' + RNA.image_mini : ''
    RNA.image_midi = RNA.image_midi ? '//' + RNA.image_midi : ''

    RNA.location_string = RNA.location && RNA.location.name || ''

    RNA.cProducts = RNA.products.length || 0
    RNA.cBrands   = RNA.brands.length   || 0

 // API

    RNA.ProfileLink = f => '/Companies/' + RNA.id
    RNA.href = RNA.ProfileLink()

    RNA.PreviewContent = f => { return {
        "Location":             RNA.data.location,
        "Site":                 RNA.data.site,
        "Facebook":             RNA.data.facebook,
        "Instagram":            RNA.data.instagram,
        "Foundation year":      RNA.data.foundation_year,
    } }

}

export default CompanyItem
