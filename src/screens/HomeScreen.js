import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import StudentNameInput from "../components/StudentNameInput";
import WorkoutCard from "../components/WorkoutCard";
import { workouts } from "../data/workouts";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function HomeScreen({ navigation }) {
  const [studentName, setStudentName] = useState("");
  const [savedName, setSavedName] = useState("João Victor");
  const { width } = useWindowDimensions();

  const cardWidth = useMemo(() => {
    if (width >= 900) return 330;
    if (width >= 600) return 300;
    return Math.max(270, width - 56);
  }, [width]);

  function saveName() {
    const name = studentName.trim();

    if (!name) {
      Alert.alert("FitNative", "Digite o nome do aluno antes de salvar.");
      return;
    }

    setSavedName(name);

    Alert.alert(
      "FitNative",
      `Aluno ${name} salvo com sucesso.`
    );
  }

  function openWorkout(workout) {
    navigation.navigate("WorkoutDetail", {
      workoutId: workout.id
    });
  }

  function startWorkout(workout) {
    navigation.navigate("Session", {
      workoutId: workout.id
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          title="Treine como campeão"
          subtitle="Dashboard com treinos, metas e acompanhamento do aluno."
          studentName={savedName}
        />

        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>
            Olá, {savedName} 👋
          </Text>

          <Text style={styles.welcomeText}>
            Pronto para mais um treino hoje?
          </Text>
        </View>

        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1300&q=80"
          }}
          imageStyle={styles.heroImage}
          style={styles.hero}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroKicker}>
              Disciplina | Foco | Constância
            </Text>

            <Text style={styles.heroTitle}>
              FitNative
            </Text>

            <Text style={styles.heroText}>
              Monte seu treino, acompanhe exercícios e evolua com um plano organizado.
            </Text>

            <PrimaryButton
              label="Iniciar treino agora"
              icon="barbell-outline"
              onPress={() => openWorkout(workouts[0])}
            />
          </View>
        </ImageBackground>

        <StudentNameInput
          value={studentName}
          onChangeText={setStudentName}
          onSave={saveName}
        />

        <View style={styles.statsGrid}>
          <StatCard
            icon="flame-outline"
            value="2.450"
            label="kcal queimadas"
          />

          <StatCard
            icon="time-outline"
            value="5h 30m"
            label="tempo total"
            color={colors.yellow}
          />

          <StatCard
            icon="trophy-outline"
            value="12"
            label="treinos feitos"
            color={colors.green}
          />
        </View>

        <SectionTitle
          title="Treinos em destaque"
          action="Arraste para ver"
        />

        <FlatList
          data={workouts}
          horizontal
          contentContainerStyle={{
          paddingRight: spacing.md
}}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <WorkoutCard
              workout={item}
              width={cardWidth}
              onPress={() => openWorkout(item)}
              onStart={() => startWorkout(item)}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    padding: spacing.md,
    paddingBottom: spacing.xl
  },

  welcomeBox: {
    marginBottom: spacing.md
  },

  welcomeTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900"
  },

  welcomeText: {
    color: colors.muted,
    marginTop: 4,
    marginBottom: spacing.sm
  },

  hero: {
    minHeight: 300,
    overflow: "hidden",
    borderRadius: 8,
    marginBottom: spacing.md,
    backgroundColor: colors.surface
  },

  heroImage: {
    borderRadius: 8
  },

  heroOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing.lg,
    backgroundColor: "rgba(0,0,0,0.58)"
  },

  heroKicker: {
    color: colors.yellow,
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: spacing.xs
  },

  heroTitle: {
    color: colors.text,
    fontSize: 44,
    fontWeight: "900"
  },

  heroText: {
    color: colors.muted,
    lineHeight: 21,
    marginBottom: spacing.md,
    maxWidth: 420
  },

  statsGrid: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.lg,
    flexWrap: "wrap"
  }
});