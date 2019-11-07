import React from 'react';

export default function Grade(props) {
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.course}</td>
      <td>{props.student.grade}</td>
      <td className="text-right">
        <div className="btn-group">
          <button type="button" className="btn btn-light" onClick={() => props.updateStudent(props.student)}>Update</button>
          <button type="button" className="btn btn-danger" onClick={() => props.removeStudent(props.student.id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
}
