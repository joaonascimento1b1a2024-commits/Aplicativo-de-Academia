import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import PrimaryButton from "./PrimaryButton";

export default function WorkoutCard({ workout, width = 280, onPress, onStart }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { width }]}>
      <Image source={{ uri: workout.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.subtitle}>{workout.subtitle}</Text>
        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.metaRow}>
          <View style={styles.meta}>
            <Ionicons name="time-outline" size={15} color={colors.orange} />
            <Text style={styles.metaText}>{workout.minutes} min</Text>
          </View>
          <View style={styles.meta}>
            <Ionicons name="flame-outline" size={15} color={colors.yellow} />
            <Text style={styles.metaText}>{workout.calories} kcal</Text>
          </View>
          <View style={[styles.dot, { backgroundColor: workout.accent }]} />
          <Text style={styles.metaText}>{workout.level}</Text>
        </View>

        <PrimaryButton label="Iniciar treino" onPress={onStart} compact />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    marginRight: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    elevation: 6
  },

  image: {
    width: "100%",
    height: 180,
    backgroundColor: colors.surfaceSoft
  },

  content: {
    padding: spacing.md
  },

  subtitle: {
    color: colors.orange,
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 4
  },

  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
    marginBottom: spacing.sm
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.md
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },

  metaText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "600"
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5
  }
});