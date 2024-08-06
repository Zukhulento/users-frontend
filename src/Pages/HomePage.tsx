import { CardsComponent } from "../Components/Cards/CardsComponent";
import { PrivateLayout } from "../Layouts/PrivateLayout";

export const HomePage = () => {
  return (
    <PrivateLayout>
      <div className="flex">
        <CardsComponent />
      </div>
    </PrivateLayout>
  );
};
