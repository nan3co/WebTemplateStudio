import * as React from "react";

import SelectOption from "../SelectOption";

import options from "./optionsData";

class SelectWebApp extends React.Component {
  public render() {
    return (
      <div>
        <SelectOption
          multiSelect={false}
          title="What type of web application are you building?"
          options={options}
        />
      </div>
    );
  }
}

export default SelectWebApp;