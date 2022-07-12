import mongo from "mongoose"

const BusinessSchema = new mongo.Schema({

    business_information : {

        business_name: {type: String, required: true},
        legal_business_name: {type: String, required: true},
        building: {type: String, required: true},
        street: {type: String, required: true},
        landmark: {type: String},
        area: {type: String, required: true},
        city: {type: String, required: true},
        pin_code: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true}
    
    },
    
    contact_information:{
        contact_person:{type: String},
        designation:{type: String},
        mobile_no_:{type: Number, required: true},
        fax_no:{type: Number},
        toll_free_no:{type: Number},
        toll_free_no_2:{type: Number},
        email_id:{type: String},
        website:{type: String},
        facebook:{type: String},
        twitter:{type: String},
        instagram:{type: String},
        youtube:{type: String},
        linked_in:{type: String},
    },
    
    
    
    hours_of_operation:{
        mon:{start: {type: Number}, end: {type: Number}},
        tue:{start: {type: Number}, end: {type: Number}},
        wed:{start: {type: Number}, end: {type: Number}},
        thu:{start: {type: Number}, end: {type: Number}},
        fri:{start: {type: Number}, end: {type: Number}},
        sat:{start: {type: Number}, end: {type: Number}},
        sun:{start: {type: Number}, end: {type: Number}}
    },
    
    payment_modes_accepted_by_you:{
    
        cash_master_card: {type: Boolean},
        visa_card: {type: Boolean},
        debit_cards: {type: Boolean},
        money_orders: {type: Boolean},
        cheques: {type: Boolean},
        credit_card: {type: Boolean},
        travelers_cheque: {type: Boolean},
        financing_available: {type: Boolean},
        american_express_card: {type: Boolean},
        diners_club_card: {type: Boolean},
        paytm: {type: Boolean},
        g_pay: {type: Boolean},
        upi: {type: Boolean},
        bhim: {type: Boolean},
        jd_pay: {type: Boolean},
        airtel_money: {type: Boolean},
        oxigen: {type: Boolean},
        sodexo_meal_card: {type: Boolean},
        cash_on_delivery: {type: Boolean},
        card_on_delivery: {type: Boolean},
        payumoney: {type: Boolean},
        phone_pe: {type: Boolean},
        neft: {type: Boolean},
        rtgs: {type: Boolean},
        imps: {type: Boolean},
        demand_draft: {type: Boolean},
        amazon_pay: {type: Boolean},
        pockets_by_icici: {type: Boolean},
        ru_pay_card_: {type: Boolean},
        ola_money: {type: Boolean},
    },
    
    company_information:{
        year_of_establishment:{type: Number},
        select_no_of_employees:{type: Number}
    },
        
    business_keywords:[{
        type: {type: String}
    }],
    
    business_logo: {type: String}

})

const Business =  mongo.model("Business", BusinessSchema )

export default Business

