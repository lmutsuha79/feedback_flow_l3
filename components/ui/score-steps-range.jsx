import { useState } from "react";

const ScoreStepsRange = () => {
  const [ratingMinStepRange, setRatingMinStepRange] = useState(0);
  const [ratingMaxStepRange, setRatingMaxStepRange] = useState(5);

  return (
    <div>
      <label
        for="steps-range"
        className="block mb-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        from {ratingMinStepRange} to {ratingMaxStepRange}
      </label>
      <div className="relative w-full h-2">
        <input
          id="steps-range-min"
          type="range"
          min="0"
          max="5"
          onChange={(e) => setRatingMinStepRange(e.target.value)}
          value={ratingMinStepRange}
          step="1"
          className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <input
          id="steps-range-max"
          type="range"
          min="0"
          max="5"
          onChange={(e) => setRatingMaxStepRange(e.target.value)}
          value={ratingMaxStepRange}
          step="1"
          className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default ScoreStepsRange;
