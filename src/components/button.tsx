import { useRef } from "react"

export const Button = () => {
  const ref = useRef<HTMLButtonElement | null>(null);

  return <button ref={ref}>Click me</button>
}
