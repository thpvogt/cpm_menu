import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityRow } from '../../components/TableRow';
import { addActivity, editActivity } from '../../actions/projects';

class FormPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        duration: PropTypes.number,
        next: PropTypes.arrayOf(PropTypes.number),
      }),
    ).isRequired,
  };

  inputChanged = (activityId, event, attributeName) => {
    this.props.dispatch(editActivity({ activityId, event, attributeName }));
    // const { activities } = this.props;
    // const updatedProject = activities.splice(activities.indexOf(project));
    // updatedProject[attributeName] = event.target.value;
  };

  render() {
    const { activities } = this.props;
    return (
      <div>
        <h1>Camilichi Hermosa</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Duración</th>
              <th>Siguientes</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <ActivityRow activity={activity} inputChanged={this.inputChanged} key={activity.id} />
            ))}
          </tbody>
        </table>
        <button type="button" onClick={() => this.props.dispatch(addActivity())}>
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { activities } = state.projects;
  console.log(state);
  return {
    activities,
  };
};

export default connect(mapStateToProps)(FormPage);
