import React from "react";
import {
  TouchableOpacity,
  TextInput,
  FlatList,
  View,
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
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1, backgroundColor: "red" }}
      >
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={`textinput-1=1${index}`} style={{ margin: 20 }}>
              <TextInput
                value={value}
                onChangeText={this.onChangeValue}
                style={{ backgroundColor: "blue" }}
              />
            </View>
          )}
        />
      </TouchableOpacity>
    );
  }
}

export { Project };
