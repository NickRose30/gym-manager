import * as React from 'react';
import Table from './Table';
import { useNavigate } from "react-router-dom";

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

function createData(id, firstName, lastName, phoneNumber, email, location) {
  return { id, firstName, lastName, phoneNumber, email, location };
}

const rows = [
  createData(1, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(2, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(3, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(4, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(5, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(6, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(7, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(8, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(9, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(10, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(11, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(12, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(13, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(14, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
  createData(15, 'John', 'Smith', '(508) 123-4567', 'email@provider.com', 'Boston, MA'),
  createData(16, 'Rachel', 'Smith', '(508) 987-6543', 'other.email@provider.com', 'New York, NY'),
];

const CustomersTable = () => {
  const navigate = useNavigate();
  const onRowClick = ({ id }) => navigate(`/customers/${id}`);
  return (
    <Table
      onRowClick={onRowClick}
      columns={columns}
      rows={rows}
    />
  );
};

export default CustomersTable;