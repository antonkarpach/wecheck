import React, { useCallback, useState } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import { filterImages } from "../../utils/FilterImages";

const Filters = () => {
  const [currentItemId, setCurrentItemId] = useState(1);
  const [loading, setLoading] = useState(false);

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function delay(id: number) {
    return new Promise((res, rej) => setTimeout(id ? res : rej, getRandomArbitrary(12000, 30000), id));
  }

  function mockFetch(id: number) {
    return delay(id);
  }

  const handleCurrentItemId = useCallback(
    async (id: number) => {
      setLoading(true);
      const result = await mockFetch(id);
      setCurrentItemId(result as number);
      setLoading(false);
    },
    [mockFetch]
  );
  return (
    <>
      <div className="flex items-center flex-wrap bg-gray-200 min-h-16 py-6 px-4 child:ml-4 lg:child:mb-0 child:mb-3">
        <ButtonGroup getItemClick={handleCurrentItemId} />
        <Button text="Тренды" onClick={() => handleCurrentItemId(4)} />
        <Button text="Склады" onClick={() => handleCurrentItemId(5)} />
        <Button text="Ценовая сегментация" onClick={() => handleCurrentItemId(6)} />
        <Button text="По дням" onClick={() => handleCurrentItemId(7)} />
      </div>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="h-full rounded-lg border-4 border-dashed border-gray-200 p-8">
            <img src={filterImages[currentItemId - 1]} alt="" />
          </div>
        </div>
      </div>
      <Alert loading={loading} />
    </>
  );
};

export default Filters;
