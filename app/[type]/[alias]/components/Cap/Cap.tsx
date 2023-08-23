import { Htag, Tag } from "@/components"
import styles from "./Cap.module.css"
import { CapProps } from "./Cap.props"
const Cap = ({ page, products }: CapProps) => {
	return (
		<div className={styles.cap}>
			<Htag tag="h1">{page?.title}</Htag>
			{products && (
				<Tag color="grey" size="m">
					{products.length}
				</Tag>
			)}
			<>sort</>
			{/* <Sort setSort={setSort} sort={sort} /> */}
		</div>
	)
}

export default Cap
