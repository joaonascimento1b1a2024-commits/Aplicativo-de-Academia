import { useMemo, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { getWorkoutExercises, workouts } from "../data/workouts";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function SessionScreen({ navigation, route }) {
  const workout =
    workouts.find(
      (item) => item.id === route.params?.workoutId
    ) || workouts[0];

  const workoutExercises = useMemo(
    () => getWorkoutExercises(workout),
    [workout]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentExercise =
    workoutExercises[activeIndex];

  const progress =
    ((activeIndex + (finished ? 1 : 0)) /
      workoutExercises.length) *
    100;

  function nextExercise() {
    if (
      activeIndex >=
      workoutExercises.length - 1
    ) {
      setFinished(true);
      return;
    }

    setActiveIndex((current) => current + 1);
  }

  if (finished) {
    return (
      <View style={styles.centerScreen}>
        <Text style={styles.finishedEmoji}>
          🏆
        </Text>

        <Text style={styles.finishedKicker}>
          TREINO CONCLUÍDO
        </Text>

        <Text style={styles.finishedTitle}>
          {workout.title}
        </Text>

        <Text style={styles.finishedText}>
          Parabéns! Você concluiu{" "}
          {workoutExercises.length} exercícios
          e registrou mais um treino no
          FitNative.
        </Text>

        <PrimaryButton
          label="Voltar ao início"
          icon="home-outline"
          onPress={() =>
            navigation.popToTop()
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress}%`
              }
            ]}
          />
        </View>

        <Text style={styles.progressText}>
          {Math.round(progress)}%
        </Text>
      </View>

      <Text style={styles.kicker}>
        Exercício {activeIndex + 1} de{" "}
        {workoutExercises.length}
      </Text>

      <Text style={styles.title}>
        {currentExercise.name}
      </Text>

      <Text style={styles.subtitle}>
        {workout.title}
      </Text>

      <Image
        source={{
          uri: currentExercise.image
        }}
        style={styles.image}
      />

      <View style={styles.panel}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Séries
          </Text>

          <Text style={styles.value}>
            {currentExercise.sets}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Repetições
          </Text>

          <Text style={styles.value}>
            {currentExercise.reps}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Descanso
          </Text>

          <Text style={styles.value}>
            {currentExercise.rest}
          </Text>
        </View>
      </View>

      <Text style={styles.tip}>
        💡 {currentExercise.tip}
      </Text>

      <PrimaryButton
        label={
          activeIndex >=
          workoutExercises.length - 1
            ? "Finalizar treino"
            : "Próximo exercício"
        }
        icon={
          activeIndex >=
          workoutExercises.length - 1
            ? "checkmark-outline"
            : "arrow-forward"
        }
        onPress={nextExercise}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md
  },

  centerScreen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center"
  },

  finishedEmoji: {
    fontSize: 60,
    marginBottom: spacing.sm
  },

  finishedKicker: {
    color: colors.green,
    fontWeight: "900",
    letterSpacing: 1
  },

  finishedTitle: {
    color: colors.text,
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    marginTop: spacing.sm
  },

  finishedText: {
    color: colors.muted,
    textAlign: "center",
    lineHeight: 24,
    marginVertical: spacing.lg
  },

  progressContainer: {
    marginBottom: spacing.lg
  },

  progressTrack: {
    height: 14,
    borderRadius: 14,
    backgroundColor: colors.surface,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.orange
  },

  progressText: {
    color: colors.orange,
    fontWeight: "900",
    textAlign: "right",
    marginTop: 4
  },

  kicker: {
    color: colors.orange,
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: 12
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "900",
    marginTop: spacing.xs
  },

  subtitle: {
    color: colors.muted,
    marginTop: spacing.xs,
    marginBottom: spacing.md
  },

  image: {
    width: "100%",
    height: 260,
    borderRadius: 18,
    backgroundColor: colors.surface,
    marginBottom: spacing.md
  },

  panel: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6
  },

  label: {
    color: colors.muted,
    fontSize: 15
  },

  value: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 15
  },

  tip: {
    color: colors.muted,
    lineHeight: 22,
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md
  }
});