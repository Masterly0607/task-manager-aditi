"use client";

import {
  ClipboardList,
  CheckCircle2,
  Clock,
  Flag,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const CONFIG = [
  {
    key: "total",
    label: "Total Tasks",
    icon: ClipboardList,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    key: "completed",
    label: "Completed",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    key: "inProgress",
    label: "In Progress",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    key: "overdue",
    label: "Overdue",
    icon: Flag,
    color: "text-red-600",
    bg: "bg-red-50",
  },
] as const;

type Stats = {
  total: number;
  completed: number;
  inProgress: number;
  overdue: number;
};

const DashboardPage = ({ stats }: { stats?: Partial<Stats> }) => {
  return (
    <div className="flex flex-col gap-4 max-w-full">
      {CONFIG.map((item) => (
        <Card key={item.key} className="border shadow-sm">
          <CardContent className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>

              <h2 className="text-3xl font-bold">{stats?.[item.key] ?? 0}</h2>

              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-bold text-emerald-500">
                  {item.key === "overdue" ? "-2%" : "10%"}
                </span>
                <span className="text-xs text-muted-foreground">
                  from last week
                </span>
              </div>
            </div>

            <div className={`p-3 rounded-full ${item.bg}`}>
              <item.icon className={`h-5 w-5 ${item.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardPage;
