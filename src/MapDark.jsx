import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./leafletConfig";
import "./MapDark.css";

export default function MapDark() {
  useEffect(() => {
    // Reset the map container if it already exists (for hot reloads)
    const container = L.DomUtil.get("map-dark");
    if (container != null) {
      container._leaflet_id = null;
    }

    // Fixed coordinates for Dharapadavedu, Katpadi, Vellore
    const targetLat = 12.97177;
    const targetLng = 79.138454;

    // Initialize map
    const map = L.map("map-dark").setView([targetLat, targetLng], 15);

    // Dark map tile layer (CartoDB Dark Matter)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap • © CARTO, 📍Katpadi Vellore",
    }).addTo(map);

    // Fixed marker + popup
    L.marker([targetLat, targetLng])
      .addTo(map)
      .bindPopup("<strong>Dharapadavedu</strong><br>Katpadi, Vellore")
      .openPopup();

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return <div id="map-dark" style={{ width: "100%", height: "100%" }} />;
}