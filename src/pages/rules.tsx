import { FC } from 'react'
// import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI()

export const getStaticProps = async () => {
	const pageId = 'f8455200fde64aa7a16d7133edb7f69d'
	const recordMap = await notion.getPage(pageId)

	return {
		props: {
			recordMap,
		},
		revalidate: 10,
	}
}

const Rules: FC = ({ recordMap }: any) => {
	return (
		<div>
			<Header />
			<div className="flex items-center justify-center px-3">
				<div className="container">
					<NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} disableHeader={true} />
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Rules
