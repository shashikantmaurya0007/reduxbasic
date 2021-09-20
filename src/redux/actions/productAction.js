import { ActionTypes } from "../constants/actionTypes";
const setProducts = (products) => {
    return {
        // type: ActionTypes.SELECTED_PRODUCT,
        type: "SELECTED_PRODUCT",
        payload: products,
    };
};
export default setProducts;