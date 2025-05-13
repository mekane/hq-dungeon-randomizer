import type { FC } from "react";

interface RoomProps {
  id: string;
  label?: string;
  enabled?: boolean;
  current?: boolean;
  highlighted?: boolean;
  onHover?: () => void;
}
export const Room: FC<RoomProps> = ({
  id,
  label,
  enabled,
  current,
  highlighted,
  onHover,
}) => {
  const classes = [
    enabled ? "enabled" : "disabled",
    current ? "current" : false,
    highlighted ? "highlighted" : false,
  ]
    .filter((v) => Boolean(v))
    .join(" ");

  return (
    <div id={id} className={classes} onMouseOver={onHover}>
      {enabled && label}
    </div>
  );
};
