import React from 'react'

function ListProps(props) {

    const parties = props.parties;
  const listItems = parties.map((partyname) =>
    <li>{partyname}</li>
  );

  return (
    <div>
        <ol>{listItems}</ol>
    </div>
  )
}

export default ListProps