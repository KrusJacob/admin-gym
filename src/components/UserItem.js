import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { useActions } from "../hooks/actions";
import { useDeleteUserMutation, useChangeAbonnementCountMutation } from "../api/api.slice";

const UserItem = ({ item, id }) => {
  const { addHistory, addStatictic, showPupup } = useActions();
  const [showTel, setShowTel] = useState(false);
  const [deleteUser] = useDeleteUserMutation();
  const [changeAbonnementCount] = useChangeAbonnementCountMutation();

  const onUserRemove = () => {
    const res = window.confirm("Вы уверены что хотите удалить пользователя?");
    if (res) {
      deleteUser(item.id);
      toast.success(`${item.name} ${item.surname} успешно удален`);
    }
  };

  const getDate = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  const onDecAbonnementCount = () => {
    if (item.abonnementCount) {
      changeAbonnementCount([item.id, item.abonnementCount - 1]);
      addHistory({ name: item.name, surname: item.surname, inc: false, value: 1, date: getDate() });
      toast.success(`${item.name} ${item.surname} - использовано 1 посещение`, {
        className: "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]",
      });
      addStatictic("gym");
    }
  };
  const onShowPupup = () => {
    showPupup(item);
  };

  const onToggleTel = () => {
    showTel ? setShowTel(false) : setShowTel(true);
  };

  let classCount = "";
  if (!item.abonnementCount) {
    classCount += " text-red-500";
  }
  const classDarkMode =
    "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)] dark:hover:bg-sky-700 dark:border-gray-500 ";
  return (
    <li
      className={
        "w-full relative px-3 py-1.5 border mx-1.5  border-black bg-slate-100  rounded flex justify-between items-center hover:bg-sky-200 shadow-inner hover:shadow-[inset_5px_0_0_rgba(0,0,255,0.5)] transition-all " +
        classDarkMode
      }
    >
      <span onClick={onToggleTel}>
        {id}. {item.name} {item.surname}
        {showTel && <div className="ml-4">{item.tel}</div>}
      </span>

      <p className={classCount}>Посещений: {item.abonnementCount}</p>
      <span>
        <i
          className="material-icons border p-0.5 cursor-pointer hover:bg-red-400 transition-all"
          onClick={onDecAbonnementCount}
          title="Ипользовать одно посещение"
        >
          exposure_neg_1
        </i>
        <i
          className="material-icons cursor-pointer border p-0.5 ml-2 hover:bg-green-400 transition-all"
          onClick={onShowPupup}
          title="Добавить кол-во посещений"
        >
          add
        </i>
      </span>
      <i className="material-icons cursor-pointer" onClick={onUserRemove} title="Удалить клиента">
        delete
      </i>
    </li>
  );
};

export default UserItem;
