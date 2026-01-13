import { ConnectContext, ConnectionConfig } from "@/lib/connection";
import { useContext, useLayoutEffect, useRef } from "react";

export function Connect({
  children,
  id,
  connectWith = [],
  ...props
}: {
  children: React.ReactNode;
  id: string;
  connectWith?: ConnectionConfig[];
} & React.ComponentProps<"div">) {
  const { register } = useContext(ConnectContext);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    register(id, ref.current, connectWith);
  }, [id, connectWith, register]);

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}
