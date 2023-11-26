import Image from "next/image";
import logo from "@/app/assets/sentium_logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  
  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="" width={100} height={100} />
        <span className="text-6xl font-bold tracking-tight lg:text-8xl">
          Sentium
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent agent with AI integration to interact with documents
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
