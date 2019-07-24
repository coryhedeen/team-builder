import React, { useState } from 'react';

function Form(props){
  const [newMember, setNewMember] = useState({})

  function changeHandler(event){
    setNewMember({[event.target.name]: event.target.value})
  }

  function submitHandler(event){
    event.preventDefault()
  }

  return(
    <form onSubmit={submitHandler}>
      <fieldset>
        <input
          type="text"
          name="name"
          value={newMember}
          onChange={changeHandler}
        />
      </fieldset>
    </form>
  );
}

export default Form;
