import { FC } from 'react'

const Main: FC = () => {
	return (
		<div
			className="
        bg-cover bg-center h-screen
        bg-[url('../../public/images/home-mobile.png')]
        md:bg-none
        xl:bg-[url('../../public/images/home.png')]
      "
		></div>
	)
}

export default Main
