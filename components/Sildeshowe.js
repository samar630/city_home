import Slider from "@madzadev/image-slider"
import "image-slider/dist/index.css"

import React from "react"

function Sildeshowe() {
  const images = [
    { url: "pexel1.jpg" },
    { url: "pexel2.jpg" },
    { url: "pexel3.jpg" }
  ]
  return (
    <div>
      <Slider imageList={images} width={1000} height={300} />
    </div>
  )
}

export default Sildeshowe
