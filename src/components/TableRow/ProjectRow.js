import React from 'react';
import PropTypes from 'prop-types';

const ProjectRow = ({ project, inputChanged }) => (
  <tr>
    <td>{project.id}</td>
    <td>
      <input
        type="text"
        value={project.name}
        onChange={event => inputChanged(project.id, event, 'name')}
      />
    </td>
    <td>{project.duration}</td>
    <td>{project.next}</td>
  </tr>
);

ProjectRow.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    duration: PropTypes.number,
    next: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  inputChanged: PropTypes.func.isRequired,
};

export default ProjectRow;
