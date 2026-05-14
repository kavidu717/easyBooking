import HeroSection from '../Components/HeroSection'
import PlaceText from '../Components/PlaceText'
export default function Home(){
    return(
        <>
        <HeroSection/>
        <p className='text-center text-2xl capitalize p-3 font-bold text-green-600'>you can search place and book any where around <span className='text-yellow-400'>srilanka</span> </p>
        <PlaceText/>
        </>
    )
}