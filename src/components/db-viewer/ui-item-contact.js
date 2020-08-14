const ContactItem = function( dna={} ){

    let protein = {
        category: 'contacts',
        id:         0,
        title:     '',
        company:   '',
        company_title: '',
        company_apid:  '',
        position:  '',

        privatePhone:   '',
        workPhone:      '',
        wechat:         '',
        facebook:       '',
        qq:             '',
        linkedin:       '',
        email:          '',

        companies: [],
        data:      {},
    }

    Object.assign(this, protein, dna)
    const RNA   = this
    RNA.dna = dna

 // Polymerase

    RNA.title = RNA.name +' '+ RNA.surname
    RNA.company_apid = RNA.company || ''
    RNA.company_title = RNA.companyName || RNA.company

 // API

    RNA.ProfileLink = f => '/Contacts/' + RNA.id
    RNA.href = RNA.ProfileLink()

    RNA.PreviewContent = f => { return RNA.data }

}

export default ContactItem
