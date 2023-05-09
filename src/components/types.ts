import { gameDbType } from "../features/database/types"
import { systemTypes } from "../features/system/types"

export interface storeProps {
    cart: object
    system: systemTypes
    gameDb: gameDbType
}