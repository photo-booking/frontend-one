import {useState} from "react";
import {Preview} from "../../components/Preview";
import './styles.css'
import {useNavigate} from "react-router-dom";

export const CatalogExecutors = () => {
    const navigate = useNavigate()
    const [names, setNames] = useState(['Елена Прекрасная', 'Василиса Премудрая']);
    return (
            <div className={'catalog-container'}>
                <h1>Каталог фотографов и видеооператоров</h1>
                { names.map((name, index) =>
                    <Preview id={index + 1} name={name} key={`card-${index}`}/>
                )}
                <button onClick={() =>  navigate(`/client/${1}`, {state: { name: 'Клиент 1', id: 1 }})}>Личный кабинет клиента</button>
                <button onClick={() =>  navigate(`/executor/${1}`, {state: { name: 'Исполнитель 1', id: 1 }})}>Личный кабинет исполнителя</button>
            </div>

    )
}
