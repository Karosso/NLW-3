import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../images/map-marker.svg';
import MapIcon from '../utils/mapIcon';
import api from '../services/api';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'


interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function OrphanagesMap() {

    const { goBack } = useHistory();
    
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, []);

  return (
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarker} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Belo Horizonte</strong>
                <span>Minas Gerais</span>
            </footer>
        </aside>

        <Map 
            center={[-19.9196038,-43.93989]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
        >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
            <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
            />  

            {orphanages.map(orphanage => {
                return (
                    <Marker 
                        key={orphanage.id}
                        icon={MapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                    >
                        <Popup closeButton={false} minWidth={320} maxWidth={320} className="map-popup">
                            <p>{orphanage.name}</p>
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="FFF" />
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="FFF" />
        </Link>

        <button type="button" onClick={goBack} className="home-button">
            <FiArrowLeft size={24} color="#FFF" />
        </button>
    </div>
  );
}

export default OrphanagesMap;