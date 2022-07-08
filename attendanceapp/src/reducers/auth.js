import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONF_SUCCESS,
  PASSWORD_RESET_CONF_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  PROFILE_REGISTER_SUCCESS,
  PROFILE_REGISTER_FAIL,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  isRegistered: false,
  isProfileCreated: false,
  username: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
        isProfileCreated: false,
      };
    case USER_LOADED_SUCCESS:
      localStorage.setItem("username", payload);
      return {
        ...state,
        username: payload,
        isProfileCreated: false,
      };
    case USER_LOADED_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
      return {
        ...state,
        username: null,
        isRegistered: false,
        isProfileCreated: false,
      };
    case LOGIN_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        username: null,
        isRegistered: false,
        isProfileCreated: false,
      };

    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        username: null,
        isRegistered: false,
        isProfileCreated: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isRegistered: false,
      };
    case PROFILE_REGISTER_SUCCESS:
      return {
        ...state,
        isProfileCreated: true,
      };
    case PROFILE_REGISTER_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        username: null,
        isRegistered: false,
        isProfileCreated: false,
      };

    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONF_SUCCESS:
    case PASSWORD_RESET_CONF_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
