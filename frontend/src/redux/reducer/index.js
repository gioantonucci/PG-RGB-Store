
import { ADD_CART, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, RESET_CART, SEARCH_PRODUCTS,FILTER_BY_PRICE, GET_CATEGORIES,SET_FILTER, FILTER_CATEGORIES} from '../types/index';
const initialState = {
  allProducts: [],
  products: [],
  detail: [],
  cart:[],
  categories:[],
  filtros: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        productsFilter: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case ADD_CART:
      return{
        ...state,
        cart:[...state.cart, action.payload]
      }
    case RESET_CART:
      return{
        ...state,
        cart:[]
      }
      case FILTER_BY_PRICE:
          let orderedByPrice = state.filtros.includes('Menor precio')?
          state.products.sort(function(a, b) {
              if (a.price > b.price)return 1;    
              if (b.price > a.price)return -1;

              return 0;
        
              
          }):
          state.products.sort(function(a,b){
              if(a.price > b.price) return -1;
              if(b.price > a.price) return 1;
              return 0;
          })
          return{
              ...state,
              products: orderedByPrice
          };

      case SEARCH_PRODUCTS:
        return{
          ...state,
          products: action.payload,
        }
          case GET_CATEGORIES:
            return {
              ...state,
              categories: action.payload,
            };
            
            
            case SET_FILTER:
              return{
                ...state,
                filtros: action.payload,
            };

      case FILTER_CATEGORIES:
      const products = state.allProducts
      const filter = state.filtros
      const categoriesFiltered = filter.includes("all")? products: products.filter(e=>e.categories[0].name.includes(filter));
        return{
          ...state,
          products: categoriesFiltered,
        }


    default:
      return { ...state };
  }
};

export default reducer;

