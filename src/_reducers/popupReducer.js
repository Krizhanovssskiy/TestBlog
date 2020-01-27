import { POPUP_HIDE, POPUP_SHOW } from "../_constants";

export default (state = false, { type }) => {
  switch (type) {
    case POPUP_SHOW:
      return true;

    case POPUP_HIDE:
      return false;

    default:
      return state;
  }
}