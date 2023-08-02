import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import UserForm from "../components/UserForm";
import UserHistory from "../components/UserHistory";
import UserSearch from "../components/UserSearch";

import UsersList from "../components/UsersList";
import { getLogin } from "../store/selectors";

const MainPage = () => {
  const login = useSelector(getLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Users page</title>
      </Helmet>
      <Toaster />
      <Popup />
      <div className="bg-main absolute inset-0"></div>
      <div className="flex pt-[60px] px-5 justify-center m-auto relative h-screen">
        <div className="w-[1100px] mt-8">
          <UserSearch />
          <UsersList />
        </div>
        <div className="ml-4 mt-8 w-[400px] min-w-[320px]">
          <UserForm />
          <UserHistory />
        </div>
      </div>
    </>
  );
};

export default MainPage;
