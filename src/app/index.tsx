import { useRouter, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { SFSymbol } from "sf-symbols-typescript";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

type Feature = {
  title: string;
  description: string;
  symbol: SFSymbol;
  href: "/expo-ui" | "/glass-effect" | "/native-tabs" | "/split-view" | "/widgets" | "/react-compiler";
};

const FEATURES: Feature[] = [
  {
    title: "@expo/ui",
    description: "Native UI components for iOS and Android",
    symbol: "rectangle.3.group",
    href: "/expo-ui",
  },
  {
    title: "Glass Effect",
    description: "Liquid glass backgrounds on iOS 26",
    symbol: "circle.hexagongrid.fill",
    href: "/glass-effect",
  },
  {
    title: "Native Tabs",
    description: "Platform-native tab bars via expo-router",
    symbol: "square.grid.2x2",
    href: "/native-tabs",
  },
  {
    title: "Split View",
    description: "iPad sidebar navigation via expo-router",
    symbol: "rectangle.split.2x1",
    href: "/split-view",
  },
  {
    title: "Expo Widgets",
    description: "Home screen widgets for iOS",
    symbol: "apps.iphone",
    href: "/widgets",
  },
  {
    title: "React Compiler",
    description: "Automatic memoization with React 19",
    symbol: "bolt.fill",
    href: "/react-compiler",
  },
];

function FeatureRow({ feature }: { feature: Feature }) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => router.push(feature.href)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <ThemedView style={styles.row}>
        <ThemedView type="backgroundElement" style={styles.iconContainer}>
          <SymbolView
            name={{ ios: feature.symbol }}
            size={20}
            tintColor={theme.text}
          />
        </ThemedView>
        <View style={styles.rowText}>
          <ThemedText type="default">{feature.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {feature.description}
          </ThemedText>
        </View>
        <SymbolView
          name={{ ios: "chevron.right" }}
          size={12}
          tintColor={theme.textSecondary}
        />
      </ThemedView>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "SDK 55 Features" }} />
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView contentContainerStyle={styles.list}>
          {FEATURES.map((feature) => (
            <FeatureRow key={feature.href} feature={feature} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: Spacing.two,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    gap: Spacing.three,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: Spacing.two,
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  pressed: {
    opacity: 0.6,
  },
});
