import React from "react";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.transactionTable}>
        <thead className={css.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={css.type}>{item.type}</td>
              <td>{Number(item.amount).toFixed(2)}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
