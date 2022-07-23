import React, { useState, useEffect } from 'react';
import { phonesList } from '../services/phones';

const PhonePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phonesList().then((data) => {
      setPhones(data);
    });
  }, []);

  return (
    <div>
      <h1>Phone list: </h1>

      {phones.map((phone) => (
        <div>
          <ul key={phone.id}>
            <li> Phone: {phone.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PhonePage;
