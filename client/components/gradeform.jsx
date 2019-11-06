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

    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleCourseInputChange = this.handleCourseInputChange.bind(this);
    this.handleGradeInputChange = this.handleGradeInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleNameInputChange(e) {
    this.setState({ name: e.currentTarget.value });
  }
  handleCourseInputChange(e) {
    this.setState({ course: e.currentTarget.value });
  }
  handleGradeInputChange(e) {
    this.setState({ grade: e.currentTarget.value });
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
            placeholder="Student Name"
            value={this.state.name}
            onChange={this.handleNameInputChange}
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
            placeholder="Student Course"
            value={this.state.course}
            onChange={this.handleCourseInputChange}
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
            placeholder="Student Grade"
            value={this.state.grade}
            onChange={this.handleGradeInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">{this.state.btnText}</button>
        <button onClick={this.cancelForm} className="btn btn-outline-secondary ml-md-1">Cancel</button>
      </form>
    );
  }
}
