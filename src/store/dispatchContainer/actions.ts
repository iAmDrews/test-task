export const CHANGE_ACTIVE_VALUE = 'CHANGE_ACTIVE_VALUE';

export const setActiveValue = (val: boolean) => {
  return {
    type: CHANGE_ACTIVE_VALUE,
    payload: val
  };
};
