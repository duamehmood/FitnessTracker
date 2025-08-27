
import FaqAccordian from '../utils/FaqAccordian'
import  faqs  from '../../data/faqs'

const FAQ = () => {
    return (
        <div className='bg-[#1e293b] lg:py-[100px] md:py-[70px] py-[50px]'>
            <div className="container mx-auto">
                <h2 className='text-white font-bold lg:text-[35px] md:text-[30px] text-[25px] text-center leading-[100%] '> Frequently Asked <span className='bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] bg-clip-text text-transparent '>Questions</span> </h2>
                <p className='text-[16px] font-[400] text-[#9CA3AF] 2xl:px-105 xl:px-85 lg:px-55 sm:px-20 pt-2 text-center md:pb-10 pb-6'>Got questions? We've got answers to help you get started</p>

                {faqs.map((faq) => (
                    <FaqAccordian key={faq.id} faq={faq} />
                ))}
            </div>

        </div>
    )
}

export default FAQ
