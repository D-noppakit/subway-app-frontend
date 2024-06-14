
import * as React from "react";
import "@/app/globals.css";

export default function Subwaytextbox({
  type,
  defaultValue,
  listData = [],
  errorMsg = "Error message"
}) {
  return (
    <div class="w-full">
      <div class="custom-select">
        <select
          id=""
          className={
            "bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full " +
            type
          }
          class=""
          style={{ paddingRight: "30px", width: "240px", height: "48px" }}
          disabled={type == 'disabled' ? true : null}
        >
          {defaultValue &&
            <option id={defaultValue}>
              {defaultValue}
            </option>}
          {listData.map(elm => {
            return (
              <option id={elm.id}>
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
