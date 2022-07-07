import React from 'react';
import { Link } from 'react-router-dom';

/*
1. A link to the post's show page with text of the post's title
2. A link to the post's edit page with text 'Edit'.
3. A button to delete the post.
*/

const BusinessIndexItem = props => (
  <li>
    <h3>indextItem</h3>
    <Link to={`/businesses/${props.bsn.id}`}>{props.bsn.name}</Link>
    <Link to={`/businesses/${props.bsn.id}/edit`}>Edit</Link>
    <button onClick={() => props.getBusiness(props.bsn.id)}>show page</button>
  </li>
);

export default BusinessIndexItem;
