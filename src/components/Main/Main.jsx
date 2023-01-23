import { Spin } from "antd";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Main.scss";
import { observer } from "mobx-react-lite";
import { searchStore } from "../../store/SearchStore";
import { useEffect } from "react";

const Main = observer(() => {
  const handleSubmit = (e) => {
    searchStore.handleSubmit(e);
  };

  useEffect(() => {
    searchStore.search();
  }, [searchStore.isSubmitted]);

  return (
    <div className="Main">
      <form className="Main-search" onSubmit={handleSubmit}>
        <Input
          placeholder={"type to search..."}
          value={searchStore.querySearch}
          handleChange={(e) => (searchStore.setQuerySearch(e.target.value))}
        />
        <Button title="Search" type="submit" />
      </form>

      <div className="Main-cards">
        {searchStore.isSubmitted ? (
          <Spin />
        ) : (
          searchStore.cards.map((card) => <Card key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
});

// function Main() {

//   useEffect(() => {
//     fetchData();
//   }, [isSubmitted]);

//   return (
//     <div className="Main">
//       <form className="Main-search" onSubmit={handleSubmit}>
//         <Input
//           placeholder={"type to search..."}
//           value={querySearch}
//           handleChange={(e) => setQuerySearch(e.target.value)}
//         />
//         <Button title="Search" type="submit" />
//       </form>

//       <div className="Main-cards">
//         {isSubmitted ? (
//           <Spin />
//         ) : (
//           cards.map((card) => <Card key={card.id} {...card} />)
//         )}
//       </div>
//     </div>
//   );
// }

export default Main;
