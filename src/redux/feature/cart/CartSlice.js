import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    loading: false,
    error: '',
    cartTotalQuantity: 0,
    CartTotalAmount: 0
}


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const ItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (ItemIndex >= 0) {
                state.cartItems[ItemIndex].cartQuantity += 1;
                toast.info(`تعداد محصول ${state.cartItems[ItemIndex].name}افزایش یافت`,{position:'bottom-right'})
            } else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} با موفقیت اضافه شد `,{position:'bottom-right'})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }
    },
    extraReducers: (builder) => {

    }
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer;