import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="dashboard">
          <h2>Welcome, {user.fullName || user.username}</h2>
          <p>Upload and manage your apartment listings here.</p>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
