import React, {useState} from 'react'


interface IProps {
    addTodoList: (title: string ) => void;
}

export const TodoInput:React.FC<IProps> = ({addTodoList}) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={e => {
                addTodoList(value)
                setValue('')
            }}>+
            </button>
        </div>
    );
};
