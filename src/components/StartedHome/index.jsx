import { useState } from "react";
import { DefaultHeader } from "../Header";
import { NewValue } from "../NewValueForm";
import { ValueList } from "../ValueList";

export function StartedHome({ setLogin }) {
  const [values, setValue] = useState([]);
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
        <NewValue addNewValue={addNewValue} />
        <ValueList
          valueList={filteredValues}
          removeValue={removeValue}
          setFilter={setFilter}
        />
      </div>
    </>
  );
}
