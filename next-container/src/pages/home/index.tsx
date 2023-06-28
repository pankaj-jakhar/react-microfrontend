import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

    const call = () =>{
        console.log("i m being called", process.env.NEXT_PUBLIC_TEST,process.env.DATABASE_URL);

        router.push("newpage");
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home 
      <button onClick={call}>call me</button>
    </main>
  )
}
