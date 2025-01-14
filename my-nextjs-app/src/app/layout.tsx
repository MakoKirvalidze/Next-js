export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <header>
          <h1>Welcome to My App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
