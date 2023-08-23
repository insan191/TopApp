import { getPage } from "@/api/page"
import { getProducts } from "@/api/products"
import { Htag, Tag } from "@/components"
import Advantages from "./components/Advantages/Advantages"
import Cap from "./components/Cap/Cap"
import HhData from "./components/HhData/HhData"
import styles from "./page.module.css"

export default async function layout({
	params,
	children,
}: {
	children: React.ReactNode
	params: { alias: string; products: string }
}) {
	const page = await getPage(params.alias)
	const products = await getProducts(page?.category, 10)
	return (
		<>
			<Cap page={page} products={products} />
			{children}
			<div className={styles.title}>
				<Htag tag="h1">Вакансии - {page?.category}</Htag>
				<Tag size="m" color="red">
					hh.ru
				</Tag>
			</div>
			<HhData {...page?.hh} />
			{page?.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Преимущства</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page?.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page?.tags.map(t => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</>
	)
}
