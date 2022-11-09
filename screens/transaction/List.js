import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TransactionScreen = ({ navigation }) => {
  const handleAddBudget = () => {
    console.log("test");
  };
  return (
    <View
      style={{
        padding: 18,
      }}
    >
      <Text>Transaction</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddBudget")}
        style={{
          padding: 18,
          backgroundColor: "#ccc",
          borderRadius: 18,
          alignItems: "center",
        }}
      >
        <Text>Add Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionScreen;
