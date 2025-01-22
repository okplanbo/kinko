export const navItems = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "About", path: "/about" },
];

export const allowedRoutes = [
  ...navItems.map((item) => item.path),
  "/NoAccess",
];

export const protectedItems = [
  { label: "Wallet", path: "/wallet" },
  { label: "Notes", path: "/notes" },
  { label: "Profile", path: "/profile" },
];
