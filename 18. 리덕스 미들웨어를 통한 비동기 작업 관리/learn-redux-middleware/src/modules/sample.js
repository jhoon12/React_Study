import * as api from "../lib/api";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
      };
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true,
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
      };
    default:
      return initialState;
  }
};
export default sample;