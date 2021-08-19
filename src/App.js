import React from "react";
import { TouchableOpacity, View } from "@hybrid/core-components";
import { Project } from "./Project";
import { Image } from "@hybrid/core-components";
import { Tick } from "@hybrid/icons";

const CheckBox = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props?.onChangeValue && props.onChangeValue(!props?.value);
      }}
      style={{
        width: 40,
        height: 40,
        cursor: "pointer",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 4,
        padding: 2,
      }}
    >
      {props?.value ? (
        <Image source={Tick} style={{ width: "100%", height: "100%" }} />
      ) : (
        void 0
      )}
    </TouchableOpacity>
  );
};

const App = () => {
  const [value, setValue] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <CheckBox
        onChangeValue={(value) => {
          setValue(value);
        }}
        value={value}
      />
      <Project />
    </View>
  );
};

export default App;
