import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import LocationWrapper from './Location.style';
import Map from 'components/Map/Map';
import { Element } from 'react-scroll';
import { capitalize } from "lodash";

const Location = ({
  titleStyle,
  locationMetaStyle,
  contentStyle,
  boldContentStyle,
  linkStyle,
  location,
}) => {
  const formattedAddress = `${location.country}, ${location.city}`;
  return (
    <Element name="location" className="location">
      <LocationWrapper>
        <Heading as="h2" content="Ubicacion" {...titleStyle} />
        <Text content={formattedAddress} {...locationMetaStyle} />
        <Text
          content={capitalize(location.address)}
          {...contentStyle}
        />
        <Text
          content={capitalize(location.indications)}
          {...boldContentStyle}
        />
        <Map location={[location]} multiple={true} zoom={12} center={
          {lat: parseFloat(location.location.lat), lng: parseFloat(location.location.lng)}}/>
      </LocationWrapper>
    </Element>
  );
};

Location.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Location.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
    mb: ['14px', '20px', '27px'],
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px'],
  },
  boldContentStyle: {
    fontWeight: '700',
    mb: '0!important',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default Location;
