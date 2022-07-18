import React from "react";

const MovieDetail = ({ data }) => {
  return (
    <div>
      <div className="detail-movie-poster">
        <div className="detail-movie-poster-contain">
          <h1>This is Movie Title</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="button-group">
            <button className="play-button">
              <img src="/play-button.png" className="play-icon" alt="" />
              <span className="play-button-text" style={{ paddingLeft: "15px" }}>Play</span>
            </button>
            <button className="info-button">
              <img
                src="/more-information.png"
                alt=""
                className="info-icon"
                style={{ width: "15px" }}
              />
              <span className="info-button-text" style={{ paddingLeft: "15px" }}>More Information</span>
            </button>
          </div>
        </div>

        <img
          className="detail-movie-poster-image"
          src="https://ultimagz.com/wp-content/uploads/dune-movie-poster-1630680152236.jpg"
          alt=""
        />
      </div>
      <div className="detail-movie-description">
        <h3>Description</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
