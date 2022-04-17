import CostForm from "./CostForm";
import "./NewCost.css";
import React, { useState } from "react";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <div className='new-cost'>
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
