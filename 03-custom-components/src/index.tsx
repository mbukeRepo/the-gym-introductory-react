import React, {FC} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
interface ButtonConfig {
  key: number;
  id: string;
  color: string;
}

type CustomButtonProps = Pick<ButtonConfig, "id" | "color">;

const CustomButton: FC<CustomButtonProps> = ({ id, color }: CustomButtonProps) => {
  const showAlert:any = () => {
    alert(`You clicked on Button ${id}`);
  }
  return (
    <button
      style={{
        backgroundColor: color,
        width: 150,
        height: 60,
        cursor: "pointer",
      }}
      onClick={showAlert}
    >
      Button {id}
    </button>
  );
}

const buttonConfig: ButtonConfig[] = [
  {
    id: "1",
    key: 1,
    color: "green",
  },
  {
    id: "2",
    key: 2,
    color: "white",
  },
  {
    id: "3",
    key: 3,
    color: "red",
  },
];

const buttonGroup = (
  <>
    <div className="container">
      {buttonConfig.map(({ id, color, key }) => {
        return <CustomButton key={key} id={id} color={color} />;
      })}
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(buttonGroup);
