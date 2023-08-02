import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";
import { useActions } from "../hooks/actions";
import { useCreateUserMutation } from "../api/api.slice";

const UserForm = () => {
  const [value, setValue] = useState({
    name: "",
    surname: "",
    tel: "",
    abonnementCount: "",
  });

  const [createUser, { isLoading }] = useCreateUserMutation();

  const changeHandler = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onUserCreate = (e) => {
    e.preventDefault();

    if (isNaN(value.name.trim()) && isNaN(value.surname.trim())) {
      const newUser = {
        id: uuidv4(),
        name: value.name.trim(),
        surname: value.surname.trim(),
        tel: value.tel,
        abonnementCount: +value.abonnementCount,
      };

      createUser(newUser);
      toast.success(`${value.name} ${value.surname} добавлен`);

      setValue((prev) => ({ ...prev, name: "", surname: "", tel: "", abonnementCount: "" }));
    }
  };

  const classDarkMode = "dark:from-sky-800 dark:to-sky-950";

  return (
    <div className="border  border-black bg-gradient-to-r from-blue-500 to-blue-800 dark:from-sky-800 dark:to-sky-950 p-5 h-min shadow-lg">
      <h3 className="text-center text-2xl mb-4  text-white dark:text-[var(--darkTextGray)]">Новый клиент</h3>
      <form onSubmit={onUserCreate}>
        <input
          value={value.name}
          onChange={changeHandler}
          required
          placeholder="Имя"
          className="border-2 w-full mb-2 py-2 px-4 rounded  focus:invalid:border-red-500 valid:border-green-500  dark:bg-slate-800 dark:text-[var(--darkTextGray)]"
          type="text"
          name="name"
          pattern="^\D\w{1,16}"
        />
        <input
          value={value.surname}
          onChange={changeHandler}
          required
          placeholder="Фамилия"
          className="border-2 w-full mb-2  py-2 px-4 rounded  focus:invalid:border-red-500  valid:border-green-500  dark:bg-slate-800 dark:text-[var(--darkTextGray)]"
          type="text"
          name="surname"
          pattern="\D\w{1,16}"
        />
        <input
          value={value.tel}
          onChange={changeHandler}
          placeholder="Номер телефона"
          className="border-2 w-full mb-2  py-2 px-4 rounded  focus:invalid:border-red-500  valid:border-green-500  dark:bg-slate-800 dark:text-[var(--darkTextGray)]"
          type="tel"
          name="tel"
          pattern="\+\d\d\d\s\d\d\s\d\d\d\s\d\d\s\d\d"
        />
        <input
          value={value.abonnementCount}
          onChange={changeHandler}
          required
          placeholder="Кол-во посещений"
          className="border-2 w-full  mb-2  py-2 px-4 rounded  focus:invalid:border-red-500  valid:border-green-500  dark:bg-slate-800 dark:text-[var(--darkTextGray)]"
          type="number"
          min="0"
          name="abonnementCount"
          pattern="\d"
        />
        <button
          className="bg-green-500 text-white text-xl w-full py-2 px-4 hover:bg-green-700 transition-all rounded"
          type="submit"
        >
          Создать
        </button>
      </form>
    </div>
  );
};

export default UserForm;
