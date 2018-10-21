export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const EDIT_ACTIVITY = 'EDIT_ACTIVITY';

export const addActivity = () => ({
  type: ADD_ACTIVITY,
});

export const editActivity = edit => ({
  type: EDIT_ACTIVITY,
  edit,
});
