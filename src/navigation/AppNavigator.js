import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../styles/colors";
import HomeScreen from "../screens/HomeScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import ProgressScreen from "../screens/ProgressScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";
import SessionScreen from "../screens/SessionScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          minHeight: 72,
          paddingTop: 8
        },
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          paddingBottom: 6
        },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Inicio: "home-outline",
            Exercicios: "barbell-outline",
            Progresso: "stats-chart-outline",
            Perfil: "person-outline"
          };

          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Exercicios" component={ExercisesScreen} />
      <Tab.Screen name="Progresso" component={ProgressScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: "800" },
          contentStyle: { backgroundColor: colors.background }
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="WorkoutDetail"
          component={WorkoutDetailScreen}
          options={{ title: "Detalhes do treino" }}
        />
        <Stack.Screen
          name="Session"
          component={SessionScreen}
          options={{ title: "Treino em andamento" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
