import React from "react";
import {
  TouchableOpacity,
  TextInput,
  FlatList,
  View,
  Modal,
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
  state = { value: true };
  onChangeValue = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1, cursor: "default", backgroundColor: "red" }}
      >
        <Modal transparent visible={value}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ value: !value });
            }}
            style={{ flex: 1, backgroundColor: "blue" }}
          />
        </Modal>
        <Modal transparent visible={!value}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ value: !value });
            }}
            style={{ flex: 1, backgroundColor: "green" }}
          />
        </Modal>
        <Checkbox
          value={value}
          tickColor="white"
          style={{ margin: 5 }}
          color={primaryColor}
          onChangeValue={this.onChangeValue}
        />
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
