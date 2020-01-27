import { POPUP_SHOW, POPUP_HIDE } from "../_constants";

export const popupShow = () => dispatch => {
  dispatch({type: POPUP_SHOW})
};

export const popupHide = () => dispatch => {
  dispatch({type: POPUP_HIDE})
};