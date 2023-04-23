import React, { useState, ChangeEvent } from 'react';

export interface myProps {
}

export function UseStatePractice() {
  const [email, setEmail] = useState<string>('faisedathil@gmail.com');
  // state update with input
  const [userName, setUserName] = useState<string | null>('');

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      {email}
      <input type="text" onChange={inputHandler} /> <br />
      {userName}
    </div>
  );
}
