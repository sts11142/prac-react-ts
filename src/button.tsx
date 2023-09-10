type User = {
  sessionID: string;
  name: string;
};

type Guest = Omit<User, "name">;

export const Button = () => {
  return <button>Click me!</button>
}
