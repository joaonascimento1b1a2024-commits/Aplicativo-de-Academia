import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ExerciseRow from "../components/ExerciseRow";
import PrimaryButton from "../components/PrimaryButton";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import { getWorkoutExercises, workouts } from "../data/workouts";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function WorkoutDetailScreen({ navigation, route }) {
  const workout =
    workouts.find(
      (item) => item.id === route.params?.workoutId
    ) || workouts[0];

  const workoutExercises =
    getWorkoutExercises(workout);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Image
        source={{ uri: workout.image }}
        style={styles.image}
      />

      <View style={styles.overlayCard}>
        <Text style={styles.kicker}>
          {workout.subtitle}
        </Text>

        <Text style={styles.title}>
          {workout.title}
        </Text>

        <Text style={styles.description}>
          {workout.description}
        </Text>
      </View>

      <View style={styles.statsGrid}>
        <StatCard
          icon="time-outline"
          value={`${workout.minutes} min`}
          label="duração"
        />

        <StatCard
          icon="flame-outline"
          value={workout.calories}
          label="calorias"
          color={colors.yellow}
        />

        <StatCard
          icon="pulse-outline"
          value={workout.level}
          label="nível"
          color={workout.accent}
        />
      </View>

      <View style={styles.startBox}>
        <PrimaryButton
          label="Iniciar treino"
          icon="play-outline"
          onPress={() =>
            navigation.navigate(
              "Session",
              {
                workoutId: workout.id
              }
            )
          }
        />
      </View>

      <View style={styles.exerciseHeader}>
        <SectionTitle
          title="Sequência do treino"
          action={`${workoutExercises.length} exercícios`}
        />
      </View>

      {workoutExercises.map(
        (exercise, index) => (
          <ExerciseRow
            key={exercise.id}
            exercise={exercise}
            index={index}
          />
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    padding: spacing.md,
    paddingBottom: spacing.xl
  },

  image: {
    width: "100%",
    height: 280,
    borderRadius: 20,
    backgroundColor: colors.surface
  },

  overlayCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: spacing.lg,
    marginTop: -35,
    marginHorizontal: spacing.sm,
    marginBottom: spacing.md
  },

  kicker: {
    color: colors.orange,
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "900",
    marginTop: spacing.xs
  },

  description: {
    color: colors.muted,
    marginTop: spacing.sm,
    lineHeight: 22
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.md
  },

  startBox: {
    marginBottom: spacing.lg
  },

  exerciseHeader: {
    marginBottom: spacing.sm
  }
});