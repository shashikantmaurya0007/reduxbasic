import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [
        { id: 1, title: "shashi", category: "programmer" },
        { id: 2, title: "rahul", category: "programmer" },
    ],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCT":
            {
                return {...state, products: payload };
                break;
            }
        default:
            {
                return state;
                break;
            }
    }
};