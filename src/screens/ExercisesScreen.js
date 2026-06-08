import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ExerciseRow from "../components/ExerciseRow";
import Header from "../components/Header";

import { exercises } from "../data/exercises";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

const groups = [
  "Todos",
  "Peito",
  "Costas",
  "Bracos",
  "Pernas",
  "Cardio",
  "Core"
];

export default function ExercisesScreen() {
  const [selectedGroup, setSelectedGroup] =
    useState("Todos");

  const filteredExercises = useMemo(() => {
    if (selectedGroup === "Todos") {
      return exercises;
    }

    return exercises.filter(
      (exercise) =>
        exercise.group === selectedGroup
    );
  }, [selectedGroup]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          title="Exercícios"
          subtitle="Explore exercícios organizados por grupo muscular."
          studentName="João Victor"
        />

        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.exerciseList}
          ListHeaderComponent={
            <>
              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>
                  Exercícios disponíveis
                </Text>

                <Text style={styles.infoValue}>
                  {filteredExercises.length}
                </Text>

                <Text style={styles.infoSubtitle}>
                  exercícios encontrados
                </Text>
              </View>

              <View style={styles.filtersContainer}>
                <FlatList
                  data={groups}
                  horizontal
                  keyExtractor={(item) => item}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.filterList}
                  renderItem={({ item }) => {
                    const active =
                      item === selectedGroup;

                    return (
                      <Pressable
                        onPress={() =>
                          setSelectedGroup(item)
                        }
                        style={[
                          styles.filterButton,
                          active &&
                            styles.filterButtonActive
                        ]}
                      >
                        <Text
                          style={[
                            styles.filterText,
                            active &&
                              styles.filterTextActive
                          ]}
                        >
                          {item}
                        </Text>
                      </Pressable>
                    );
                  }}
                />
              </View>
            </>
          }
          renderItem={({ item, index }) => (
            <ExerciseRow
              exercise={item}
              index={index}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1,
    padding: spacing.md
  },

  infoCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: "center"
  },

  infoTitle: {
    color: colors.muted,
    fontSize: 14
  },

  infoValue: {
    color: colors.orange,
    fontSize: 36,
    fontWeight: "900",
    marginTop: 4
  },

  infoSubtitle: {
    color: colors.text,
    fontWeight: "700"
  },

  filtersContainer: {
    marginBottom: spacing.md
  },

  filterList: {
    paddingVertical: 4,
    paddingRight: spacing.md
  },

  filterButton: {
    height: 42,
    paddingHorizontal: spacing.lg,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surface,
    marginRight: spacing.sm
  },

  filterButtonActive: {
    backgroundColor: colors.orange,
    borderColor: colors.orange
  },

  filterText: {
    color: colors.muted,
    fontWeight: "800"
  },

  filterTextActive: {
    color: "#FFFFFF"
  },

  exerciseList: {
    paddingBottom: spacing.xl
  }
});