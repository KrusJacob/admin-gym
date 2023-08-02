import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";

import { useIncStatisticsMutation } from "../api/api.slice";
import { LS_STATISTICS_KEY } from "../store/statistics/statistics";

const AboutPage = () => {
  const statistics = useMemo(() => {
    return JSON.parse(localStorage.getItem(LS_STATISTICS_KEY) ?? "0");
  }, []);

  const [incStatistics] = useIncStatisticsMutation();

  useEffect(() => {
    incStatistics([1, statistics.gym]);
  }, [statistics]);

  return (
    <>
      <Helmet>
        <title>My app</title>
      </Helmet>
      <div className="bg-gym absolute inset-0"></div>
      <div className="pt-[60px] w-full h-screen backdrop-blur-sm  text-white">
        <h1 className="text-[length:calc(var(--index)*4)] mt-6 uppercase text-center animate-occurrence ">
          Title
        </h1>
        <p className="text-[length:calc(var(--index)*1.75)] leading-tight text-center mt-6 p-5 xl:w-4/6 w-5/6 m-auto animate-[occurrence_2s_ease-in-out]">
          Lorem ipsum consectetur, adipisicing elit. A unde eligendi praesentium laudantium hic? Quam, quaerat!
          Quibusdam voluptatem eaque ipsam aliquid.
        </p>

        <div className="m-auto mt-20">
          <p className="text-center text-[length:calc(var(--index)*1)] animate-show">
            Our gym was visited by
            {/* <span className="text-center block m-auto text-blue-800  text-5xl">{statistics[0].value}</span> */}
            <span className="text-center block m-auto text-blue-400 font-medium text-6xl">{statistics.gym}</span>
            people
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
