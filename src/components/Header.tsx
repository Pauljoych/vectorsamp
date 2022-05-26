import Image from 'next/image'
import Logo from './images/logo.png'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header>
			<div className="flex items-center justify-between p-1">
				<div className="flex items-center justify-start">
					<Image src={Logo} width={50} height={50} />
				</div>
				<div className="flex items-center justify-end">
					<h1>Rules</h1>
				</div>
			</div>
		</header>
	)
}

export default Header
