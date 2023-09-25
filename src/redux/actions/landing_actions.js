import {
  ARIA_CURRENT
} from "../constants/landing_constants";

export function AriaCurrent(current) {
  return {
    type: ARIA_CURRENT,
    payload: current
  }
}