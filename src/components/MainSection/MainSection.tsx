import React from "react";
import Filters from "../Filters/Filters";
import { IMAGES } from "../../utils/images";
import Card from "../Card/Card";

const MainSection: React.FC = () => (
  <main>
    <Filters />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="h-full rounded-lg border-4 border-dashed border-gray-200 p-8">
          {IMAGES.map((i, key) => (
            <Card image={i} key={key} />
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default MainSection;
