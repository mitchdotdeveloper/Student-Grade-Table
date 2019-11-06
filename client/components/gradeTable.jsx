import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  if (props.grades.length) {
    return (
      <table className="table table-striped col-md-7">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th className="text-right">Operations</th>
          </tr>
        </thead>
        <tbody>{props.grades.map(student => <Grade key={student.id} student={student} removeStudent={props.removeStudent} updateStudent={props.updateStudent}/>)}</tbody>
      </table>
    );
  }
  return (
    <table className="table col-md-7">
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Name</th>
          <th style={{ width: '20%' }}>Course</th>
          <th style={{ width: '20%' }}>Grade</th>
          <th style={{ width: '20%' }} className="text-right">Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No Grades recorded</td>
        </tr>
      </tbody>
    </table>
  );

}
