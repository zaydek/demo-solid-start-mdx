import { ParentProps } from "solid-js"

export function Thing(props: ParentProps) {
	return <>
		<style jsx>{`
			.foo {
				background-color: red;
			}
		`}</style>
		<div class="foo">
			{props.children}
		</div>
	</>
}
