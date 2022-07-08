import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONF_SUCCESS,
  PASSWORD_RESET_CONF_FAIL,
  PROFILE_REGISTER_SUCCESS,
  PROFILE_REGISTER_FAIL,
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const laod_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      );
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data.username,
      });
      toast.success("Login Successful");
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
    toast.error("Login Failed");
  }
};

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(laod_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error("Login Failed");
  }
};
export const register = (username, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/`,
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    toast.success("Registration Successful");
    dispatch(login(username, password));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
    toast.error("Registration Failed");
  }
};

export const reset_password=(email)=>async(dispatch)=>{
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
const body = JSON.stringify({ email});
try {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
    body,
    config
  );
  dispatch({
    type: PASSWORD_RESET_SUCCESS,
    payload: res.data,
  });
  //toast.success("Registration Successful");
  //dispatch(login(username, password));
} catch (err) {
  dispatch({
    type: PASSWORD_RESET_FAIL,
  });
  //toast.error("Registration Failed");
}
};


export const reset_password_confirm = (uid,token,new_password,re_new_password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token, new_password, re_new_password });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
      body,
      config
    );
    dispatch({
      type: PASSWORD_RESET_CONF_SUCCESS,
      payload: res.data,
    });
    //toast.success("Registration Successful");
    //dispatch(login(username, password));
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_CONF_FAIL,
    });
    //toast.error("Registration Failed");
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
export const profile_form =
  (
    uploadData
  ) =>
  async (dispatch) => {
    console.log(uploadData)
    if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    // const body = JSON.stringify({
    //   internid,
    //   tmnemailid,
    //   internship_year,
    //   contact_number,
    //   team,
    //   department,
    //   gender,
    //   description,
    //   photo,
    // });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/profile/`,
        uploadData,
        config
      );
      dispatch({
        type: PROFILE_REGISTER_SUCCESS,
        payload: res.data,
      });
      toast.success("Registration Successful");
    } catch (err) {
      dispatch({
        type: PROFILE_REGISTER_FAIL,
      });
      toast.error("Registration Failed");
    }
  }
  };