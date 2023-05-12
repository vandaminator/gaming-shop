export interface menuItem {
    icon: string
    link: string
    name: string
}

export interface systemTypes {
    menuItems: menuItem[]
    topGameNum: number
}

export interface action {
    payload: "next" | 'back'
}