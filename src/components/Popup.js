import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useChangeAbonnementCountMutation } from "../api/api.slice";
import { useActions } from "../hooks/actions";
import { getPopup } from "../store/selectors";

const Popup = () => {
  const [value, setValue] = useState(0);
  const { popup, item } = useSelector(getPopup);
  const { hidePupup, addHistory } = useActions();
  const [changeAbonnementCount] = useChangeAbonnementCountMutation();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const getDate = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  const onAcceptPopup = () => {
    if (!Number.isInteger(+value) || value <= 0) {
      toast.error("Ошибка, введенны некорректные данные", {
        className: "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]",
      });
    } else {
      changeAbonnementCount([item.id, item.abonnementCount + +value]);
      addHistory({ name: item.name, surname: item.surname, inc: true, value: +value, date: getDate() });
      toast.success(`${item.name} ${item.surname} - добавлено посещений: ${value}`, {
        className: "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]",
      });
    }
    hidePupup();

    setValue(0);
  };

  const onClosePopup = () => {
    toast.error("Вы отказались от ввода", {
      className: "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]",
    });
    hidePupup();
    setValue(0);
  };

  return (
    popup && (
      <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center ">
        <div className="border rounded bg-sky-200 dark:bg-sky-900 dark:text-[var(--darkTextGray)] p-5 w-[280px] text-xl animate-hidePopup">
          <p>Введите на какое кол-во посещений пополнить</p>

          <div className="flex justify-between mt-4">
            <input
              className="px-2 py-1 rounded dark:bg-[var(--darkBgSky)] w-2/5"
              type="number"
              value={value}
              onChange={changeHandler}
              min="0"
            ></input>

            <select
              className="px-2 py-1 rounded w-2/5 dark:bg-[var(--darkBgSky)]"
              name="select"
              defaultValue={value}
              onChange={changeHandler}
            >
              <option value={0} disabled>
                ...
              </option>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              onClick={onAcceptPopup}
              className="mt-4 px-2 py-2 w-2/5 rounded text-[16px] bg-green-600 hover:bg-green-800 transition-all text-white"
            >
              Принять
            </button>
            <button
              onClick={onClosePopup}
              className="mt-4 px-2 rounded py-2 w-2/5 text-[16px] bg-red-600  hover:bg-red-800 transition-all text-white"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;

console.log(!Number.isInteger(5));
