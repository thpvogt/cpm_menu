export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const EDIT_ACTIVITY = 'EDIT_ACTIVITY';

export const addActivity = () => ({
  type: ADD_ACTIVITY,
});

export const editActivity = activityChange => ({
  type: EDIT_ACTIVITY,
  activityChange,
});
