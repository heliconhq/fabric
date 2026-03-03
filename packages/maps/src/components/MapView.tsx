import { useEffect, useState, ReactNode } from 'react';
import Map, { Marker, MapRef, MarkerProps } from 'react-map-gl';
import { useTheme } from '@heliconhq/core';
import bbox from '@turf/bbox';

const DEFAULT_ACCESS_TOKEN = '';

type MapViewItem = {
  longitude: number;
  latitude: number;
  id: string | number;
  onClick: () => void;
  label: string;
};

type MarkerClass = typeof Marker;

type Props = {
  items: MapViewItem[];
  children?: ReactNode;
  accessToken: string;
  initialViewState: object;
  padding?:
    | number
    | { top: number; bottom: number; left: number; right: number };
  maxZoom: number;
  renderItem?: (
    MarkerComponent: MarkerClass,
    markerProps: MarkerProps,
    item: MapViewItem
  ) => MarkerClass;
};

const defaultProps: Props = {
  items: [],
  accessToken: DEFAULT_ACCESS_TOKEN,
  maxZoom: 15,
  initialViewState: {
    longitude: 13.2064298,
    latitude: 53.6928166,
    zoom: 10,
    attributionControl: false,
  },
};

const MapView = ({
  items,
  accessToken,
  initialViewState,
  renderItem,
  padding,
  maxZoom,
  children,
}: Props) => {
  const { theme } = useTheme();

  const [mapRef, setMapRef] = useState<MapRef | null>();
  const [viewState, setViewState] = useState(initialViewState);

  useEffect(() => {
    if (items.length) {
      const coordinates = items.map((item) => [item.longitude, item.latitude]);

      if (coordinates.length > 0) {
        const feature = {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates,
          },
        };
        const [minLng, minLat, maxLng, maxLat] = bbox(feature);
        if (mapRef) {
          mapRef.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat],
            ],
            { padding, duration: 1000, maxZoom }
          );
        }
      }
    }
  }, [items, mapRef]);

  return (
    <div
      className="fabric--mapview"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Map
        {...viewState}
        ref={(ref) => setMapRef(ref)}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
        mapStyle={theme.config.external.mapbox}
        mapboxAccessToken={accessToken}
        onMove={(e) => setViewState(e.viewState)}
      >
        {items.map(({ latitude, longitude, ...rest }) =>
          typeof renderItem === 'undefined' ? (
            <Marker latitude={latitude} longitude={longitude} />
          ) : (
            renderItem(
              Marker,
              { latitude, longitude },
              {
                latitude,
                longitude,
                ...rest,
              }
            )
          )
        )}
        {children}
      </Map>
    </div>
  );
};

MapView.displayName = 'MapView';
MapView.defaultProps = defaultProps;

export default MapView;
