import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { getLogin } from "../store/selectors";

import Switcher from "./Switcher";

const Navigation = () => {
  const login = useSelector(getLogin);
  const { loginOFF } = useActions();
  const navigate = useNavigate();

  const onLoginOFF = () => {
    const res = window.confirm("Вы уверены что хотите выйти из аккаунта?");
    if (res) {
      loginOFF();
      navigate("/");
    }
  };
  return (
    <div className="flex justify-between items-center absolute top-0 drop-shadow-lg text-white px-6 py-2 h-[60px] bg-gradient-to-r from-cyan-600 to-blue-800 w-full z-10">
      <h3 className="text-3xl">Logo</h3>
      <span>
        {login && (
          <button onClick={onLoginOFF} className="text-xl mr-10" title="Выйти из аккаунта">
            Выйти
          </button>
        )}
        <NavLink
          className={({ isActive }) => (isActive ? "opacity-100 border-b" : "opacity-75") + " text-xl mr-10"}
          to={login ? "/main" : "/login"}
        >
          Клиенты
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "opacity-100 border-b" : "opacity-75") + " text-xl mr-10"}
          to="/"
        >
          Главная
        </NavLink>
        <Switcher />
      </span>
    </div>
  );
};

export default Navigation;
