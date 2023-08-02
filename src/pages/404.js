import React from "react";
import { useNavigate } from "react-router-dom";

import img404 from "./img__404.png";

const Page_404 = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[60px] w-full h-screen">
      <p className="text-center text-3xl mt-12 dark:text-[var(--darkTextGray)]">Такой страницы не существует</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white hover:bg-blue-300 hover:text-black hover:border-black transition-all m-auto block rounded border"
      >
        На главную
      </button>
      <img src={img404} alt="404" className="m-auto mt-12 w-2/5" />
    </div>
  );
};

export default Page_404;
