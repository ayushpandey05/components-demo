import React from "react";
import {
  // View,
  // Image,
  TouchableOpacity,
  // ScrollView,
  FlatList,
  Text,
  // ActivityIndicator,
} from "@hybrid/core-components";
import { Checkbox } from "@hybrid/checkbox";
import { primaryColor } from "@hybrid/colors";
// import { InstaPic, TickIcon, EyeIcon } from "../Images";

// const imageUrl = "https://picsum.photos/id/237/200/300";

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(i);
}
class Project extends React.Component {
  state = { value: null };
  onChangeValue = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <TouchableOpacity activeOpacity={1} style={{ flex: 1 }}>
        <Checkbox
          color={primaryColor}
          tickColor={"white"}
          onChangeValue={this.onChangeValue}
          value={value}
          shape='circular'
        />
        <FlatList
          renderItem={({ item, index } = {}) => {
            return (
              <TouchableOpacity
                key={`test-list-${index}`}
                style={{
                  margin: 10,
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
          data={data}
          style={{ flex: 1, backgroundColor: "blue" }}
        />
        {/* <ActivityIndicator size="large" />
        <ActivityIndicator /> */}
      </TouchableOpacity>
    );
  }
}

export { Project };
