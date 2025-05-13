import { useState, type FC } from "react";
import { adjacency } from "../../../../common/adjacency";
import "./MapView.css";
import { Room } from "./Room";

export interface MapViewProps {
  mapConfig: Record<string, boolean>;
}

const roomIds = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 66, 34, 35, 36, 37,
];

export const MapView: FC<MapViewProps> = ({ mapConfig }) => {
  const [currentEl, setCurrentEl] = useState<number>(-1);

  const adjacent = adjacency[currentEl];

  return (
    <div className="map-grid" onMouseLeave={() => setCurrentEl(-1)}>
      {roomIds.map((id) => (
        <Room
          key={id}
          id={`r${id}`}
          label={mapConfig[id] ? String(id) : ""}
          enabled={mapConfig[id]}
          current={currentEl === id}
          highlighted={adjacent && adjacent.includes(id)}
          onHover={() => setCurrentEl(id)}
        />
      ))}
      <Room
        id="r66"
        enabled={mapConfig[33]}
        current={currentEl === 33}
        highlighted={adjacent && adjacent.includes(33)}
        onHover={() => setCurrentEl(33)}
      />
    </div>
  );
};
