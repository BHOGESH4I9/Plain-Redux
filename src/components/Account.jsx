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
              <td>{data.account.name}</td>
              <td>{data.account.accountNumber}</td>
              <td>{data.account.mobile}</td>
              <td>₹{data.account.balance}</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-success mb-3">Transaction Details</h3>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Balance Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((txn, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{txn.amount}</td>
                <td>{txn.balance}</td>
                <td>{txn.type}</td>
                <td>{new Date(txn.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
