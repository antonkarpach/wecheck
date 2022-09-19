import React from "react";

interface ButtonGroupProps {
  getItemClick: (id: number) => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ getItemClick }) => (
  <div className="inline-flex rounded-md shadow-sm" role="group">
    <button
      type="button"
      className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={() => getItemClick(1)}
    >
      Категории
    </button>
    <button
      type="button"
      className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={() => getItemClick(2)}
    >
      Брэнды
    </button>
    <button
      type="button"
      className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={() => getItemClick(3)}
    >
      Продавцы
    </button>
  </div>
);

export default ButtonGroup;
