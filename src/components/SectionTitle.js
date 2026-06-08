import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export default function SectionTitle({ title, action }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800"
  },
  action: {
    color: colors.orange,
    fontWeight: "700"
  }
});
