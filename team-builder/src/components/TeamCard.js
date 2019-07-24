import React from 'react';

function TeamCard(props){
  return(
    <div className="teamCard">
      {props.members.map(member => {
        return(
          <div key={member.name}>
            <h1>{member.name}</h1>
            <h4>Nickname: {member.nickName}</h4>
            <h4>Profession: {member.profession}</h4>
            <h4>Hometown: {member.homeTown}</h4>
        </div>
      );
      })}
    </div>
  );
}

export default TeamCard;
