import { types } from "../types/types";

// un reducer es una funcion que recibe dos parametros:
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }

        default:
            return state;

    }
}