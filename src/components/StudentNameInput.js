import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function StudentNameInput({
  value,
  onChangeText,
  onSave
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Nome do aluno
      </Text>

      <Text style={styles.description}>
        Personalize sua experiência no FitNative.
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Digite seu nome"
        placeholderTextColor={colors.muted}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSave}
      >
        <Ionicons
          name="save-outline"
          size={18}
          color="#FFFFFF"
        />

        <Text style={styles.buttonText}>
          Salvar nome
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.md
  },

  label: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 16
  },

  description: {
    color: colors.muted,
    marginTop: 4,
    marginBottom: spacing.md,
    lineHeight: 18
  },

  input: {
    minHeight: 50,
    borderRadius: 12,
    backgroundColor: colors.background,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md
  },

  button: {
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15
  }
});