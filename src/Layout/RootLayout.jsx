import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1>Campus Rentals</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
