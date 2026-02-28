import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function GlassEffectScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Glass Effect" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Glass Effect</ThemedText>
        <ThemedText themeColor="textSecondary">Coming soon</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
