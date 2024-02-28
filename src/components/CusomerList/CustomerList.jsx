import PropTypes from "prop-types";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

// const customerData = [
//   {
//     id: 1,
//     customerName: "Ali Keser",
//   },

//   {
//     id: 2,
//     customerName: "Sibel Gül",
//   },

//   {
//     id: 3,
//     customerName: "Ahmet Kaya",
//   },

//   {
//     id: 4,
//     customerName: "Durmuş Göktürk",
//   },
// ];

function CustomerList({ customers, setCustomers }) {
  //! delete customer
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          key={customer.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default CustomerList;

CustomerList.propTypes = {
  customers: PropTypes.array,
  setCustomers: PropTypes.func,
};
