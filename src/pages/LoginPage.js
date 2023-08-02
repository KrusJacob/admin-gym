import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { toast, Toaster } from "react-hot-toast";

import { loginDetails } from "../store/login/login.slice";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [value, setValue] = useState({
    login: "",
    password: "",
  });
  //   const login = useSelector((state) => state.login.login);

  const { loginON } = useActions();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log("renderLogin");
  //     if (login === true) {
  //       navigate("/main");
  //     }
  //   }, []);
  const submitHadler = (e) => {
    e.preventDefault();
    if (loginDetails.login === value.login && loginDetails.password === value.password) {
      loginON();
      navigate("/main");
    } else {
      toast.error("Ошибка, введенны некорректные данные", {
        className: "dark:bg-[var(--darkBgSky)] dark:text-[var(--darkTextGray)]",
      });
    }
  };

  const changeHandler = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="h-screen pt-[60px]">
      <Toaster />
      <div className="m-auto w-[340px] mt-20">
        <h3 className="text-2xl text-center mb-5  dark:text-[var(--darkTextGray)]">Страница для логина</h3>
        <form onSubmit={submitHadler}>
          <input
            value={value.login}
            onChange={changeHandler}
            name="login"
            placeholder="Введите логин"
            type="text"
            className="border-2 w-full mb-2 py-2 px-4 rounded"
          />
          <input
            value={value.password}
            onChange={changeHandler}
            name="password"
            placeholder="Введите пароль"
            type="password"
            className="border-2 w-full mb-2 py-2 px-4 rounded"
          />
          <button
            className="bg-green-500 text-white text-xl w-full py-2 px-4 hover:bg-green-700 transition-all rounded"
            type="submit"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
