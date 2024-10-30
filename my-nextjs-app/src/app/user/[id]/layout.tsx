export default function UserDetailLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <h3>User Detail Section</h3>
        <main>{children}</main>
      </div>
    );
  }
  