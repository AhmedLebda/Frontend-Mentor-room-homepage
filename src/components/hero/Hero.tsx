import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { HeaderSlidesData } from "@/data/data"

const Slides = HeaderSlidesData.map(slide => (
    <CarouselItem className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
            <picture>
                <source srcSet={slide.image.desktop.src} media="(min-width: 600px)" />
                <img src={slide.image.mobile.src} alt={slide.image.desktop.alt} className="w-full h-full" />
            </picture>
            <CarouselNext className="bottom-0 right-0 rounded-none" size="lg" variant="default" />
            <CarouselPrevious className="bottom-0 right-24 rounded-none translate-x-3" size="lg" variant="default" />
        </div>
        <div className=" max-w-xl mx-auto flex px-8 py-4 gap-8 flex-col justify-center items-start">
            <h1 className="text-4xl font-bold ">{slide.title}</h1>
            <p className="text-xl text-gray-700">
                {slide.description}
            </p>
            <Button className="uppercase tracking-[1rem] text-lg hover:opacity-75 p-0" variant="ghost">
                shop now
                <img src="/icon-arrow.svg" alt="arrow icon" aria-hidden={true} />
            </Button>
        </div>
    </CarouselItem>
))

const Hero = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full">

            <CarouselContent>
                {Slides}
            </CarouselContent>

        </Carousel>

    )
}

export default Hero