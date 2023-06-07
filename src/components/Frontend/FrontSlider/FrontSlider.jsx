import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination } from "swiper";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import "swiper/css";
import "swiper/css/pagination";
import Header from '../shared/Header';

const FrontSlider = () => {

         const [axiosSecure] = useAxiosSecure()
  const { loading } = useContext(AuthContext)
  const { refetch, data: sliderClass = [] } = useQuery({
    queryKey: ['sliderClass'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        "/classes"
      )
      return res.data
    },
  })
    
    console.log(sliderClass);

    return (
        <div className='mt-8 max-w-screen-xl mx-auto'>
                <Header slogan={"Learn Unlimited Sports Lessions With Sports Shala"}></Header>
            
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,
            autoplay: {delay: 3000},
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
                {
                    sliderClass?.slice(0, 6).map(sliderClass => (
                        <SwiperSlide>
                        <div className="card w-80 bg-base-100 shadow-xl">
                        <figure className="px-6 pt-10">
                            <img src={sliderClass?.image} alt="Shoes" className="mx-auto object-cover rounded h-56 w-64 rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{sliderClass.name}</h2>
                            <p>{sliderClass.instructor.name}</p>
                            <div className="card-actions">
                            <button className="btn btn-sm btn-primary mt-3">Learn More</button>
                            </div>
                        </div>
                        </div>

                        </SwiperSlide>
                    ))
         }
               
      </Swiper>
        </div>
    );
};

export default FrontSlider;