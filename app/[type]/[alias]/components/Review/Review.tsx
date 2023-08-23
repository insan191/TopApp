import { Rating } from "@/components"
import Divider from "@/components/Divider/Divider"
import cn from "classnames"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import styles from "./Review.module.css"
import { ReviewProps } from "./Review.props"
import UserIcon from "./user.svg"

const Review = ({
	review: { name, description, rating, _id, title, createdAt },
	review,
	className,
	...props
}: ReviewProps) => {
	return (
		<>
			<div className={cn(styles.review, className)} {...props}>
				<UserIcon className={styles.user} />
				<div className={styles.title}>
					<span className={styles.name}>{name}:</span>
					<span>{title}</span>
				</div>
				<div className={styles.date}>
					{format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
				</div>
				<div className={styles.rating}>
					<Rating rating={rating} />
				</div>
				<div className={styles.description}>{description}</div>
			</div>
			<Divider />
		</>
	)
}

export default Review
