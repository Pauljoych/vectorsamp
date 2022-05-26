import FivemLogo from '@images/logo-fivem.png'
import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
	return (
		<footer>
			<div className="sm:flex items-center sm:justify-between p-2 border-t">
				<div className="flex justify-center sm:items-center sm:justify-start">
					<p>Dari komunitas untuk komunitas.</p>
				</div>
				<div className="flex justify-center sm:items-center sm:justify-end">
					<a href="https://vectorrp.com">
						<Image src={FivemLogo} width={50} height={50} />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
