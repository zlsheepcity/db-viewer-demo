const ProductItem = function( dna={} ){

    let protein = {

        category:   'products',

     // table values

        id: '',
        title: '',
        image_mini: '',
        image_midi: '',
        productionStatus: '',
        types:      [],
        types_as_string: '',

     // profile values

        brand:      '',
        images:     [],
        features:   [],

     // rest values

        image:      '',
        company:    '',
        factory:    {},
        components: [],
        componentsTitles: {},
        data:       {},
        specifications: [],
    }

    Object.assign(this, protein, dna)
    const RNA = this
    RNA.dna = dna

    // Fagocitoz

    RNA.title      = RNA.title || RNA.name

    // *issue absolute url
    RNA.images = RNA.images.map(img=>{ return {
        url:          '//'+img.url,
        thumbnailUrl: '//'+img.thumbnailUrl,
    } })

    RNA.image_mini = RNA.image_thumbnail || RNA.images && RNA.images[0] && RNA.images[0].thumbnailUrl
    RNA.image_midi = RNA.image_thumbnail || RNA.images && RNA.images[0] && RNA.images[0].url
    RNA.types_as_string = RNA.types.map(t=>t.name).join(', ')

    RNA.image = RNA.image || RNA.images && RNA.images[0] && RNA.images[0].thumbnailUrl
    RNA.image_thumbnail = RNA.image
    RNA.status = RNA.status || RNA.productionStatus

 // API

    RNA.ProfileLink = f => '/Products/' + RNA.id
    RNA.href = RNA.ProfileLink()

    RNA.CountComponents     = f => RNA.components.length
    RNA.CountSpecifications = f => {
        let count = 0
        for ( let key in RNA.specifications) if (RNA.specifications[key]) count++
        return count
    }


    RNA.PreviewContent = f => { return {
        'Brand':   '',//RNA.brand.name,
        'Production Status':  RNA.status.name,
        'Appeared/Created':   RNA.appeared + ' / ' + RNA.created,
    } }


 // Get general properties

    RNA.GeneralProperties = f => {
        return {
            brand:      RNA.brand.text,
            factory:    RNA.factory.text,
            status:     RNA.status.name,
            types:      typeof(RNA.data.types)==='object'
                        && RNA.data.types.map(o=>o.text).join(', '),
        }
    }

 // Display Values

    RNA.DataValue = f => {
        return {
            id:     RNA.id,
            title:  RNA.title,
            image:  RNA.image_thumbnail,
            status: RNA.status,
            types:  RNA.types.map(t=>t.name).join(', '),
        }
    }

}

export default ProductItem
