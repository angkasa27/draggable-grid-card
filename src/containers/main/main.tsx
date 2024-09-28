import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const MainContainer = () => {
  return (
    <main className="container bg-gray-50">
      <div className="grid grid-cols-4 gap-10 p-10">
        <Card />
        <Card />
      </div>
    </main>
  );
};

const Card = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "aspect-square rounded-lg border bg-white hadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
