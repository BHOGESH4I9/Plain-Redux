import { useSelector } from "react-redux";

const Account = () => {
  let data = useSelector((state) => {
    return state;
  });

  return (
    <>
      <div className="container text-center">
        <h3 className="text-success mb-3">Account Details</h3>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>Account Number</th>
              <th>Mobile</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.accountNumber}</td>
              <td>{data.mobile}</td>
              <td>₹{data.balance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
