import * as React from 'react';
import Table from './Table';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: value => typeof value === 'number' ? value.toFixed(2) : value,
  },
];

function createData(firstName, lastName, phoneNumber, email, location) {
  return { firstName, lastName, phoneNumber, email, location };
}

const rows = [
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData('John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData('Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
];

const CustomersTable = ({ onRowClick }) => {
  return (
    <Table
      onRowClick={onRowClick}
      columns={columns}
      rows={rows}
    />
  );
};

export default CustomersTable;