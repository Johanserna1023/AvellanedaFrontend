import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../../data/skateboard-parks.json";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [35, 55],
});

export default function Maps(props) {
  const { mapa } = props;
  const [activePark, setActivePark] = React.useState(null);

  if (mapa === true) {
    return (
      <Map center={[6.35503588634, -75.5674879529]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            onClick={() => {
              setActivePark(park);
            }}
            icon={icon}
          />
        ))}

        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0],
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </Map>
    );
  } else {
    return <></>;
  }
}
