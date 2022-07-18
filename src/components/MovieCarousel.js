import React, { Component } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "0px",
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      onClick={onClick}
    />
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "0px",
        position: "absolute",
        zIndex: 100,
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      onClick={onClick}
    />
  );
};

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div
        key={index}
        style={{ display: "flex", background: "#040B16", color: "white" }}
      >
        <div
          className="movie-information-carousel"
          style={{
            width: "50%",
            padding: "60px 25px 12px 40px",
          }}
        >
          <div
            style={{ fontWeight: 600, fontSize: "32px", marginBottom: "15px" }}
          >
            Movie Title
          </div>
          <div
            style={{ fontWeight: 300, fontSize: "12px", marginBottom: "15px" }}
          >
            This is Genre
          </div>
          <div
            style={{ fontWeight: 400, fontSize: "15px", marginBottom: "5px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="movie-image-carousel">
          <img src={props.url} alt="movie-poster" className="masked" />
        </div>
      </div>
    );
  }
}

export const MovieCarousel = ({ data }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movies = data;

  return (
    <div style={{ marginTop: "3%", marginBottom: "1%" }}>
      <Slider {...settings}>
        {movies.map((e, i) => {
          return <CustomSlide index={i} url={e.url} />;
        })}
      </Slider>
    </div>
  );
};
