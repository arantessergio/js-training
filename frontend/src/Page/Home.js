import React from 'react';
import { Calendars } from '../Components/Calendars/Calendar';
import { LocaleProvider, Button } from 'antd'
import pt_BR from 'antd/lib/locale-provider/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Link } from 'react-router-dom'
import { TodoProvider } from '../Hooks/TarefaContext';

moment.locale('pt-br');

export const Home = () => {

  return (
      <>
        <Calendars/>
        <Link to="/novatarefa"><Button>+</Button></Link>
        <Link to="/tarefas"><Button>Mostrar tarefas</Button></Link>
      </>
  )
}
