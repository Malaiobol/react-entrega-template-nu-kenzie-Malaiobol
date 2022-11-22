import { useState } from "react";
import { DefaultHeader } from "../Header";
import { NewValue } from "../NewValueForm";
import { ValueList } from "../ValueList";
import { TotalValue } from "../TotalValue";

export function StartedHome({ setLogin }) {
  const [values, setValue] = useState([
    {
      title: "batata",
      amount: 3405,
      type: "saida",
    },
    {
      title: "batata2",
      amount: 34055,
      type: "entrada",
    },
  ]);
  const [filter, setFilter] = useState("todos");

  const filteredValues = values.filter((value) =>
    filter === "todos" ? true : value.type === filter
  );

  function addNewValue(newValue) {
    setValue([...values, newValue]);
  }

  function removeValue(valueName) {
    const newValues = values.filter((value) => value.title !== valueName);
    setValue(newValues);
  }

  return (
    <>
      <DefaultHeader setLogin={setLogin} />
      <div className="flex">
        <div className="separator-containers">
          <NewValue addNewValue={addNewValue} />
          <TotalValue values={values} />
        </div>
        <ValueList
          valueList={filteredValues}
          removeValue={removeValue}
          setFilter={setFilter}
        />
      </div>
    </>
  );
}
