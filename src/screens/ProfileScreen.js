import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SectionTitle from "../components/SectionTitle";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function ProfileScreen() {
  const [name, setName] = useState("João Victor");
  const [goal, setGoal] = useState("Ganhar massa muscular");

  function saveProfile() {
    Alert.alert(
      "Perfil salvo",
      `${name} | Objetivo: ${goal}`
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          title="Perfil"
          subtitle="Gerencie suas informações e objetivos."
          studentName={name}
        />

        <View style={styles.profileCard}>
          <Text style={styles.avatar}>
            👤
          </Text>

          <Text style={styles.profileName}>
            {name}
          </Text>

          <Text style={styles.profileGoal}>
            🎯 {goal}
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              12
            </Text>
            <Text style={styles.statLabel}>
              Treinos
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              2450
            </Text>
            <Text style={styles.statLabel}>
              Kcal
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              5h
            </Text>
            <Text style={styles.statLabel}>
              Tempo
            </Text>
          </View>
        </View>

        <View style={styles.panel}>
          <SectionTitle title="Dados do aluno" />

          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nome do aluno"
            placeholderTextColor={colors.muted}
            style={styles.input}
          />

          <Text style={styles.label}>
            Objetivo
          </Text>

          <TextInput
            value={goal}
            onChangeText={setGoal}
            placeholder="Exemplo: hipertrofia"
            placeholderTextColor={colors.muted}
            style={styles.input}
          />

          <PrimaryButton
            label="Salvar perfil"
            icon="save-outline"
            onPress={saveProfile}
          />
        </View>

        <View style={styles.panel}>
          <SectionTitle
            title="Plano atual"
            action="Premium"
          />

          <Text style={styles.planTitle}>
            Treino Inteligente
          </Text>

          <Text style={styles.planText}>
            4 treinos por semana,
            acompanhamento de progresso,
            evolução muscular e metas
            personalizadas.
          </Text>
        </View>

        <View style={styles.panel}>
          <SectionTitle
            title="Próximo treino"
            action="Amanhã"
          />

          <Text style={styles.planTitle}>
            Peito & Tríceps
          </Text>

          <Text style={styles.planText}>
            Horário sugerido: 18:00
            {"\n"}
            Nível: Intermediário
          </Text>
        </View>
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

  profileCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: spacing.lg,
    alignItems: "center",
    marginBottom: spacing.md
  },

  avatar: {
    fontSize: 60
  },

  profileName: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
    marginTop: spacing.sm
  },

  profileGoal: {
    color: colors.muted,
    marginTop: spacing.xs,
    textAlign: "center"
  },

  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md
  },

  statBox: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    alignItems: "center"
  },

  statValue: {
    color: colors.orange,
    fontSize: 22,
    fontWeight: "900"
  },

  statLabel: {
    color: colors.muted,
    marginTop: 4
  },

  panel: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.md
  },

  label: {
    color: colors.text,
    fontWeight: "800",
    marginTop: spacing.sm,
    marginBottom: spacing.xs
  },

  input: {
    minHeight: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    color: colors.text,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md
  },

  planTitle: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 18
  },

  planText: {
    color: colors.muted,
    lineHeight: 22,
    marginTop: spacing.sm
  }
});