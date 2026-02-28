import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function NativeTabsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Native Tabs" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Native Tabs</ThemedText>
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
