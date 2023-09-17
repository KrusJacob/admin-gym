import React, { useEffect, useState, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../api/api.slice";

import UserItem from "./UserItem";
import Loader from "./Loader";
import { getPageCount, getPagesArray } from "../utils/pages";
import { getSearch } from "../store/selectors";

const UsersList = () => {
  const [limit, setLimit] = useState(24);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const { data: users = [], isLoading } = useGetUsersQuery(limit, page);

  const search = useSelector(getSearch);

  let pagesArray = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);

  const filteredUsers = users.filter((user) => {
    if (search.length === 1) {
      return user.name[0].toLowerCase().includes(search.toLowerCase());
    }

    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.surname.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalCount = useMemo(() => {
    return filteredUsers.length;
  }, [filteredUsers]);

  useEffect(() => {
    setTotalPages(getPageCount(totalCount, limit));
  }, [totalCount, limit]);

  if (!filteredUsers.length && !isLoading) {
    return (
      <>
        <p className="text-center mt-4 text-2xl m-auto dark:text-[var(--darkTextGray)]">Клиентов нету</p>
      </>
    );
  }

  return (
    <div className="w-full mx-auto relative">
      <h3 className="text-center text-4xl dark:text-[var(--darkTextGray)]">Клиенты:</h3>

      {isLoading && <Loader />}

      <ul className="grid gap-x-2.5 gap-y-1 mt-6 justify-items-center grid-cols-userList">
        <TransitionGroup exit={true} component={null}>
          {filteredUsers.map((item, i) => {
            if (limit * page > i && i >= limit * page - limit) {
              return (
                <CSSTransition key={item.id} timeout={400} classNames="user__item">
                  <UserItem item={item} id={i + 1} />
                </CSSTransition>
              );
            }
          })}
        </TransitionGroup>
      </ul>
      <div className="mt-6 flex justify-center">
        {pagesArray.map((item, i) => (
          <button
            onClick={() => setPage(item)}
            key={i}
            className="px-2 py-1 mx-1 border rounded text-xl bg-blue-400 hover:bg-white transition-all dark:bg-sky-800 dark:text-[var(--darkTextGray)] dark:hover:bg-sky-500"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
