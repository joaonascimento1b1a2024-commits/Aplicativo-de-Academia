import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function ExerciseRow({ exercise, index }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: exercise.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.numberBadge}>
            <Text style={styles.order}>
              {String(index + 1).padStart(2, "0")}
            </Text>
          </View>

          <Text
            style={styles.name}
            numberOfLines={2}
          >
            {exercise.name}
          </Text>
        </View>

        <Text style={styles.group}>
          {exercise.group} • {exercise.difficulty}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.meta}>
            <Ionicons
              name="barbell-outline"
              size={15}
              color={colors.orange}
            />
            <Text style={styles.metaText}>
              {exercise.sets}
            </Text>
          </View>

          <View style={styles.meta}>
            <Ionicons
              name="repeat-outline"
              size={15}
              color={colors.yellow}
            />
            <Text style={styles.metaText}>
              {exercise.reps}
            </Text>
          </View>

          <View style={styles.meta}>
            <Ionicons
              name="timer-outline"
              size={15}
              color={colors.blue}
            />
            <Text style={styles.metaText}>
              {exercise.rest}
            </Text>
          </View>
        </View>

        <Text style={styles.tip}>
          {exercise.tip}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    marginBottom: spacing.md
  },

  image: {
    width: 120,
    minHeight: 160,
    backgroundColor: colors.surfaceSoft
  },

  content: {
    flex: 1,
    padding: spacing.md
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },

  numberBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,106,0,0.15)",
    justifyContent: "center",
    alignItems: "center"
  },

  order: {
    color: colors.orange,
    fontWeight: "900",
    fontSize: 12
  },

  name: {
    flex: 1,
    color: colors.text,
    fontSize: 17,
    fontWeight: "900"
  },

  group: {
    color: colors.muted,
    marginTop: spacing.sm,
    fontSize: 13
  },

  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.md
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },

  metaText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "600"
  },

  tip: {
    color: colors.muted,
    fontSize: 12,
    marginTop: spacing.md,
    lineHeight: 18
  }
});