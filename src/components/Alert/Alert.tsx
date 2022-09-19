import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { CustomAny } from "../../utils/generics";
import { randomMsg } from "../../utils/randomMsg";

interface AlertProps {
  loading: boolean;
}
const Alert: React.FC<AlertProps> = ({ loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageId, setMessageId] = useState("");

  const getRandomHint = useCallback(() => {
    let remainingPages = (() => {
      try {
        return JSON.parse(localStorage.getItem("currentRemainingPages") as string);
      } catch (e) {
        return null;
      }
    })();
    if (!Array.isArray(remainingPages) || remainingPages.length == 0)
      remainingPages = Array.from(randomMsg.keys()).slice();

    function randomize() {
      const i = Math.floor(Math.random() * remainingPages.length);
      const [page] = remainingPages.splice(i, 1);
      localStorage.setItem("currentRemainingPages", JSON.stringify(remainingPages));
      setMessageId(page);
    }

    randomize();
  }, []);

  useEffect(() => {
    if (loading) {
      getRandomHint();
    }
    const interval = window.setInterval(() => getRandomHint(), 6000);
    if (!loading) {
      window.clearInterval(interval);
    }
    return () => window.clearInterval(interval);
  }, [getRandomHint, loading]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setIsOpen(false);
    }
  }, [loading]);

  if (!loading) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full">
      <div
        id="toast-success"
        className="flex flex-col p-6 mb-4 w-full max-w-sm text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-2/3 left-1/2 -translate-x-1/2"
        role="alert"
      >
        <div className="flex items-center justify-between w-full border-b-2 mb-5">
          <div className="flex text-sm pb-5 ">
            <svg
              className="animate-spin h-5 w-5 mr-3"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2959 11.4976C21.2959 6.03107 16.8644 1.59961 11.398 1.59961C5.93146 1.59961 1.5 6.03107 1.5 11.4976C1.5 16.964 5.93146 21.3955 11.398 21.3955"
                stroke="#219653"
                strokeWidth="3"
              />
            </svg>
            Идет загрузка данных
          </div>
        </div>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center w-full font-medium text-left text-black"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <div
                className="inline-flex justify-center items-center w-3.5 h-3.5 rounded-sm text-sm font-serif text-black border-gray border mr-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "-" : "+"}
              </div>
              <span>А вы знали?</span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={classNames(!isOpen && "hidden")}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <p id="intro" className="mb-2 text-gray-500 dark:text-gray-400">
              {randomMsg[messageId as CustomAny]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
