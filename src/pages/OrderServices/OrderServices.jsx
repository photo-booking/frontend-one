import './OrderServices.css';
import oredersNull from '../../images/orders_null.svg';
import { Orders } from '../../components/Orders/Orders';

export const OrderServices = () => {
  const orders = [1, 2];
  return (
    <div className="order-servises">
      {orders.length === 0 ? (
        <img
          src={oredersNull}
          alt="is not order"
        />
      ) : (
        <Orders />
      )}
    </div>
  );
};
