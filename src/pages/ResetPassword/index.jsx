import { useNavigate} from 'react-router-dom';
import './styles.css'
export const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <div className={'resetPassword-container'}>
            <button onClick={() =>  navigate('/sign-in')}>Назад</button>
            <h1>Забыли пароль</h1>
        </div>
    )
}
