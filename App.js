import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  BudgetScreen,
  AddBudgetScreen,
  TabScreen,
} from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
            <Stack.Screen
              name="Tab"
              component={TabScreen}
              options={{
                header: () => {
                  return null;
                },
              }}
            />
            <Stack.Screen name="Budget" component={BudgetScreen} />
            <Stack.Screen name="AddBudget" component={AddBudgetScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
