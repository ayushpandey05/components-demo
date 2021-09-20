import React from "react";
import {
  Pressable,
  View,
  Text,
  ActivityIndicator,
} from "@react-easy-ui/core-components";
import {
  hooks,
  resolveJson,
  deepMerge,
} from "@react-easy-ui/utility-functions";
const {
  useMultiState,
  useDidMount,
  useDidUnmount,
  usePrevious,
  useDidUpdate,
  useState,
  useEffect,
} = hooks;
const DemoComponent = (props) => {
  const { visible } = props || {};
  const prevProps = usePrevious(props);
  useDidMount(() => {
    console.log("@@@@@@@@@@@mount");
  });
  useDidUnmount(() => {
    console.log("@@@@@@@@@@@unmount", prevProps?.visible, props?.visible);
  });
  useDidUpdate((prevProps) => {
    console.log(
      "@@@@change!!>>>",
      prevProps,
      props,
      deepMerge(
        { a: { a: [{ a: 2 }, { b: 3 }] } },
        { a: { a: [{ b: 2 }, { c: 3 }] } }
      ),
      resolveJson({ a: [{ b: 2 }, { d: 3 }] }, "")
    );
  }, props);
  if(!visible){
    return null
  }
  return (
    <View>
      <Text>Demo Component</Text>
    </View>
  );
};
const Home = () => {
  const [state, setState] = useMultiState({ visible: false });
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <ActivityIndicator />
      <Pressable
        onPress={() => {
          setState({ visible: !state?.visible }, ()=>{
            console.log('@@@callback working!>>')
          });
        }}
        android_ripple={{ color: "black" }}
      >
        <Text>hello</Text>
      </Pressable>
      <DemoComponent visible={state?.visible} />
      {/* {state?.visible ? <DemoComponent /> : void 0} */}
    </View>
  );
};

export default Home;
