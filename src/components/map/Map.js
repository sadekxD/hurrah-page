import React, { useState, useRef, useCallback } from "react";
import { SelectPicker } from "rsuite";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGeolocation } from "react-use";

// import default style
import "rsuite/dist/styles/rsuite-default.css";

const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
  width: "100vw",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_k-TpHFbJfMX6E6xls26ZtHCVmn12J2A",
    libraries,
  });
  const [marker, setMarker] = useState({});
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarker({
      ...marker,
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    });
  }, []);

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error Loading map";

  if (!isLoaded) return "loading map";

  return (
    <div>
      <div
        style={{ margin: "1rem 0", display: "flex", justifyContent: "center" }}
      >
        <Search panTo={panTo} setMarker={setMarker} />
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker.lat && marker.lng && (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}

function Search({ panTo, setMarker }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (v) => {
    setValue(v);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      setMarker((current) => ({ ...current, lat, lng }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SelectPicker
      onSelect={handleSelect}
      onChange={(v) => handleInput(v)}
      onSearch={(v) => handleInput(v)}
      style={{ width: 224 }}
      disabled={!ready}
      data={data.map((d) => ({ label: d.description, value: d.description }))}
      placeholder="Search your location"
    />
  );
}
