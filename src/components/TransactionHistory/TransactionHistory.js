import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";


export default function TransactionHistory({items}){
  const element =  items.map(item => {
    const { id, type, amount, currency } = item;
  return (<tr key={id} className={css.list}>
    <td className={css.item}>{type}</td>
    <td className={css.item}>{amount}</td>
    <td className={css.item}>{currency}</td>
  </tr>)
});
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={`${css.th} ${css.amount}`}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>
 
  <tbody>
       {element}
      </tbody>
    </table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};