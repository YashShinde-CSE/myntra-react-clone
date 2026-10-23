import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
import EmptyBagMsg from "../components/EmptyBagMsg";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const Items = useSelector((state) => state.items);
  const finalItems = Items.filter((item) => bagItems.includes(item.id));

  return (
    <>
      <main>
        {finalItems.length > 0 ? (
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>

            <BagSummary />
          </div>
        ) : (
          <EmptyBagMsg />
        )}
      </main>
    </>
  );
};
export default Bag;
