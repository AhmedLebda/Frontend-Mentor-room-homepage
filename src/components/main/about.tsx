import AboutDark from "/about/image-about-dark.jpg"
import AboutLight from "/about/image-about-light.jpg"

const About = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto] h-full">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] space-y-4 ">
                <img src={AboutDark} alt="about page" className="w-full h-full md:max-w-sm" aria-hidden />
                <article className=" p-8 space-y-6">
                    <h2 className="text-lg font-bold uppercase tracking-[.5rem]">About our furniture</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </article>
            </div>
            <img src={AboutLight} alt="about page" className="w-full h-full md:max-w-sm md:hidden xl:block" aria-hidden />
        </div>
    )
}

export default About