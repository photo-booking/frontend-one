import {useLocation, useNavigate} from 'react-router-dom';
import './styles.css'
export const ExecutorOrders = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {name, id} = state
    return (
       <div className={'executorOrders-container'}>
           <h1>Заказы исполнителя: {name}</h1>
           <button onClick={() =>  navigate('/catalog')}>Перейти в каталог</button>
           <button onClick={() =>  navigate(`/executor/${id}`, {state: {name, id}})}>Личный кабинет</button>
           <button onClick={() =>  navigate(`/executor/${id}/chat`, {state: { name, id}})}>Чат</button>
       </div>
    )
}
