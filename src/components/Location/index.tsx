import * as React from "react";
import GoogleMapReact from "google-map-react";

import {Wrapper, MapWrapper, Content, Divider} from "./styles";
import {useDetectMobile} from "../../hooks/useDetectMobile";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const Location = () => {
  const mobile = useDetectMobile(800);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const defaultProps = {
    center: {
      lat: 7.013907645642219,
      lng: -73.05857606319502
    },
    zoom: 18
  };

  const renderMarker = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: 7.013907645642219, lng: -73.05857606319502 },
      map,
      title: 'Hello World!'
    });

    let marker2 = new maps.Marker({
      position: { lat: 7.013512156365562, lng: -73.0593099877316 },
      map,
      title: 'Hello World!'
    });

    return [marker, marker2];
  };

  console.log({apiKey})

  return (
    <Wrapper>
      <MapWrapper>
        {apiKey !== undefined &&
            <GoogleMapReact
                bootstrapURLKeys={{ key:  apiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({map, maps}) => renderMarker(map, maps)}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent
                    lat={7.013907645642219}
                    lng={-73.05857606319502}
                    text="Padres Pasionistas"
                />
                <AnyReactComponent
                    lat={7.013512156365562}
                    lng={-73.05930998773168}
                    text="Chalet Copacabana"
                />
            </GoogleMapReact>
        }
      </MapWrapper>
      <Content>
        <h6>Misa y Ceremonia</h6>
        <p>21 de enero de 2023, 3:00 PM <br/>
          Iglesia Padres Pasionistas, Romboy De Tablanca, La Mata, Piedecuesta, Santander</p>
        <Divider/>
        <p>21 de enero de 2023, 4:00 PM<br/>
          Recepción: Chalet Copacabana, La Mata, Piedecuesta, Santander</p>
        <img src="../../img/imgs/flowerMap.png" height={180}/>
      </Content>
    </Wrapper>
  )
};
