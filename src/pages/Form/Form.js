import React, { Component } from 'react';
import { ProjectRow } from '../../components/TableRow';

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 1,
          name: 'Test',
          duration: 0,
          next: [],
        },
      ],
    };
  }

  inputChanged = (project, event, attributeName) => {
    const updatedProject = this.state.projects.splice(this.state.projects.indexOf(project));
    updatedProject[attributeName] = event.target.value;
    this.setState({ projects: this.state.projects.push(updatedProject) });
  };

  render() {
    const rows = this.state.projects;
    return (
      <div>
        <table>
          <thead>
            <th>#</th>
            <th>Nombre</th>
            <th>Duración</th>
            <th>Siguientes</th>
          </thead>
          <tbody>
            {rows.forEach(project => (
              <ProjectRow project={project} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormPage;
