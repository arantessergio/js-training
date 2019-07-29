import React from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";

export const Calendars = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
      <Calendar onPanelChange={onPanelChange} />
  );
};
