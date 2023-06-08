import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination } from "swiper";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import "swiper/css";
import Header from '../shared/Header';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';

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
    
    



    return (
        <div className='mt-8 max-w-screen-xl mx-auto '>

                <Header slogan={"Learn Unlimited Popular Sports Lessions"}></Header>
            
            <div className="border border-2 shadow-xl p-3 bg-gradient-to-l from-sky-800 to-indigo-900 p-8 rounded-xl shadow-xl">
                <Swiper
                    modules={[Autoplay]}
        slidesPerView={4}
                    autoplay={{
                        delay: 1000,
        disableOnInteraction: true            }}
        className="mySwiper swiper-slide"
        >
                {
                    sliderClass?.slice(0, 6).map(sliderClass => (
                        <SwiperSlide>
                        <div className="card w-64 bg-base-100 shadow-xl ml-6 hover:scale-110">
                        <figure className="px-2 pt-3">
                            <img src={sliderClass?.image} alt="Shoes" className="mx-auto object-cover h-56 w-64 rounded-xl  " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mt-[-24px]">{sliderClass.name}</h2>
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
        </div>
    );
};

export default FrontSlider;