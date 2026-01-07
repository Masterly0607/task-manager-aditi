"use client";

import React from "react";

type TopbarState = {
  subtitle?: string;
  setSubtitle: (v?: string) => void;
};

const TopbarContext = React.createContext<TopbarState | null>(null);

export function TopbarProvider({ children }: { children: React.ReactNode }) {
  const [subtitle, setSubtitle] = React.useState<string | undefined>(undefined);

  return (
    <TopbarContext.Provider value={{ subtitle, setSubtitle }}>
      {children}
    </TopbarContext.Provider>
  );
}

export function useTopbar() {
  const ctx = React.useContext(TopbarContext);
  if (!ctx) throw new Error("useTopbar must be used within TopbarProvider");
  return ctx;
}
