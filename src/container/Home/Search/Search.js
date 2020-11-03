import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Container from 'components/UI/Container/Container';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import BannerWrapper, { SearchWrapper } from './Search.style';
// slider images
import bannerBg1 from 'assets/images/banner/1.jpg';
import bannerBg2 from 'assets/images/banner/2.jpg';
import bannerBg3 from 'assets/images/banner/3.jpg';
import bannerBg4 from 'assets/images/banner/4.png';

const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={4}
      >
        <>
          <GlideSlide>
            <img src={bannerBg4} alt="Banner 4" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg2} alt="Banner 2" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg3} alt="Banner 3" />
          </GlideSlide>
          <GlideSlide>
            <img src={bannerBg1} alt="Banner 1" />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Heading
            {...searchTitleStyle}
            content="Buscas un lugar encuentras un amigo"
          />
          <Text
            {...searchDescriptionStyle}
            content="compara a más de 200 host y conoce los lugares más increibles junto a los mejores ."
          />
          <SearchForm />
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

SearchArea.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '24px',
    mb: '30px',
  },
};

export default SearchArea;
