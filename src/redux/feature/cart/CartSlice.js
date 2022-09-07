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
                toast.info(`تعداد محصول ${state.cartItems[ItemIndex].name} افزایش یافت`, { position: 'bottom-right' })
            } else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} با موفقیت اضافه شد `, { position: 'bottom-right' })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartItems = newCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} با موفقیت حذف شد `, { position: 'bottom-right' })
        },


        decreaseCart(state, action) {
            const ItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[ItemIndex].cartQuantity > 1) {
                state.cartItems[ItemIndex].cartQuantity -= 1;

                toast.info(`محصول ${action.payload.name} با موفقیت کم شد `, { position: 'bottom-right' })
            } else if (state.cartItems[ItemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
                state.cartItems = newCartItems;
                toast.error(`${action.payload.name} با موفقیت حذف شد `, { position: 'bottom-right' })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },


        clearCart(state, action) {
            state.cartItems = [];
            toast.error('سبد خرید با موفقیت خالی شد', { position: 'bottom-right' })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },


        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { off, price, cartQuantity } = cartItem;
                if (off === 0) {
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                } else {
                    const itemTotal = (price - ((price * off) / 100)) * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity
                    return cartTotal;
                }

            }, {
                total: 0,
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.CartTotalAmount = total;
        },


        increase(state, action) {
            const { data, count } = action.payload
            const ItemIndex = state.cartItems.findIndex((item) => item.id === data.id);
            console.log(ItemIndex)
            if (ItemIndex >= 0) {
                state.cartItems[ItemIndex].cartQuantity = count;
                toast.info(`تعداد محصول ${state.cartItems[ItemIndex].name} افزایش یافت`, { position: 'bottom-right' })
            } else {
                let tempProduct = { ...action.payload.data, cartQuantity: count }
                state.cartItems.push(tempProduct);
                toast.success(`${data.name} با موفقیت اضافه شد `, { position: 'bottom-right' })
            }
           
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        decrease(state, action) {
            const { data, count } = action.payload;
            const ItemIndex = state.cartItems.findIndex((item) => item.id === data.id);
            
            if (state.cartItems[ItemIndex].cartQuantity > 1) {
                state.cartItems[data.id].cartQuantity = count;
                toast.info(`محصول ${data.name} با موفقیت کم شد `, { position: 'bottom-right' })

            } else if (state.cartItems[ItemIndex].cartQuantity === 1) {
                const newCartItems = state.cartItems.filter((cartItem) => cartItem.id !== data.id);
                state.cartItems = newCartItems;
                toast.error(`${data.name} با موفقیت حذف شد `, { position: 'bottom-right' })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }

    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals, increase,decrease } = CartSlice.actions
export default CartSlice.reducer;