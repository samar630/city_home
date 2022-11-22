import React from "react"

function Hero() {
  return (
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="pexel1.jpg" alt="Los Angeles" className="background" />
          <div class="carousel-caption">
            <h1 className="head">Search Your Next Home</h1>
            <h4>Find new featured property located in your local city</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img src="pexel2.jpg" alt="Chicago" className="background" />
          <div class="carousel-caption">
            <h1 className="head">Search Your Next Home</h1>
            <h4>Find new featured property located in your local city</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img src="pexel3.jpg" alt="New York" className="background" />
          <div class="carousel-caption">
            <h1 className="head">Search Your Next Home</h1>
            <h4>Find new featured property located in your local city</h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
        color="blue"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h5>City/Street</h5>
            <select name="Locations" id="cars">
              <option value="Istanbul">Istanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="Izmir">Izmir</option>
              <option value="Adana">Adana</option>
            </select>
          </div>
          <div class="col-sm">
            <h5>Property Type</h5>
            <select name="Property Type" id="cars">
              <option value="All Categories">All Categories</option>
              <option value="Apartment">Apartment</option>
              <option value="Commercial">Commercial</option>
              <option value="Ofices">Ofices</option>
              <option value="Garage">Garage</option>
            </select>
          </div>
          <div class="col-sm">
            <h5>Price range</h5>
            <select name="Price range" id="cars">
              <option value="From 60,000 to 20 cm">
                From 60,000 to 20 cm{" "}
              </option>
              <option value="From 70,000 to 30 cm">
                From 70,000 to 30 cm{" "}
              </option>
              <option value="From 80,000 to 40 cm ">
                From 80,000 to 40 cm{" "}
              </option>
              <option value="From 90,000 to 50 cm">
                From 90,000 to 50 cm{" "}
              </option>
              <option value="From 100,000 to 60 cm">
                From 100,000 to 60 cm{" "}
              </option>
            </select>
          </div>
          <div class="col-sm">
            <h5>Bedrooms</h5>
            <select name="Bedrooms" id="cars">
              <option value="1 + 1">1 + 1</option>
              <option value="1 + 2">1 + 2</option>
              <option value="1 +3">1 +3</option>
              <option value="1 + 4">1 + 4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
