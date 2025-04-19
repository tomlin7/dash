"use client";

import { dashboardData } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  const { stats, recentActivity, chartData } = dashboardData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard Overview
        </h2>
        <div className="flex items-center">
          <Card className="bg-background">
            <CardContent className="px-5">
              <span className="text-sm text-muted-foreground">
                Last updated:{" "}
                <span className="font-medium text-foreground">
                  Today, 2:30 PM
                </span>
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <Card key={stat.label} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div
                  className={`mr-2 ${
                    stat.status === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.status === "increase" ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                </div>
                <span
                  className={`text-sm ${
                    stat.status === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="grid gap-4 md:grid-cols-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-7 md:col-span-5"
        >
          <Card className="h-[350px]">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>
                Visualizing key performance metrics over time
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 5,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--chart-1))"
                        stopOpacity={0.5}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--chart-1))"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-background border border-border p-2 rounded-md shadow-md">
                            <p className="text-sm font-medium">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-7 md:col-span-2"
        >
          <Card className="h-[350px]">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest activities on your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt={activity.user} />
                      <AvatarFallback>
                        {activity.user.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 flex flex-col gap-0.5">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-md">Quick Stats</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Total Users</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[65%] rounded-full bg-chart-1"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Conversions</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-chart-2"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Revenue</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[80%] rounded-full bg-chart-3"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">80%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Welcome Back, {user?.firstName || "User"}</CardTitle>
            <CardDescription>
              Your dashboard summary and important metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Active Users</p>
                  <p className="text-2xl font-bold">2,584</p>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last week
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold">$45,238</p>
                  <p className="text-xs text-muted-foreground">
                    +8.2% from last month
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
