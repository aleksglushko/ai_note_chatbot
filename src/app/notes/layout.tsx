import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="max-w7xl m-auto p-4">{children}</main>
    </>
  );
}
