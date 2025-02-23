import React from "react";

const UserAvatarImage = (props) => {
  return (
    <div className={`userImg ${props.lg === true && 'lg'}`}>
      <span className="rounded-circle">
        <img src={props.img} alt="logo" />
      </span>
    </div>
  );
};

export default UserAvatarImage;
