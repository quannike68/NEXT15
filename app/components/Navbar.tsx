import React from "react";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={50} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button>
                  <span>LogOut</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>

              {session?.user?.image && (
                <Image
                  src={session?.user?.image}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn();
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
