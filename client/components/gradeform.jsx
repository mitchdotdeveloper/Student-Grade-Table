import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      id: '',
      btnText: 'Add'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleInputChange({ target: { name, value } }) {
    let student = { ...this.state };
    student[name] = value;
    this.setState(student);
  }

  componentDidUpdate(prevProps) {
    if (this.props.student !== prevProps.student && this.props.student) {
      this.setState({
        name: this.props.student.name,
        course: this.props.student.course,
        grade: this.props.student.grade,
        id: this.props.student.id,
        btnText: 'Update'
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    if (this.props.student) {
      this.props.updateStudent({
        name: this.state.name,
        course: this.state.course,
        grade: this.state.grade,
        id: this.state.id
      });
    } else {
      this.props.submit({
        name: this.state.name,
        course: this.state.course,
        grade: this.state.grade,
        id: this.state.id
      });
    }
    this.setState({
      name: '',
      course: '',
      grade: '',
      id: '',
      btnText: 'Add'
    });
  }
  cancelForm(e) {
    e.preventDefault();
    this.props.updateStudent(null);
    this.setState({
      name: '',
      course: '',
      grade: '',
      id: '',
      btnText: 'Add'
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="col-md-10">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-user"></i></div>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Student Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-list-alt"></i></div>
          </div>
          <input
            type="text"
            className="form-control"
            name="course"
            placeholder="Student Course"
            value={this.state.course}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className="fas fa-graduation-cap"></i></div>
          </div>
          <input
            type="number"
            className="form-control"
            name="grade"
            placeholder="Student Grade"
            value={this.state.grade}
            onChange={this.handleInputChange}
            min="0"
            max="110"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">{this.state.btnText}</button>
        <button onClick={this.cancelForm} className="btn btn-outline-secondary ml-md-1">Cancel</button>
      </form>
    );
  }
}
