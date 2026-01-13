import {
  ConnectRegistry,
  ConnectContext,
  ConnectionConfig,
} from "@/lib/connection";
import { useState } from "react";

export default function ConnectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [registry, setRegistry] = useState<ConnectRegistry>(() => new Map());

  const register = (
    id: string,
    element: HTMLElement | null,
    connectWith: ConnectionConfig[]
  ) => {
    setRegistry((prev) => {
      const existing = prev.get(id);

      // bail out early if equal
      if (
        existing &&
        existing.element === element &&
        JSON.stringify(existing.connectWith) === JSON.stringify(connectWith)
      ) {
        console.log(prev);
        return prev;
      }

      const next = new Map(prev);
      next.set(id, { element, connectWith });
      console.log(next);
      return next;
    });
  };

  return (
    <ConnectContext.Provider value={{ registry, register }}>
      {children}
    </ConnectContext.Provider>
  );
}
