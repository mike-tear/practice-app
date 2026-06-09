import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT  */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4'>
        <Link className="flex items-center justify-center gap-2 lg:justify-start" href="/">
          <Image src="/logo.png" alt="log" width={32} height={32}/>
          <span className="hidden lg:block">Practice Application</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll'>
        <Navbar/>
        {children}
      </div>
    </div>
  );
}