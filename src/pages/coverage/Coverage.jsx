import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 🔹 Map controller component
const FlyToDistrict = ({ district }) => {
  const map = useMap();

  useEffect(() => {
    if (district) {
      map.setView([district.latitude, district.longitude], 10, {
        animate: true,
      });
    }
  }, [district, map]);

  return null;
};

const Coverage = () => {
  const [coverageData, setCoverageData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch("warehouses.json")
      .then((res) => res.json())
      .then((data) => setCoverageData(data));
  }, []);

  // 🔹 Case-insensitive + partial match
  const filteredDistricts = coverageData.filter((district) =>
    district.district.toLowerCase().includes(searchText.toLowerCase()),
  );

  // 🔹 Auto focus when only one result remains
  useEffect(() => {
    if (filteredDistricts.length === 1) {
      setSelectedDistrict(filteredDistricts[0]);
    }
  }, [searchText, filteredDistricts]);

  return (
    <section className="w-full px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h2>

      {/* Search Box */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search district..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* Map */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <MapContainer
          center={[23.685, 90.3563]} // Bangladesh center
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🔹 Move map on search */}
          <FlyToDistrict district={selectedDistrict} />

          {/* 🔹 Dynamic markers */}
          {filteredDistricts.map((district) => (
            <Marker
              key={district.district}
              position={[district.latitude, district.longitude]}
              eventHandlers={{
                click: () => setSelectedDistrict(district),
              }}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{district.district}</p>
                  <p className="text-gray-600">{district.region}</p>

                  <p className="mt-2 font-medium">Covered Areas:</p>
                  <ul className="list-disc list-inside">
                    {district.covered_area.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>

                  <p className="mt-2">
                    Status:{" "}
                    <span className="font-semibold text-green-600">
                      {district.status}
                    </span>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
