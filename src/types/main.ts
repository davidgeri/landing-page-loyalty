import type{ Component } from "vue"


// * Loyalty Card
interface Requirement {
    title: string
    require: string
}

interface Benefit {
    text: string
}

interface ClassStyles {
    header: string
    tier: {
        bg : string 
        icon : string 
    }
    desk: string
    bgico: string
    required: {
        title : string ,
        require : string 
    }
}


export interface PropsLoyaltyCard {
    tier?: string
    title?: string
    desk?: string
    required?: Requirement[]
    benefit?: Benefit[]
    classCard? : ClassStyles  //Buka kalo udah mau di pake ini supaya jalan aja buildn ya dulu
}

// * Solution Loyalty 

export interface PropsSolutionLoyalty  {
    Title : string 
    Desk : string
}

// * Feature Loyalty

export interface FeatureLoyalty {
    Title : string 
    Desk : string 
    Feature : string[]
}

// * PoinFeatture

export interface CardPoinFeature {
    icon : Component
    title : string 
    desk : string 
}