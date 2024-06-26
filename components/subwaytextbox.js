
import * as React from "react";
import "@/app/globals.css";

export default function Subwaytextbox({
  type,
  defaultValue,
  listData = [],
  errorMsg = "Error message",
  onChange = () => {},
  selectedValue
}) {

  return (
    <div className="w-full">
      <div className="custom-select">
        <select
        value={selectedValue}
          onChange = {onChange}
          className={
            "bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full " +
            (type ? type:'')
          }
          style={{ paddingRight: "30px", width: "240px", height: "48px" }}
          disabled={type == 'disabled' ? true : null}
        >
          {defaultValue &&
            <option key={defaultValue} id={defaultValue}>
              {defaultValue}
            </option>}
          {listData.map(elm => {
            return (
              <option key={elm.id} id={elm.id}>
                {elm.value}
              </option>
            );
          })}
        </select>
      </div>
      {errorMsg &&
        type == "error" &&
        <div className={"error-msg"}>Error message</div>}
      {errorMsg &&
        type == "success" &&
        <div className={"success-msg"}>success message</div>}
    </div>
  );
}
