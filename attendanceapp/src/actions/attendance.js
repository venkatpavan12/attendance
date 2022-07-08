import { ATD_MARK_SUCCESS, ATD_MARK_FAIL, USER_LOADED_FAIL } from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const mark_atd = (type) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ type });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/attendance/`,
        body,
        config
      );

      dispatch({
        type: ATD_MARK_SUCCESS,
        payload: res.data,
      });
      toast.success("Successfully MARKED");
    } catch (err) {
      dispatch({
        type: ATD_MARK_FAIL,
      });
      toast.error("An error Occured");
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
    toast.error("PLEASE LOGIN TO YOUR ACCOUNT!");
  }
};
