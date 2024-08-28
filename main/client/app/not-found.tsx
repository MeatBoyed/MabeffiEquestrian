import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import Typography from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Typography variant="h1" className="text-4xl font-bold mb-2">
        Whoa there, partner!
      </Typography>
      <Typography variant="h2" className="text-2xl font-semibold mb-4">
        404 - Page Not Found
      </Typography>
      <Typography variant="p" className="text-xl mb-8 text-center max-w-md">
        Looks like you&apos;ve wandered off the trail. Let&apos;s get you back on track.
      </Typography>
      <Link href="/">
        <Button size="lg">
          <HomeIcon className="mr-2 h-4 w-4" />
          Back to the home
        </Button>
      </Link>
    </div>
  );
}
