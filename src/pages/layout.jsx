import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        {console.log("test")}
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
