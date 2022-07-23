import { useState, useEffect } from 'react';
import { phoneList } from '../services/phone';

const HomePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneList().then((phones) => {
      //console.log(phones);
      setPhones(phones.phones);
    });
  }, []);

  return (
    <div>
      <h1>Phone List: </h1>
      {phones.map((phone) => (
        <div>
          <ul key={phone.id}>
            <li>
              <img src={phone.imageFileName} alt={phone.name} />
            </li>
            <li> Phone: {phone.name}</li>
            <li> Description: {phone.description}</li>
            <li> Color: {phone.color}</li>
            <li> Price: {phone.price}</li>
            <li> Processor: {phone.processsor}</li>
            <li> RAM: {phone.ram}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
