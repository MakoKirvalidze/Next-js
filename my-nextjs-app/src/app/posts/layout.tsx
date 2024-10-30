export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <h2>Posts Section</h2>
        <main>{children}</main>
      </div>
    );
  }
  