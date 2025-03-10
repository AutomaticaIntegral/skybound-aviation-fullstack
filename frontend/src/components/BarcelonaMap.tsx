
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas del Aeropuerto de Barcelona El Prat
const BARCELONA_AIRPORT_COORDINATES: [number, number] = [41.2974, 2.0785];

// Fix for default marker icons in Leaflet
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

const BarcelonaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    try {
      // Fix Leaflet icon issue
      fixLeafletIcon();
      
      // Initialize map if it doesn't exist
      if (!mapInstance.current) {
        mapInstance.current = L.map(mapContainer.current).setView(BARCELONA_AIRPORT_COORDINATES, 13);
        
        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance.current);
        
        // Add marker for Barcelona Airport
        const marker = L.marker(BARCELONA_AIRPORT_COORDINATES).addTo(mapInstance.current);
        marker.bindPopup("<h3>Aeropuerto de Barcelona-El Prat</h3><p>08820 El Prat de Llobregat, Barcelona</p>").openPopup();
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
    
    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default BarcelonaMap;
