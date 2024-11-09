import { signIn, auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="submit">Sign in with GitHub</Button>
      </form>
    </main>
  );
}
