import { v4 as uuid } from 'uuid';

const checkoutData = {
  billing: [
    {
      field: 'Name',
      fieldName: 'name',
      placeholder: 'Alexei Ward',
      type: 'text',
      id: uuid(),
      validation: '^[a-zA-Z\\s]*$'
    },
    {
      field: 'Email Address',
      fieldName: 'email',
      placeholder: 'alexeiward@mail.com',
      type: 'email',
      id: uuid(),
      validation: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
    },
    {
      field: 'Phone Number',
      fieldName: 'phone',

      placeholder: '1 202 555 0136',
      type: 'text',
      id: uuid(),
      validation: '^[0-9]+$'
    }
  ],
  shipping: [
    {
      field: 'Your Address',
      fieldName: 'address',
      placeholder: '1137 Williams Avenue',
      type: 'text',
      id: uuid(),
      validation: '^[a-zA-Z0-9\\s]+$'
    },
    {
      field: 'Zip Code',
      fieldName: 'zip',
      placeholder: '10001',
      type: 'text',
      id: uuid(),
      validation: '^[0-9]+$'
    },
    {
      field: 'City',
      fieldName: 'city',
      placeholder: 'New York',
      type: 'text',
      id: uuid(),
      validation: '[a-zA-Z\\s]+'
    },
    {
      field: 'Country',
      fieldName: 'country',
      placeholder: 'United States',
      type: 'text',
      id: uuid(),
      validation: '[a-zA-Z]+'
    }
  ]
};

export default checkoutData;
