import { cn } from "@/lib/cn";

export default function AbbrDisplay({
  abbr,
  placeholderLength: placeholderLength,
  ...props
}: {
  abbr?: string;
  placeholderLength: number;
} & React.ComponentProps<"span">) {
  return (
    <>
      {abbr ? (
        <span
          {...props}
          className={cn(
            props.className,
            "select-none font-mono font-medium rounded-sm hover:bg-current/10"
          )}
        >
          {abbr}
        </span>
      ) : (
        <span
          {...props}
          className={cn(
            props.className,
            "select-none font-mono font-medium opacity-30 hover:opacity-100 rounded-sm hover:bg-current/10"
          )}
        >
          {"X".repeat(placeholderLength)}
        </span>
      )}
    </>
  );
}
