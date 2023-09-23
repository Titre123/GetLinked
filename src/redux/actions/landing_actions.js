import {
  TOGGLE_MOBILE,
  PRODUCT_ARIA_EXPANDED,
  RESOURCE_ARIA_EXPANDED,
  ARIA_UNEXPANDED,
} from "../constants/landing_constants";

export function ToggleMobile() {
  return {
    type: TOGGLE_MOBILE,
  };
}

export function ProductExpanded() {
  return {
    type: PRODUCT_ARIA_EXPANDED,
  };
}

export function ResourceExpanded() {
  return {
    type: RESOURCE_ARIA_EXPANDED,
  };
}

export function AriaUnexpanded() {
  return {
    type: ARIA_UNEXPANDED,
  };
}
