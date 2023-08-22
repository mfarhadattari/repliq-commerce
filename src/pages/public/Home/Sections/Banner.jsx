import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import banner1 from "../../../../assets/images/banners/banner1.jpg";
import banner2 from "../../../../assets/images/banners/banner2.jpg";
import banner3 from "../../../../assets/images/banners/banner3.jpg";

const Banner = () => {
  const sliders = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
  ];
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img src={slide.image} className="max-h-[500px] w-full" />
              <div className="w-full h-full absolute top-0 bg-black bg-opacity-30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
