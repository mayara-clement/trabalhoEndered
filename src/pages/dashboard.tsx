import React, { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/dadosClientes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados dos clientes");
        }
        return response.json();
      })
      .then((data) => {
        console.log("@@data fetch", data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
  ];

  const getColumnIndex = (day) => {
    return daysOfWeek.indexOf(day) + 1;
  };

  const getRowStart = (time) => {
    const date = new Date(time);
    return date.getHours() - 7; // Adjusting for 8:00 AM start
  };

  return (
    <BaseLayout>
      <div className="calendarSection max-w-7xl mx-auto p-8">
        <div className="calendarNav flex justify-between items-center mb-4">
          <div className="calendarNav__arrows flex">
            <button className="calendarNav__arrow calendarNav__arrow--left p-2">
              <svg
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none">
                <path
                  d="M5.94549 10.8909L1 5.94543L5.94549 0.999947"
                  stroke="black"></path>
              </svg>
            </button>
            <button className="calendarNav__arrow calendarNav__arrow--right p-2">
              <svg
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none">
                <path
                  d="M0.945137 1.00031L5.89062 5.9458L0.945137 10.8913"
                  stroke="black"></path>
              </svg>
            </button>
          </div>
          <div className="calendarNav__times flex space-x-4">
            {[
              "8:00",
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00"
            ].map((time) => (
              <span
                key={time}
                className="calendarNav__time"
                style={{ opacity: 1 }}>
                {time}
              </span>
            ))}
          </div>
        </div>
        <div className="calendarMain grid grid-cols-7 gap-4">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="daysContainer col-span-1 text-center font-bold">
              {day}
            </div>
          ))}
          <div className="eventsContainer col-span-7 grid grid-rows-[repeat(12, minmax(0, 1fr))] gap-4">
            {data.map((event, index) => (
              <div
                key={index}
                className={`paragraph paragraph--type--ir23-card paragraph--view-mode--homepage item bg-blue-100 p-4 rounded-lg shadow-md col-start-${getColumnIndex(
                  new Date(event.dataEmailRecebido).toLocaleString("pt-BR", {
                    weekday: "long"
                  })
                )} row-start-${getRowStart(event.dataEmailRecebido)}`}
                style={{ gridRowEnd: `span 2` }}>
                <span className="item__hour">
                  {new Date(event.dataEmailRecebido).getHours()}:00
                </span>
                <span className="item__title">{event.razaoSocial}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
