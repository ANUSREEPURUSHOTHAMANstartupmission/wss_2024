<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import {Autoplay, Navigation} from 'swiper';
    import 'swiper/css';
    import "swiper/css/navigation";
    import programs from './data/programs.json';
    
  </script>
  <div class="px-16 mt-8">
  <Swiper
      modules="{[Autoplay, Navigation]}"
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      navigation={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
      }}
      breakpoints={{
          "768": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "1300": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
      }}
  >
      {#each programs as program}
          <SwiperSlide>
              <div class="card" style="background-image: url('/img/{program.image}');"></div>
              <div class="card-title text-white" >{program.title}</div>
          </SwiperSlide>
      {/each}
  </Swiper>
  </div>
  <style>
      .card {
          background-color: white;
          border-radius: 1rem;
          border-bottom-left-radius: 0;
          height: 20rem;
          box-shadow: 2px 2px 10px 2px rgba(0,0,0,.5);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          
      }
      .card-title {
          font-family: 'Josefin Sans', 'sans-serif';
          padding: 5px 0;
          font-size: 1.25rem;
      }
      .card-title:hover {
          cursor: default;
          color: rgb(249 66 30 / var(--tw-text-opacity));
      }
  </style>
  