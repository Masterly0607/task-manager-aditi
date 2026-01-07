"use client";

import React from "react";
import { useTopbar } from "@/components/layout/topbar/topbar-context";
import SpinnerLoading from "@/components/common/spinner-loading";

export default function TasksPage() {
  const { setSubtitle } = useTopbar();

  const total = 10;

  React.useEffect(() => {
    setSubtitle(`${total} total tasks`);
    return () => setSubtitle(undefined);
  }, [total, setSubtitle]);

  return <div>
    <SpinnerLoading size={60} color="#10b981"/>
    Tasks content...</div>;
}
