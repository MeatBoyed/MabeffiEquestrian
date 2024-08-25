import Typography from "@/typography";
import Link from "next/link";

export default function Branding() {
  return (
    // <div className="flex flex-col items-center justify-center gap-8">
    //   <div className="flex flex-col items-center justify-center gap-3">
    //     <Typography variant="h2" className="text-center font-extrabold">
    //       Powered by
    //       <br />
    //       <Link href="https://www.nerfdesigns.com/" className="text-blue-900">
    //         Nerf Designs
    //       </Link>
    //     </Typography>
    //     <Typography variant={"p"} affects={"large"} className="[&:not(:first-child)]:mt-0">
    //       Nerf Your Competition today!
    //     </Typography>
    //   </div>

    //   {/* <!-- Meta !!ATTENTION --> */}
    //   <div className="flex flex-col items-center justify-center gap-4">
    //     <Typography variant="p" affects={"small"}>
    //       &copy; 2024 Nerf Designs. All right reserved.
    //     </Typography>
    //   </div>
    // </div>
    <div className="w-full flex justify-center items-center flex-col gap-3 py-10 text-white bg-black">
      <div className="flex justify-center items-center flex-col">
        <Typography variant="h3" className="">
          Powered by
        </Typography>
        <Typography variant="h2" className="text-[#00AAFF] ">
          Nerf Designs
        </Typography>
        <Typography variant="p" className="">
          Nerf your competition
        </Typography>
      </div>

      <Typography variant="p" className="text-center ">
        Copyright © {new Date().getFullYear()} Nerf Designs. All Rights Reserved
      </Typography>
    </div>
  );
}
