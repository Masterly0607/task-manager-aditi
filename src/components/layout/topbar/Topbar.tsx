"use client";

import { Breadcrumbs } from "./Breadcrumbs";
import { TopbarActions } from "./TopbarActions";

export default function Topbar() {
  return (
    <div className="flex h-16 items-center justify-between px-6">
      <Breadcrumbs />
      <TopbarActions />
    </div>
  );
}
