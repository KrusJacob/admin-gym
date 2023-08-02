import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";

import useDebounce from "../hooks/debounce";

const UserSearch = () => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);

  const { termChange } = useActions();

  useEffect(() => {
    termChange(debounce);
  }, [debounce]);

  return (
    <div className="mb-4 ">
      <input
        className="border w-full px-4 py-2 rounded dark:bg-slate-800 dark:text-[var(--darkTextGray)]"
        placeholder="Поиск пользователя..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default UserSearch;
