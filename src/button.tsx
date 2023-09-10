const buttonTextOptions = [
  "click me!",
  "click me again!",
  "click me one more time!"
] as const;

export const Button = () => {
  return (
    <button>
      {buttonTextOptions.map((option) => {
        return option;
      })}
    </button>
  )
}
