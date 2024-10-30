export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <h2>User Section</h2>
        <main>{children}</main>
      </div>
    );
  }
  