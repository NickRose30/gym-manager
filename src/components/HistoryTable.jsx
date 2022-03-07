import * as React from 'react';
import Table from './Table';

const columns = [
  { id: 'customerFirstName', label: 'Customer First Name', minWidth: 170 },
  { id: 'customerLastName', label: 'Customer Last Name', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 60,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'details',
    label: 'Details',
    align: 'left',
    columnRenderer: ({ value }) => (
      <div
        style={{
          maxWidth: 406,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {value}
      </div>
    )
  },
];

function createData(customerFirstName, customerLastName, date, action, details) {
  return { customerFirstName, customerLastName, date, action, details };
}

const rows = [
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
  createData('John', 'Smith', 'April 5, 2021', 'APPOINTMENT_CHANGED', '12/15/20 11:00am - 11:45am ==> 12/15/20 11:30am - 12:15pm'),
  createData('Nicholas', 'Rose', 'January 1, 2021', 'PAYMENT_SENT', '$64'),
  createData('Cameron', 'Connolly', 'December 11, 2020', 'APPOINTMENT_SCHEDULED', 'Instructor: Joe'),
  createData('Jane', 'Doe', 'July 19, 2019', 'APPOINTMENT_CANCELLED', 'Date of appointment: 8/16/1990'),
  createData('Some', 'Company', 'August 12, 1990', 'INVOICE_SENT', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'),
];

const HistoryTable = ({ onRowClick }) => {
  return (
    <Table
      onRowClick={onRowClick}
      columns={columns}
      rows={rows}
    />
  );
};

export default HistoryTable;