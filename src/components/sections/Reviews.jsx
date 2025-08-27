import ReviewsCard from '../utils/ReviewsCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        "id": 1,
        "initial": "A",
        "name": "Alex Johnson",
        "profession": "Professional Athlete",
        "desc": "FitTracker Pro revolutionized my training. The analytics helped me identify weak points and  performance."
    },
    {
        "id": 2,
        "initial": "S",
        "name": "Sarah Mitchell",
        "profession": "Fitness Enthusiast",
        "desc": "The best workout tracker I've ever used. Simple, powerful, and incredibly motivating. Highly recommend!."
    },
    {
        "id": 3,
        "initial": "M",
        "name": "Mike Davis",
        "profession": "Personal Trainer",
        "desc": "I use FitTracker Pro with all my clients. The progress tracking features are phenomenal and keep everyone motivated."
    },
    {
        "id": 4,
        "initial": "A",
        "name": "Alex Johnson",
        "profession": "Professional Athlete",
        "desc": "FitTracker Pro revolutionized my training. The analytics helped me identify weak points and performance."
    },
    {
        "id": 5,
        "initial": "S",
        "name": "Sarah Mitchell",
        "profession": "Fitness Enthusiast",
        "desc": "The best workout tracker I've ever used. Simple, powerful, and incredibly motivating. Highly recommend!."
    },
    {
        "id": 6,
        "initial": "M",
        "name": "Mike Davis",
        "profession": "Personal Trainer",
        "desc": "I use FitTracker Pro with all my clients. The progress tracking features are phenomenal and keep everyone motivated."
    },
    
    
]


const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
        
         {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
         

    ]

};

const Reviews = () => {
    return (
        <div className='bg-primary lg:py-[100px] md:py-[70px] py-[50px] text-center '>
            <div className="container mx-auto">
                <div>
                    <h2 className='text-white font-bold lg:text-[35px] md:text-[30px] text-[25px] text-center leading-[110%] '> What Athletes <span className='bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] bg-clip-text text-transparent '> Say</span> </h2>
                    <p className='text-[16px] font-[400] text-[#9CA3AF] 2xl:px-105 xl:px-85 lg:px-55 sm:px-20 pt-2 text-center lg:pb-15 md:pb-10 pb-6'>Join thousands of satisfied users who transformed their fitness journey</p>

                    <Slider {...settings}>
                        {reviews.map((review ,index) => (
                            <div key={review.id} className="px-4">
                                <ReviewsCard review={review} index={index} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Reviews
