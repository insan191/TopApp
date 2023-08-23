import { Button, Htag, P, Tag } from "@/components"
import Input from "@/components/Input/Input"
import Textarea from "@/components/Textarea/Textarea"

export default async function Home() {
	return (
		<>
			<Htag tag="h1">tdfg</Htag>
			<Button appearance="ghost" className="dsgfds" arrow="right">
				button
			</Button>
			<Button appearance="primary" className="dsgfds">
				button
			</Button>
			<P size="s">dsfdsfdsf</P>
			<P size="m">dsfdsfdsf</P>
			<P size="l">dsfdsfdsf</P>
			<Tag size="s" color="red">
				dsfdsf
			</Tag>
			<Tag size="m" color="grey">
				dsfdsf
			</Tag>
			<Tag size="s" color="green">
				dsfdsf
			</Tag>
			<Input placeholder="dfs" />
			<Textarea placeholder="dsf" />
		</>
	)
}
