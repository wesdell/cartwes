import {
  ADD_TO_CART,
  CLEAN_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

const data = localStorage.getItem("shopping");
const initialState = data
  ? JSON.parse(data)
  : {
      products: [
        {
          id: 1,
          name: "HTML Master Course",
          price: 77,
          url: "assets/img/html.png",
        },
        {
          id: 2,
          name: "CSS Master Course",
          price: 100,
          url: "assets/img/css.png",
        },
        {
          id: 3,
          name: "JS Master Course",
          price: 82,
          url: "assets/img/javascript.png",
        },
        {
          id: 4,
          name: "Angularjs Master Course",
          price: 17,
          url: "assets/img/angularjs.png",
        },
        {
          id: 5,
          name: "Docker Master Course",
          price: 67,
          url: "assets/img/docker.png",
        },
        {
          id: 6,
          name: "Kubernetes Master Course",
          price: 90,
          url: "assets/img/kubernetes.png",
        },
        {
          id: 7,
          name: "MongoDB Master Course",
          price: 65,
          url: "assets/img/mongodb.png",
        },
        {
          id: 8,
          name: "MySQL Master Course",
          price: 95,
          url: "assets/img/mysql.png",
        },
        {
          id: 9,
          name: "Nodejs Master Course",
          price: 75,
          url: "assets/img/nodejs.png",
        },
        {
          id: 10,
          name: "PostgreSQL Master Course",
          price: 50,
          url: "assets/img/postgresql.png",
        },
        {
          id: 11,
          name: "Reactjs Master Course",
          price: 110,
          url: "assets/img/react.png",
        },
        {
          id: 12,
          name: "Vuejs Master Course",
          price: 70,
          url: "assets/img/vue.png",
        },
      ],
      cart: [],
    };

export default function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      let newState = itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...newItem, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
      localStorage.setItem("shopping", JSON.stringify(newState));
      return newState;
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      let newState =
        itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };

      if (state.cart.length > 0) {
        localStorage.setItem("shopping", JSON.stringify(newState));
      } else {
        localStorage.removeItem("shopping");
      }
      return newState;
    }
    case REMOVE_ALL_FROM_CART:
      let newState = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

      if (state.cart.length > 0) {
        localStorage.setItem("shopping", JSON.stringify(newState));
      } else {
        localStorage.removeItem("shopping");
      }
      return newState;
    case CLEAN_CART:
      localStorage.removeItem("shopping");
      return initialState;
    default:
      return state;
  }
}
