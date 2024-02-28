import PropTypes from "prop-types";
import "./CustomerForm.css";
import { useState } from "react";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };

    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
      />

      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;

CustomerForm.propTypes = {
  addNewCustomer: PropTypes.func,
};
