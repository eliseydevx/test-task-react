import { Spin } from "antd";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Main.scss";

function Main({
  handleSubmit,
  querySearch,
  setQuerySearch,
  isSubmitted,
  cards,
}) {
  // const {
  //   querySearch,
  //   cards,
  //   isSubmitted,
  //   handleSubmit,
  //   setQuerySearch,
  //   fetchData,
  // } = useObserver(() => store);

  // useEffect(() => {
  //   fetchData();
  // }, [isSubmitted]);

  return (
    <div className="Main">
      <form className="Main-search" onSubmit={handleSubmit}>
        <Input
          placeholder={"type to search..."}
          value={querySearch}
          handleChange={(e) => setQuerySearch(e.target.value)}
        />
        <Button title="Search" type="submit" />
      </form>

      <div className="Main-cards">
        {isSubmitted ? (
          <Spin />
        ) : (
          cards.map((card) => <Card key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
}

export default Main;
