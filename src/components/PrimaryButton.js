import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function PrimaryButton({ label, icon = "arrow-forward", onPress, compact }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        compact && styles.compact,
        pressed && styles.pressed
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <Ionicons name={icon} size={18} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 8,
    backgroundColor: colors.orange,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  compact: {
    minHeight: 42
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }]
  },
  label: {
    color: colors.text,
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: 13
  }
});
