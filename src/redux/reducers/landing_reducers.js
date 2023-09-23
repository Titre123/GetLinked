import { TOGGLE_MOBILE, 
  PRODUCT_ARIA_EXPANDED, 
  RESOURCE_ARIA_EXPANDED,
  ARIA_UNEXPANDED } from "../constants/landing_constants";

const initialState = {
  toggleMobile: false,
  productExpanded: false,
  resourceExpanded: false
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE:
      return {
        ...state,
        toggleMobile: !state.toggleMobile,
      };
    case PRODUCT_ARIA_EXPANDED:
        return {
            ...state,
            productExpanded: !state.productExpanded,
            resourceExpanded: false
        }
    case RESOURCE_ARIA_EXPANDED:
        return {
            ...state,
            resourceExpanded: !state.resourceExpanded,
            productExpanded: false
        }
    case ARIA_UNEXPANDED:{
      return {
        ...state,
        resourceExpanded: false,
        productExpanded: false,
        toggleMobile: false
      }
    }
    default:
      return state;
  }
};

export default landingPageReducer;
