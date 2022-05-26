import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<div
				className="
        bg-cover bg-center h-screen
        bg-[url('../../public/images/home-mobile.png')]
        md:bg-none
        xl:bg-[url('../../public/images/home.png')]
      "
			></div>
			<div
				className="
        bg-cover bg-center h-screen
        bg-[#FFE472]
        md:bg-none
        xl:bg-[url('../../public/images/home-2.png')]
      "
			></div>
			<Footer />
		</div>
	)
}

export default Home
