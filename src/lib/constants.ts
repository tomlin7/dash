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

// Price tiers
export const pricing = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals and small projects",
    features: [
      "Dashboard access",
      "Basic analytics",
      "1 project",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for professionals and growing teams",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "10 projects",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Try Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Custom dashboard",
      "Unlimited projects",
      "Dedicated support",
      "SSO & advanced security",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

// Testimonials
export const testimonials = [
  {
    text: "This dashboard has transformed how we manage our projects. The interface is intuitive and the analytics are powerful.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    text: "The level of customization is impressive. We've been able to tailor the dashboard to match our specific workflows perfectly.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    text: "Switching to this dashboard has improved our team's productivity by 35%. The authentication system is secure and reliable.",
    author: "Emily Rodriguez",
    role: "Operations Director at GrowthLabs",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

// Features for the landing page
export const features = [
  {
    title: "Beautiful Analytics",
    description:
      "Gain insights with interactive charts and data visualizations.",
    icon: "bar-chart",
  },
  {
    title: "Secure Authentication",
    description: "Enterprise-grade security with custom login flows.",
    icon: "shield",
  },
  {
    title: "Responsive Design",
    description:
      "Perfect experience on any device - desktop, tablet, or mobile.",
    icon: "smartphone",
  },
  {
    title: "Dark Mode Support",
    description: "Easy on the eyes with automatic dark/light theme switching.",
    icon: "moon",
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with role-based permissions.",
    icon: "users",
  },
  {
    title: "Real-time Updates",
    description: "See changes instantly with live data synchronization.",
    icon: "refresh-cw",
  },
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
