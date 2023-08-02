import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/actions";
import { getHistory } from "../store/selectors";
import Clock from "./Clock";

const UserHistory = () => {
  const history = useSelector(getHistory);
  const { cleanHistory } = useActions();

  const onCleanHistory = () => {
    const res = window.confirm("Вы уверены, что хотите очистить историю?");
    if (res) {
      cleanHistory();
    }
  };

  return (
    <div className="mt-5 p-5 border border-black bg-gradient-to-r from-blue-500 to-blue-800  dark:from-sky-800 dark:to-sky-950 shadow-lg">
      <div className="relative flex  justify-between items-center mb-4">
        <Clock />
        <h3 className="text-center text-white dark:text-[var(--darkTextGray)] text-2xl ">История</h3>
        <i
          className="material-icons cursor-pointer ml-5"
          style={{ color: "white" }}
          title="Очистить историю"
          onClick={onCleanHistory}
        >
          delete
        </i>
      </div>
      <div className="border h-[280px]  shadow-inner bg-white py-4 px-2 overflow-y-scroll dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]">
        {history.toReversed().map((item, i) => (
          <p key={i}>
            [{item.date}] {item.name} {item.surname} <Span inc={item.inc} /> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

const Span = ({ inc }) => {
  const clazz = inc ? "text-green-600" : "text-red-600";
  return <span className={clazz}>{inc ? "добавлено" : "использовано"}</span>;
};

export default UserHistory;
