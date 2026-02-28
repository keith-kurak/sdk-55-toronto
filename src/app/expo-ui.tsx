import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ExpoUIScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "@expo/ui" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">@expo/ui</ThemedText>
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
