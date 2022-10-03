import { createSignal } from "solid-js"

export default function Counter(props: {}) {
  const [count, setCount] = createSignal(0)

  return <>
    <button class="counter" onClick={() => setCount(count() + 1)} {...props}>
      Clicks: {count}
    </button>
  </>
}
