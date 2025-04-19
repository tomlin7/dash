// Navigation links for the landing page
export const landingNavLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

// Navigation links for the dashboard
export const dashboardNavLinks = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/analytics", label: "Analytics", icon: "bar-chart" },
  { href: "/dashboard/customers", label: "Customers", icon: "users" },
  { href: "/dashboard/projects", label: "Projects", icon: "folder" },
  { href: "/dashboard/settings", label: "Settings", icon: "settings" },
];

// Mock data for dashboard
export const dashboardData = {
  stats: [
    {
      label: "Total Users",
      value: "12,345",
      change: "+12%",
      status: "increase",
    },
    { label: "Revenue", value: "$34,567", change: "+8%", status: "increase" },
    {
      label: "Active Projects",
      value: "48",
      change: "-3%",
      status: "decrease",
    },
    {
      label: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      status: "increase",
    },
  ],
  recentActivity: [
    {
      id: 1,
      action: "New user signed up",
      user: "Alex Morgan",
      time: "5 minutes ago",
    },
    {
      id: 2,
      action: "Project updated",
      user: "Jamie Chen",
      time: "1 hour ago",
    },
    {
      id: 3,
      action: "Invoice paid",
      user: "Taylor Swift",
      time: "3 hours ago",
    },
    { id: 4, action: "New comment", user: "Jordan Lee", time: "5 hours ago" },
  ],
  chartData: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
    { name: "Jul", value: 1100 },
  ],
};
