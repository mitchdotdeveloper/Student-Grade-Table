import React from 'react';

export default function Header(props) {
  return (
    <div className="row">
      <h1 className="col-8">{props.title}</h1>
      <h2 className="col-md-4">Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h2>
    </div>
  );
}
