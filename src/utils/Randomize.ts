import { randomMsg } from "./randomMsg";

let remainingFilters = (() => {
  try {
    return JSON.parse(localStorage.getItem("currentRemainingFilters") as string);
  } catch (e) {
    return null;
  }
})();
if (!Array.isArray(remainingFilters) || remainingFilters.length == 0)
  remainingFilters = Array.from(randomMsg.keys()).slice();

export const randomize = (setMessageId: (page: string) => void) => {
  const i = Math.floor(Math.random() * remainingFilters.length);
  const [page] = remainingFilters.splice(i, 1);
  localStorage.setItem("currentRemainingFilters", JSON.stringify(remainingFilters));
  setMessageId(page);
};
