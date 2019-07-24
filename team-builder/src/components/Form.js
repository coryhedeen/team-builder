import React, { useState } from 'react';
import TeamCard from './TeamCard';

function Form(props){
  const [newMember, setNewMember] = useState({name: "", nickName: "", profession: "", homeTown:""})
  const [memberArray, setMemberArray] = useState([]);

  function changeHandler(event){
    setNewMember({...newMember, [event.target.name]: event.target.value})
    console.log(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault()
    setMemberArray([...memberArray, newMember])
  }


  return(
    <div className="form">
    <TeamCard members={memberArray}/>
    <form onSubmit={submitHandler}>
      <fieldset>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={newMember.name}
            onChange={changeHandler}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
        Nickname
          <input
            type="text"
            name="nickName"
            value={newMember.nickName}
            onChange={changeHandler}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
        Profession
          <input
            type="text"
            name="profession"
            value={newMember.profession}
            onChange={changeHandler}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
        Hometown
          <input
            type="text"
            name="homeTown"
            value={newMember.homeTown}
            onChange={changeHandler}
          />
        </label>
      </fieldset>
      <input
        type="submit"
        value="submit"
      />
    </form>
    </div>
  );
}

export default Form;
