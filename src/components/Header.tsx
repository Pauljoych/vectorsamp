import Image from 'next/image'
import Logo from '@images/logo-samp.png'
import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex items-center justify-between p-2 px-3">
				<div className="flex items-center justify-start">
					<Link href="/">
						<Image src={Logo} width={50} height={50} />
					</Link>
				</div>
				<div className="flex items-center justify-end">
					<div className="flex items-center gap-4 mr-4">
						<Link href="/">
							<a href="">Home ↗</a>
						</Link>
						<Link href="/rules">
							<a href="">Rules ↗</a>
						</Link>
						<a href="https://discord.gg/W2M57Wsbze">Discord ↗</a>
					</div>
					<button className="bg-[#ffe472] rounded-md px-6 py-1 shadow-xl">UCP</button>
				</div>
			</div>
		</header>
	)
}

export default Header
