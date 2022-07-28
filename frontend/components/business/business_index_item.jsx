import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = props => (
  <li className='businessItem' >
    <h3 className='testclass' >indextItem</h3>
    <Link to={`/businesses/${props.bsn.id}`}>{props.bsn.name}</Link>
    <Link to={`/businesses/${props.bsn.id}/edit`}>Edit</Link>
    <button onClick={() => props.getBusiness(props.bsn.id)}>show page</button>
  </li>
);

export default BusinessIndexItem;
