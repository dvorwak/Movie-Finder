import React from "react";

/*
  This is a copy of a component from react-table that is not exported.
  Adding so we can extend functionality of pagination next and prev
  buttons
*/

export const DefaultButton = (props: any) => (
  <button type='button' {...props} className='-btn'>
    {props.children}
  </button>
);
