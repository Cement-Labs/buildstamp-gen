import { ConnectContext, ConnectionConfig } from "@/lib/connection";
import { useContext, useLayoutEffect, useRef } from "react";

export function Connect({
  children,
  id,
  connectWith = [],
}: {
  children: React.ReactNode;
  id: string;
  connectWith?: ConnectionConfig[];
}) {
  const { register } = useContext(ConnectContext);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    register(id, ref.current, connectWith);
  }, [id, connectWith, register]);

  return (
    <div ref={ref} className="relative contents">
      {children}
    </div>
  );
}
