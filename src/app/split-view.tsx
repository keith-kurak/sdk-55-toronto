import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function SplitViewScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Split View" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Split View</ThemedText>
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
