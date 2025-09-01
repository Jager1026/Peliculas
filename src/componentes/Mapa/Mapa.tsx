import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type Coordernada from "./Coordernada.model";
import { useState } from "react";

export default function Mapa() {

    const [coordenadas, setCoordernadas] = useState<Coordernada[]>();

    return (
        <MapContainer center={[4.536076007915628, -75.66559328867037]} zoom={14}
            scrollWheelZoom={true} style={{ height: '500px' }}>
            <TileLayer
                attribution='React Peliculas JASM'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ClickMapa setPunto={coordenada => setCoordernadas([coordenada])} />
            {coordenadas?.map(coordenada => <Marker key={coordenada.lat + coordenada.lng}
                position={[coordenada.lat, coordenada.lng]}
            >
                {coordenada.mensaje ? <Popup>{coordenada.mensaje}</Popup> : undefined}</Marker>)}
        </MapContainer>
    )
}

function ClickMapa(props: ClickMapaProps) {

    useMapEvent('click', e =>
        props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng })
    )
    return null;
}

interface ClickMapaProps {
    setPunto: (coordenada: Coordernada) => void;
}