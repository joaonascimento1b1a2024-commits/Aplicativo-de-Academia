import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function Header({
  title,
  subtitle,
  studentName
}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text style={styles.brand}>
          FitNative
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        {subtitle ? (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={22}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.profileInfo}>
          <Text
            style={styles.profileName}
            numberOfLines={1}
          >
            {studentName || "Aluno"}
          </Text>

          <Text style={styles.profileRole}>
            Plano Premium
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg
  },

  leftContent: {
    flex: 1,
    paddingRight: spacing.md
  },

  brand: {
    color: colors.orange,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "900",
    marginTop: 2
  },

  subtitle: {
    color: colors.muted,
    marginTop: 4,
    lineHeight: 20
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    maxWidth: 190
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.sm
  },

  profileInfo: {
    flexShrink: 1
  },

  profileName: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 14
  },

  profileRole: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 2
  }
});