import { useEffect, useRef } from 'react';
import useGeolocation from 'utils/hooks/useGeolocation';
import MARKER from 'pages/Home/static/marker';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './Map.module.scss';
import OptionButtons from './components/OptionButtons';
import MobileOptions from './components/MobileOptions';

interface Props {
  latitude: number;
  longitude: number;
  placeName: string;
}
const options = {
  maximumAge: 1000,
};
export default function Map(): JSX.Element {
  const { isMobile } = useMediaQuery();
  const { location } = useGeolocation(options);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const selectedMarker = useRef<naver.maps.Marker | null>(null);

  const markerHighlightEvent = (markerCur:any, item:Props) => {
    naver.maps.Event.addListener(markerCur, 'click', () => {
      if (selectedMarker.current) {
        selectedMarker.current.setIcon({
          content: '',
          size: new naver.maps.Size(50, 52),
          anchor: new naver.maps.Point(25, 26),
        });
      }

      markerCur.setIcon({
        size: new naver.maps.Size(50, 52),
        anchor: new naver.maps.Point(25, 26),
      });

      selectedMarker.current = markerCur;

      if (mapRef.current) {
        const mapLatLng = new naver.maps.LatLng(item.latitude, item.longitude);
        mapRef.current.panTo(mapLatLng);
      }
    });
  };

  useEffect(() => {
    if (!mapRef.current && typeof location !== 'undefined') {
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(location.latitude, location.longitude),
        zoomControl: true,
        zoom: 10,
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
      }
    };
  }, [location]);

  useEffect(() => {
    MARKER.forEach((item:Props) => {
      if (mapRef.current) {
        const markers = new naver.maps.Marker({
          position: new naver.maps.LatLng(item.latitude, item.longitude),
          title: item.placeName,
          map: mapRef.current,
        });
        markerHighlightEvent(markers, item);
      }
    });
  }, [location]);
  return (
    <div>
      {isMobile && <MobileOptions />}
      <div id="map" className={styles.map} />
      {!isMobile && <OptionButtons />}
    </div>
  );
}
