import { createContext } from "react";

export type ConnectionStrokeStyle = "solid" | "dashed";

export type ConnectionDirection = "horizontal" | "vertical";

// x, y: absolute coordinates in pixels
// u, v: relative coordinates (0 to 1) within the element
export type ConnectionAnchor =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | { x: number; y: number }
  | { u: number; v: number };

export interface ConnectionConfig {
  id: string;
  color?: string;
  stroke?: {
    width?: number;
    style?: ConnectionStrokeStyle;
  };
  direction?: ConnectionDirection;
  fromAnchor?: ConnectionAnchor;
  toAnchor?: ConnectionAnchor;
}

export type ConnectRegistry = Map<
  string,
  { element: HTMLElement | null; connectWith: ConnectionConfig[] }
>;

export const ConnectContext = createContext<{
  registry: ConnectRegistry;
  register: (
    id: string,
    element: HTMLElement | null,
    connectWith: ConnectionConfig[]
  ) => void;
}>({
  registry: new Map(),
  register: () => {},
});
