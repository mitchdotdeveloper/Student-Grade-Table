import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      student: null
    };

    this.addStudent = this.addStudent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
    this.setStudent = this.setStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades: grades }));
  }

  getAverageGrade() {
    let gradeTotal = this.state.grades.reduce((acc, student) => acc + student.grade, 0);
    return gradeTotal ? Math.round(gradeTotal / this.state.grades.length) : '--';
  }

  addStudent(student) {
    student.grade = parseFloat(student.grade);
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    })
      .then(res => res.json())
      .then(grade => {
        let grades = this.state.grades.slice();
        grades.push(grade);
        this.setState({ grades: grades });
      });
  }

  removeStudent(id) {
    fetch(`/api/grades/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        let grades = this.state.grades.filter(item => item.id !== id);
        this.setState({ grades: grades });
      });
  }

  setStudent(student) {
    this.setState({ student: student });
  }

  updateStudent(student) {
    if (student) {
      student.grade = parseFloat(student.grade);
      fetch(`/api/grades`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
      })
        .then(res => res.json())
        .then(item => {
          let index = this.state.grades.findIndex(grade => grade.id === item.id);
          let grades = this.state.grades.slice();
          grades[index] = item;
          this.setState({ grades: grades });
        });
    } else {
      this.setState({ student: null });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header title="Student Grade Table" averageGrade={this.getAverageGrade()}/>
        <div className="row">
          <GradeTable grades={this.state.grades} removeStudent={this.removeStudent} updateStudent={this.setStudent}/>
          <div className="col-md-5">
            <h3 className="col-md-6">Add Student</h3>
            <GradeForm submit={this.addStudent} student={this.state.student} updateStudent={this.updateStudent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
