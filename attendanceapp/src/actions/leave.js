import {
  LEAVE_APPLIED_SUCCSS,
  LEAVE_APPLIED_FAIL,
  USER_LOADED_FAIL,
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const apply_leave = (startdate, enddate, reason) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ startdate,enddate,reason });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/leave/`,
        body,
        config
      );

      dispatch({
        type: LEAVE_APPLIED_SUCCSS,
        payload: res.data,
      });
      toast.success("Successfully Applied");
    } catch (err) {
      dispatch({
        type: LEAVE_APPLIED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
    toast.error("PLEASE LOGIN TO YOUR ACCOUNT!");
  }
};
