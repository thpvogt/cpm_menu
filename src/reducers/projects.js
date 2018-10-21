import { ADD_ACTIVITY, EDIT_ACTIVITY } from '../actions/projects';

const initialState = {
  id: 0,
  name: '',
  lastIndex: 1,
  activities: [
    {
      id: 1,
      name: 'First Activity',
      duration: 0,
      next: [],
    },
  ],
};

const addNewActivity = (state) => {
  const newState = { ...state };
  newState.lastIndex = state.lastIndex + 1;
  newState.activities.push({
    id: newState.lastIndex,
    name: '',
    duration: 0,
    next: [],
  });
  return newState;
};

const editActivity = (activities, edit) => {
  const editedActivity = activities.find(activity => activity.id === edit.activityId);
  const editedIndex = activities.indexOf(editedActivity);
  const { value } = edit.event.target;
  editedActivity[edit.attributeName] = edit.attributeName === 'next' ? value.split(',') : value;
  return activities.splice(editedIndex, 1, editedActivity);
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return addNewActivity(state);
    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: editActivity(state.activities, action.edit),
      };
    default:
      return state;
  }
};

export default projectsReducer;
