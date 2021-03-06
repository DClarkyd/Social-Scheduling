import { signInTypes } from "../actions/sign-in/sign-in.types";
import { ISignInState } from ".";

const initialState: ISignInState = {
  credentials: {
    password: '',
    username: ''
  },
  errorMessage: '',
  signinUser: {}
}

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signInTypes.SET_LOGIN_USER:
      return {
        ...state,
        signinUser: action.payload.signinUser
      }
    case signInTypes.UPDATE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case signInTypes.UPDATE_PASSWORD:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.payload.password
        }
      }
    case signInTypes.UPDATE_USERNAME:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          username: action.payload.username
        }
      }
  }

  return state;
}