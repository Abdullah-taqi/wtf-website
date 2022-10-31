import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://d1gzvbhpg92x41.cloudfront.net/gallery_upload/1664366969064-gym-membership-sale-banner-1-5fe0b55ba1d4c.png" },
    { url: "https://d1gzvbhpg92x41.cloudfront.net/gallery_upload/1664366969178-image.webp" }
]
function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height="60vh"
        images={images}
        showBullets={true}
        autoPlay = {true}
        slideDuration = {1}
      />
    </div>
  )
}

export default Slider



