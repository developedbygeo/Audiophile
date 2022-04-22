import { v4 as uuid } from 'uuid';

const checkoutData = {
  billing: [
    { field: 'Name', placeholder: 'Alexei Ward', type: 'text', id: uuid() },
    { field: 'Email Address', placeholder: 'alexeiward@mail.com', type: 'email', id: uuid() },
    { field: 'Phone Number', placeholder: '+1 202-555-0136', type: 'text', id: uuid() }
  ],
  shipping: [
    { field: 'Your Address', placeholder: '1137 Williams Avenue', type: 'text', id: uuid() },
    { field: 'Zip Code', placeholder: '10001', type: 'text', id: uuid() },
    { field: 'City', placeholder: 'New York', id: uuid() },
    { field: 'Country', placeholder: 'United States', id: uuid() }
  ]
};

export default checkoutData;
