import { CHANGE_ACTIVE_VALUE } from './actions';

const initialState = {
  active: false
};

export const dispatchContainerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_ACTIVE_VALUE:
      return {
        ...state,
        active: action.payload
      };
  }

  return state;
};
