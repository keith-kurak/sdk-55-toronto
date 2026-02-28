import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Link, usePathname, type Href } from "expo-router";
import { SplitView } from "expo-router/unstable-split-view";
import { SymbolView } from "expo-symbols";
import React, { useRef } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-screens/experimental";
import type { SFSymbol } from "sf-symbols-typescript";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { SplitHostCommands } from "react-native-screens/experimental";

const NAV_ITEMS: { href: Href; label: string; symbol: SFSymbol }[] = [
  { href: "/", label: "Home", symbol: "house" },
  { href: "/explore", label: "Explore", symbol: "safari" },
];

function Sidebar({ onShowSecondary }: { onShowSecondary: () => void }) {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <SafeAreaView edges={{ left: true, top: true }} style={styles.sidebar}>
      <ThemedText type="smallBold" style={styles.sidebarTitle}>
        Expo Starter
      </ThemedText>
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link key={item.label} href={item.href} asChild>
            <Pressable>
              <ThemedView
                type={active ? "backgroundSelected" : "backgroundElement"}
                style={styles.navItem}
              >
                <SymbolView
                  tintColor={active ? theme.text : theme.textSecondary}
                  name={{ ios: item.symbol }}
                  size={16}
                />
                <ThemedText
                  type="small"
                  themeColor={active ? "text" : "textSecondary"}
                >
                  {item.label}
                </ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        );
      })}
      <Pressable
        onPress={onShowSecondary}
        style={{
          position: "absolute",
          bottom: Spacing.four,
          left: Spacing.three,
          right: Spacing.three,
          padding: Spacing.two,
          borderRadius: Spacing.two,
        }}
      >
        <ThemedText type="smallBold">Show Secondary</ThemedText>
      </Pressable>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const ref = useRef<SplitHostCommands>(null);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <SplitView ref={ref} topColumnForCollapsing="primary">
        <SplitView.Column>
          <Sidebar onShowSecondary={() => ref.current?.show("secondary")} />
        </SplitView.Column>
      </SplitView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  sidebarTitle: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    marginBottom: Spacing.two,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.two,
  },
});
