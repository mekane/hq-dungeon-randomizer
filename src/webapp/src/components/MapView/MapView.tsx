import type { FC } from "react";
import "./MapView.css";

export interface MapViewProps {
  mapConfig: Record<string, boolean>;
}

export const MapView: FC<MapViewProps> = ({ mapConfig }) => {
  return (
    <div className="map-grid">
      <div className="r0">{mapConfig["0"] && "0"}</div>
      <div className="r1">{mapConfig["1"] && "1"}</div>
      <div className="r2">{mapConfig["2"] && "2"}</div>
      <div className="r3">{mapConfig["3"] && "3"}</div>
      <div className="r4">{mapConfig["4"] && "4"}</div>
      <div className="r5">{mapConfig["5"] && "5"}</div>
      <div className="r6">{mapConfig["6"] && "6"}</div>
      <div className="r7">{mapConfig["7"] && "7"}</div>
      <div className="r8">{mapConfig["8"] && "8"}</div>
      <div className="r9">{mapConfig["9"] && "9"}</div>
      <div className="r10">{mapConfig["10"] && "10"}</div>
      <div className="r11">{mapConfig["11"] && "11"}</div>
      <div className="r12">{mapConfig["12"] && "12"}</div>
      <div className="r13">{mapConfig["13"] && "13"}</div>
      <div className="r14">{mapConfig["14"] && "14"}</div>
      <div className="r15">{mapConfig["15"] && "15"}</div>
      <div className="r16">{mapConfig["16"] && "16"}</div>
      <div className="r17">{mapConfig["17"] && "17"}</div>
      <div className="r18">{mapConfig["18"] && "18"}</div>
      <div className="r19">{mapConfig["19"] && "19"}</div>
      <div className="r20">{mapConfig["20"] && "20"}</div>
      <div className="r21">{mapConfig["21"] && "21"}</div>
      <div className="r22">{mapConfig["22"] && "22"}</div>
      <div className="r23">{mapConfig["23"] && "23"}</div>
      <div className="r24">{mapConfig["24"] && "24"}</div>
      <div className="r25">{mapConfig["25"] && "25"}</div>
      <div className="r26">{mapConfig["26"] && "26"}</div>
      <div className="r27">{mapConfig["27"] && "27"}</div>
      <div className="r28">{mapConfig["28"] && "28"}</div>
      <div className="r29">{mapConfig["29"] && "29"}</div>
      <div className="r30">{mapConfig["30"] && "30"}</div>
      <div className="r31">{mapConfig["31"] && "31"}</div>
      <div className="r32">{mapConfig["32"] && "32"}</div>
      <div className="r33">{mapConfig["33"] && "33"}</div>
      <div className="r66">{mapConfig["33"] && "33"}</div>
      <div className="r34">{mapConfig["34"] && "34"}</div>
      <div className="r35">{mapConfig["35"] && "35"}</div>
      <div className="r36">{mapConfig["36"] && "36"}</div>
      <div className="r37">{mapConfig["37"] && "37"}</div>
    </div>
  );
};
