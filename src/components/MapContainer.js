import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const item = {
    name: "Location 1",
    location: {
      lat: 33.87239440794258,
      lng: 10.110051141322451,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 33.87239440794258,
    lng: 10.110051141322451,
  };

  return (
    <div className="aboutUsElement">
      <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker key={item.name} position={item.location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MapContainer;
