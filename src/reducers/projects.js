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
    },
  ],
};

const addNewActivity = (state) => {
  const newState = { ...state };
  newState.activities.push({ id: state.lastIndex, name: '', duration: 0 });
  newState.lastIndex = state.lastIndex + 1;
  return newState;
};

const editActivity = (activities, edit) => {
  const editedActivity = activities.find(activity => activity.id === edit.activityId);
  const editedIndex = activities.indexOf(editedActivity);
  editedActivity[edit.field] = edit.value;
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
