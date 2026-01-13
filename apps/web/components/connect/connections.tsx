import {
  ConnectContext,
  ConnectionAnchor,
  ConnectionConfig,
} from "@/lib/connection";
import * as d3 from "d3";
import React, { useContext, useMemo } from "react";

function calculateAnchorPoint(
  rect: DOMRect,
  anchor: ConnectionAnchor = "center"
): [number, number] {
  // named anchors
  if (typeof anchor === "string") {
    switch (anchor) {
      case "center":
        return [rect.left + rect.width / 2, rect.top + rect.height / 2];
      case "top":
        return [rect.left + rect.width / 2, rect.top];
      case "bottom":
        return [rect.left + rect.width / 2, rect.bottom];
      case "left":
        return [rect.left, rect.top + rect.height / 2];
      case "right":
        return [rect.right, rect.top + rect.height / 2];
    }
  }

  // absolute coordinates
  if ("x" in anchor && "y" in anchor) {
    return [anchor.x, anchor.y];
  }

  // relative coordinates (0 to 1)
  if ("u" in anchor && "v" in anchor) {
    return [
      rect.left + anchor.u * rect.width,
      rect.top + anchor.v * rect.height,
    ];
  }

  // fallback to center
  return [rect.left + rect.width / 2, rect.top + rect.height / 2];
}

export function Connections(props: React.ComponentProps<"svg">) {
  const { registry } = useContext(ConnectContext);

  const links = useMemo(() => {
    const list: { from: DOMRect; to: DOMRect; config: ConnectionConfig }[] = [];

    registry.forEach(({ element, connectWith }, _id) => {
      if (!element) return;
      const sourceRect = element.getBoundingClientRect();

      connectWith.forEach((conn) => {
        const target = registry.get(conn.id);
        if (!target?.element || conn.visible === false) return;

        const targetRect = target.element.getBoundingClientRect();
        list.push({
          from: sourceRect,
          to: targetRect,
          config: conn,
        });
      });
    });

    return list;
  }, [registry]);

  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
      }}
      {...props}
    >
      {links.map(({ from, to, config }, i) => {
        // compute anchor points
        const [sx, sy] = calculateAnchorPoint(from, config.fromAnchor);
        const [tx, ty] = calculateAnchorPoint(to, config.toAnchor);

        const d = (
          config.direction === "horizontal"
            ? d3.linkHorizontal()
            : d3.linkVertical()
        )({
          source: [sx, sy],
          target: [tx, ty],
        });

        return (
          <path
            key={i}
            d={d ?? ""}
            fill="none"
            stroke={config.color ?? "#000"}
            strokeDasharray={
              config.stroke?.style === "dashed" ? "4 2" : undefined
            }
            strokeWidth={config.stroke?.width ?? 2}
          />
        );
      })}
    </svg>
  );
}
