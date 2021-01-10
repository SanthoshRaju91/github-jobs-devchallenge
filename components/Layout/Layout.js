import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <section>{children}</section>
    </div>
  );
}
