import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function StatCard({
  icon,
  value,
  label,
  color = colors.orange
}) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
        <Ionicons
          name={icon}
          size={24}
          color={color}
        />
      </View>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 110,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3
    },

    elevation: 4
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm
  },

  value: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900"
  },

  label: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18
  }
});