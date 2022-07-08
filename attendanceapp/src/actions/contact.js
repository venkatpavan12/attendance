import { EMAIL_SENT_SUCCESS, EMAIL_SENT_FAIL } from "./types";
import { toast } from "react-toastify";
import axios from "axios";




export const contact = (name, email, message) => async (dispatch) => {
    
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    email,
    message,
  });
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/mail/`, body, config,);
    dispatch({
      type: EMAIL_SENT_SUCCESS,
    });
    toast.success("Email Sent Successful");
  } catch (err) {
    dispatch({
      type: EMAIL_SENT_FAIL,
    });
    toast.error("Email Sent Failed");
  }
};
