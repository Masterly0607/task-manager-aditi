"use client";

import React from "react";
import { useTopbar } from "@/components/layout/topbar/topbar-context";

export default function TasksPage() {
  const { setSubtitle } = useTopbar();

  const name = 'Chor Narin';

  React.useEffect(() => {
    setSubtitle(` Welcome Back ${name}`);
    return () => setSubtitle(undefined);
  }, [name, setSubtitle]);

  return <div>Dashboard</div>;
}
