// * Loyalty Card

interface Requirement {
    title: string
    require: string
}

interface Benefit {
    text: string
}

interface TierStyle {
    bg: string
    icon: string
}

interface RequirementStyle {
    title: string
    require: string
}

interface ClassStyles {
    header: string
    tier: TierStyle
    desk: string
    bgico: string
    required: RequirementStyle
}


export interface PropsLoyaltyCard {
    tier: string
    title: string
    desk: string
    required: Requirement[]
    benefit: Benefit[]
    classCard? : ClassStyles  //Buka kalo udah mau di pake ini supaya jalan aja buildn ya dulu
}