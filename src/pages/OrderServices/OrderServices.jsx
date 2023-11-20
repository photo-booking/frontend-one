import './OrderServices.css';
import oredersNull from '../../images/orders_null.svg';

export const OrderServices = () => {
  const orders = [];
  return (
    <div className="orders">
      {orders.length === 0 ? (
        <img
          src={oredersNull}
          alt="is not order"
        />
      ) : (
        <p>Orders</p>
      )}
    </div>
  );
};
