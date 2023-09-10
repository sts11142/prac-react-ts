import { useEffect } from "react"

type ButtonColor = "red" | "blue" | "green"

export const Button = () => {
  useEffect(() => {
    const previousButonColor = localStorage.getItem("buttonColor") as ButtonColor  // 暗黙の型を扱うときには明示的に型を示そう
  }, []);

  return <button>Click me!</button>
}
