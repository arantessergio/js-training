import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Calendar, Badge } from 'antd';
import { TodoCtx } from '../../Hooks/TarefaContext'

export const Calendars = () => {
	const ctx = useContext(TodoCtx)

	const getListData = (value) => {
		let listData;	
		let ano, mes, dia
		ctx.todoList.map(i => {
			let e = new Date(i.time)
			dia = e.getDate()
			dia += 1
			mes = e.getMonth()
			ano = e.getFullYear()
			if(value.date() === dia && value.month() === mes && value.year() === ano) {
				listData = [
					{ type: 'success', content: i.description },
				]
			}
		})
		return listData || [];
	}

	function dateCellRender(value) {
		const listData = getListData(value);
		return (
			<ul className="events">
				{listData.map(item => (
					<div key={item.content}>
						<Badge status={item.type} text={item.content} />
					</div>
				))}
			</ul>
		);
	}

	function getMonthData(value) {
		if (value.month() === 8) {
			return 1394;
		}
	}

	function monthCellRender(value) {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	}

	function onPanelChange(value, mode) {
		console.log(value, mode);
	}
	return (
		<Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
	);
};