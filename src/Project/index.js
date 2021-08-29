import React from "react";
import {
  TouchableOpacity,
  TextInput,
  FlatList,
  View,
  Modal,
  RefreshControl,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
} from "@hybrid/core-components";
import { StackNavigator } from "@hybrid/stack-navigator";
import { TabNavigator } from "@hybrid/tab-navigator";
import { Checkbox } from "@hybrid/checkbox";
import { primaryColor } from "@hybrid/colors";
import { DateInput } from "../npms/date-input/src";
import { ExpandIcon, ShrinkIcon } from "../Images/svg";
// import { InstaPic, TickIcon, EyeIcon } from "../Images";

// const imageUrl = "https://picsum.photos/id/237/200/300";

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(i);
}

const ExpandAction = ({ navigation } = {}) => {
  const { getScreenState, setScreenState } = navigation || {};
  const index = navigation.getCurrentViewIndex();
  const activeMQ = navigation.getActiveMQ();
  if (activeMQ === "xs" || activeMQ === "sm" || index === 0) {
    return null;
  }
  const { expanded } = getScreenState && getScreenState();
  return (
    <TouchableOpacity
      onPress={() => {
        setScreenState && setScreenState({ expanded: !expanded });
      }}
    >
      <Image source={expanded ? ShrinkIcon : ExpandIcon} />
    </TouchableOpacity>
  );
};

const CloseAction = ({ navigation } = {}) => {
  const index = navigation && navigation.getCurrentViewIndex();
  const lastIndex = navigation && navigation.getLastViewIndex();
  const activeMQ = navigation.getActiveMQ();
  if (
    activeMQ === "xs" ||
    activeMQ === "sm" ||
    index === 0 ||
    index !== lastIndex
  ) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation && navigation.pop();
      }}
      style={{ width: 100, backgroundColor: "pink" }}
    />
  );
};

const tabNavigatorTheme = {
  tabStyle: {
    containerStyle: ({ tabBarLength }) => {
      if (tabBarLength > 4) {
        return { padding: 18 };
      }
      return {
        padding: 18,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      };
    },
    activeContainerStyle: {
      backgroundColor: "#00000022",
    },
    labelStyle: {
      fontSize: 24,
      color: "white",
    },
    activeLabelStyle: {
      color: "blue",
    },
  },
  containerStyle: {
    borderRadius: 4,
    backgroundColor: "pink",
  },
  tabBarStyle: {
    backgroundColor: "orange",
  },
};

const testData = [];
for (let i = 0; i <= 100; i++) {
  testData.push(`${i}-data`);
}

const TestTabNavigator = TabNavigator({
  actions: [ExpandAction, CloseAction],
  tabPosition: "bottom",
  tabs: {
    test: {
      label: "Test",
      screen: ({ navigation: { push } = {} } = {}) => {
        return (
          <View style={{ flex: 1 }}>
            <ScrollView>
              {testData.map((item) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 20,
                      backgroundColor: "green",
                    }}
                    onPress={() => {
                      push && push({ view: "testing", params: { item } });
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            {/* <TouchableOpacity
              onPress={() => {
                push &&
                  push({
                    view: "testing",
                    params: {
                      activeTab: "demo",
                    },
                  });
              }}
            >
              <Text>test</Text>
            </TouchableOpacity> */}
          </View>
        );
      },
    },
    demo: {
      label: "Demo",
      screen: () => {
        return (
          <View style={{ flex: 1 }}>
            <Text>demo</Text>
          </View>
        );
      },
    },
  },
  theme: tabNavigatorTheme,
});

const TestTabNavigator2 = TabNavigator({
  actions: [ExpandAction, CloseAction],
  tabPosition: "bottom",
  tabs: {
    test: {
      label: "Test",
      screen: ({ navigation: { push, getParams } = {} } = {}) => {
        const { item } = getParams() || {};
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          </View>
        );
      },
    },
    demo: {
      label: "Demo",
      screen: () => {
        return (
          <View style={{ flex: 1, backgroundColor: "grey" }}>
            <Text>demo</Text>
          </View>
        );
      },
    },
  },
  theme: tabNavigatorTheme,
});

const MyNavigation = StackNavigator({
  home: {
    screen: (props) => {
      const { navigation } = props || {};
      return (
        <View
          style={{
            // height: 300,
            // width: 200,
            flex: 1,
            backgroundColor: "red",
            flexDirection: "row",
          }}
        >
          {/* <ActivityIndicator
            size="large"
            style={{ transform: [{ scale: 2 }] }}
          /> */}
          <TouchableOpacity
            onPress={() => {
              navigation?.push &&
                navigation.push({
                  view: "profile",
                  params: {
                    activeTab: "demo",
                    name: "Ankit Patidar",
                    object: {
                      b: [1, 2, 3],
                    },
                  },
                });
            }}
          >
            <Text>{"Go to profile"}</Text>
          </TouchableOpacity>
        </View>
      );
    },
  },
  profile: {
    screen: TestTabNavigator,
    // screen: (props) => {
    //   const { navigation } = props || {};
    //   const { setScreenState, getScreenState } = navigation || {};
    //   return (
    //     <View style={{ flex: 1, backgroundColor: "blue" }}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation?.pop && navigation.pop();
    //         }}
    //       >
    //         <Text>{"Go back to home"}</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         onPress={() => {
    //           setScreenState && setScreenState({ name: "Ayush" });
    //           const state = getScreenState && getScreenState();
    //           console.log("@@@@@@@@@@@state!!>>>>", state);
    //         }}
    //       >
    //         <Text>{"Set get state"}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // },
  },
  testing: {
    screen: TestTabNavigator2,
  },
});

class Project extends React.Component {
  state = { value: null };
  onChangeValue = (value) => {
    this.setState({ value: true });
    setTimeout(() => {
      this.setState({ value: false });
    }, 5000);
  };
  render() {
    const { value } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MyNavigation />
      </View>
    );
  }
}

export { Project };
