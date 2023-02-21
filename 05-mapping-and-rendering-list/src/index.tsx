import { FC } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

interface AnimalConfig {
  name: string;
}

const animals: AnimalConfig[] = [
  { name: "dog" },
  { name: "cat" },
  { name: "chicken" },
  { name: "duck" },
  { name: "cow" },
  { name: "sheep" },
  { name: "horse" },
];

const AnimalList = () => {
  return (
    <ul>
      {animals.map(({ name }) => (
        <AnimalItem name={name} />
      ))}
    </ul>
  );
};

const AnimalItem: FC<{
  name: string;
}> = ({ name }) => <li key={name}>{getAnimalLabel(name)}</li>;

const getAnimalLabel = (name: string) => `${name}`;

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<AnimalList />);
