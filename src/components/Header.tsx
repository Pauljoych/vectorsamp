import Image from 'next/image'
import Logo from '@images/logo-samp.png'
import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header className="sticky top-0 bg-white opacity-90">
			<div className="flex items-center justify-between p-2 px-3">
				<div className="flex items-center justify-start">
					<Link href="/">
						<Image src={Logo} width={50} height={50} />
					</Link>
				</div>
				<div className="flex items-center justify-end gap-3">
					<Link href="/">
						<a href="">Home ↗</a>
					</Link>
					<Link href="/rules">
						<a href="">Rules ↗</a>
					</Link>
					<a href="https://discord.gg/W2M57Wsbze">Discord ↗</a>
				</div>
			</div>
		</header>
	)
}

export default Header
