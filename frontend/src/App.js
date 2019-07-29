import React from 'react';
// import { Calendars } from './Components/Calendars/Calendar';
// import { LocaleProvider } from 'antd'
// import pt_BR from 'antd/lib/locale-provider/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import {LoggingAccount} from './Pages/Login'

moment.locale('pt-br');

function App() {
  return(
  <LoggingAccount/>
  );
}

export default App;
