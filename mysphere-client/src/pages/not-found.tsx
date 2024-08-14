// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
export default function NotFoundPage() {
  return (
    <div className="w-full flex flex-col justify-center space-y-4 text-center">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
        Sorry, this page isn&apos;t available.
        </h1>
        <p className=" md:text-xl/relaxed">
        The link you followed may be broken, or the page may have been removed.
        </p>
      </div>
    </div>
  );
}
