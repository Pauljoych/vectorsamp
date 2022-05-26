import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<div>
			<div
				className="
        snap-start bg-cover bg-center h-screen
        bg-[url('../../public/images/home-mobile.png')]
        md:bg-none
        xl:bg-[url('../../public/images/home.png')]
      "
			>
				<Header />
			</div>
			<Footer />
		</div>
	)
}

export default Home
