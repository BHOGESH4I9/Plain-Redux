import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameUpdate, mobileUpdate, reset} from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="container mb-4">
      <h4 className="text-danger text-center mb-4">Access Your Bank Account</h4>

      {/* Update Name */}
      <div className="row g-2 align-items-center mb-3">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Update your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success  w-100"
            onClick={() =>{
               dispatch(nameUpdate(name));
               setName("");
              }}
          >
            Update Name
          </button>
        </div>
      </div>

      {/* Deposit Amount */}
      <div className="row g-2 align-items-center mb-3">
        <div className="col-8">
          <input
            className="form-control"
            type="number"
            placeholder="Enter amount to deposit"
            value={amount}
            onChange={(e) =>{setAmount(e.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              dispatch(deposit(amount));
              setAmount("");
            }}
          >
            Deposit
          </button>
        </div>
      </div>

      {/* Withdraw Amount */}
      <div className="row g-2 align-items-center mb-3">
        <div className="col-8">
          <input
            className="form-control"
            type="number"
            placeholder="Enter amount to withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success  w-100"
            onClick={() => {
              dispatch(withdraw(withdrawAmount));
              setWithdrawAmount("");
            }}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Update Mobile Number */}
      <div className="row g-2 align-items-center mb-3">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Update your Mobile Number"
            value={mobile}
            onChange={(e) => {
              const input = e.target.value;
              if (/^\d*$/.test(input)) setMobile(input);
            }}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              dispatch(mobileUpdate(mobile));
              setMobile("");
            }}
          >
            Update Mobile
          </button>
        </div>
      </div>

      <button 
      className="btn btn-danger col-3 mt-2"
      onClick={()=>dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Form;
