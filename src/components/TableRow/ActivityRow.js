import React from 'react';
import PropTypes from 'prop-types';

const ActivityRow = ({ activity, inputChanged }) => (
  <tr>
    <td>{activity.id}</td>
    <td>
      <input
        type="text"
        value={activity.name}
        onChange={event => inputChanged(activity.id, event, 'name')}
      />
    </td>
    <td>
      <input
        type="number"
        value={activity.duration}
        onChange={event => inputChanged(activity.id, event, 'duration')}
      />
    </td>
    <td>
      <input
        type="text"
        value={activity.next.join(',')}
        onChange={event => inputChanged(activity.id, event, 'next')}
      />
    </td>
  </tr>
);

ActivityRow.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    duration: PropTypes.number,
    next: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  inputChanged: PropTypes.func.isRequired,
};

export default ActivityRow;
