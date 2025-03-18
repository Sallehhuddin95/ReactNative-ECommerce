import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { TextInputProps } from "@/types/components-types/components";

const TextInputComponent = (props: TextInputProps) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={props.value}
          placeholder={props.placeholder}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputComponent;
