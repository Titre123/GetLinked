import {
  ARIA_CURRENT,
} from "../constants/landing_constants";

const initialState = {
  toggleMobile: false,
  current: ''
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARIA_CURRENT: {
      return {
        ...state,
        current: action.payload
      };
    }
    default:
      return state;
  }
};

export default landingPageReducer;
