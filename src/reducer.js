export const initialState = {
    userProfile:[{userName:"",
    email:"",
    gender:"",
    age:"",address:""
    ,phone:"",
    balance:1000,}],
    user: null,
    basket:[],
};

// Selector
// export const getbalance = (basket,userProfile) => userProfile[0].balance -
//     basket.reduce( (amount, item) => item.amountinUSD + amount);

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'save_Profile':
            return {
                ...state,
                userProfile: [action.userProfile],
                
            }

        // case "REMOVE_FROM_BASKET":
        //     const index = state.basket.findIndex(
        //         (basketItem) => basketItem.id === action.id
        //     );
        //     let newBasket = [...state.basket];

        //     if (index >= 0) {
        //         newBasket.splice(index, 1);

        //     } else {
        //         console.warn(
        //             `Cant remove product (id: ${action.id}) as its not in basket!`
        //         )
        //     }

        //     return {
        //         ...state,
        //         basket: newBasket
        //     }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;