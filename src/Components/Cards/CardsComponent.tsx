import { useNavigate } from "react-router-dom";
import "../../Styles/Custom.css";
import { Card } from "./Card";
export const CardsComponent = () => {

    const navegar = useNavigate()

  return (
    /* From Uiverse.io by Thomasfadi */
    <div className="cards m-auto mt-4 flex flex-col md:flex-row gap-5">
      <Card title="Users" description="Users management" onClick={navegar} url="/users" />
      <Card title="Card 2" description="Example" onClick={navegar} url="/"/>
    </div>
  );
};
