import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

const achievements = [
  {
    id: "constancia",
    title: "Constância",
    text: "Treinou 4 dias seguidos",
    xp: "+100 XP"
  },
  {
    id: "queimador",
    title: "Queimador",
    text: "Passou de 2.000 kcal",
    xp: "+150 XP"
  },
  {
    id: "foco",
    title: "Foco Total",
    text: "Completou 10 treinos",
    xp: "+200 XP"
  }
];

const week = ["S", "T", "Q", "Q", "S", "S", "D"];

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          title="Progresso"
          subtitle="Acompanhe sua evolução semanal."
          studentName="João Victor"
        />

        <View style={styles.levelCard}>
          <Text style={styles.levelTitle}>
            Nível 8 • Intermediário
          </Text>

          <View style={styles.levelTrack}>
            <View style={styles.levelFill} />
          </View>

          <Text style={styles.levelXp}>
            850 / 1000 XP
          </Text>
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            icon="flame-outline"
            value="2.450"
            label="calorias"
          />

          <StatCard
            icon="time-outline"
            value="5h 30m"
            label="tempo total"
            color={colors.yellow}
          />

          <StatCard
            icon="medal-outline"
            value="4"
            label="recordes"
            color={colors.green}
          />
        </View>

        <View style={styles.panel}>
          <SectionTitle
            title="Sequência semanal"
            action="4 dias"
          />

          <View style={styles.weekRow}>
            {week.map((day, index) => {
              const active = index < 5;

              return (
                <View
                  key={`${day}-${index}`}
                  style={[
                    styles.day,
                    active && styles.dayActive
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      active && styles.dayTextActive
                    ]}
                  >
                    {day}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.panel}>
          <SectionTitle title="Grupos musculares" />

          {[
            ["Peito", "85%", colors.orange],
            ["Costas", "70%", colors.yellow],
            ["Pernas", "90%", colors.green],
            ["Core", "60%", colors.blue]
          ].map(([label, value, color]) => (
            <View
              key={label}
              style={styles.muscleRow}
            >
              <Text style={styles.muscleLabel}>
                {label}
              </Text>

              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    {
                      width: value,
                      backgroundColor: color
                    }
                  ]}
                />
              </View>

              <Text style={styles.muscleValue}>
                {value}
              </Text>
            </View>
          ))}
        </View>

        <SectionTitle title="Conquistas recentes" />

        <FlatList
          data={achievements}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.achievement}>
              <Text style={styles.achievementTitle}>
                {item.title}
              </Text>

              <Text style={styles.achievementText}>
                {item.text}
              </Text>

              <Text style={styles.xp}>
                {item.xp}
              </Text>
            </View>
          )}
        />
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

  levelCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.md
  },

  levelTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: spacing.sm
  },

  levelTrack: {
    height: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    overflow: "hidden"
  },

  levelFill: {
    width: "85%",
    height: "100%",
    backgroundColor: colors.orange
  },

  levelXp: {
    color: colors.muted,
    marginTop: spacing.sm,
    fontWeight: "700"
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.md
  },

  panel: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.md
  },

  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm
  },

  day: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center"
  },

  dayActive: {
    borderColor: colors.orange,
    backgroundColor: "rgba(255,106,0,0.14)"
  },

  dayText: {
    color: colors.muted,
    fontWeight: "800"
  },

  dayTextActive: {
    color: colors.text
  },

  muscleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.sm
  },

  muscleLabel: {
    color: colors.text,
    width: 62,
    fontWeight: "700"
  },

  barTrack: {
    flex: 1,
    height: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    overflow: "hidden"
  },

  barFill: {
    height: "100%",
    borderRadius: 12
  },

  muscleValue: {
    color: colors.muted,
    width: 42,
    textAlign: "right"
  },

  achievement: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  achievementTitle: {
    color: colors.text,
    fontWeight: "900",
    fontSize: 16
  },

  achievementText: {
    color: colors.muted,
    marginTop: 4
  },

  xp: {
    color: colors.orange,
    marginTop: spacing.sm,
    fontWeight: "900"
  }
});