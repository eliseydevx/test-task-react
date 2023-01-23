import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Photo from "../Photo/Photo";
import { searchStore } from "../../store/SearchStore";
import "./App.scss";

const App = observer(() => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          exact
          path="/photo/:id"
          element={<Photo photos={searchStore.cards} />}
        ></Route>
      </Routes>
    </div>
  );
});

// function App() {
//   // const [querySearch, setQuerySearch] = useState("Capybara");
//   // const [cards, setCards] = useState([]);
//   // const [isSubmitted, setSubmitted] = useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   setSubmitted(true);
//   // };

//   // useEffect(() => {
//   //   if (isSubmitted) {
//   //     api.search(querySearch).then((data) => {
//   //       setCards(
//   //         data.results.map((item) => ({
//   //           id: item.id,
//   //           src: item.urls.regular,
//   //           alt: item.alt_description,
//   //           title: item.description,
//   //           subtitle: item.user.name,
//   //         }))
//   //       );
//   //       setSubmitted(false);
//   //     });
//   //   }
//   // }, [isSubmitted]);

//   const { cards } = useObserver(() => store)

//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Main
//               // handleSubmit={handleSubmit}
//               // querySearch={querySearch}
//               // setQuerySearch={setQuerySearch}
//               // isSubmitted={isSubmitted}
//               // cards={cards}
//             />
//           }
//         />
//         <Route
//           exact
//           path="/photo/:id"
//           element={<Photo photos={cards} />}
//         ></Route>
//       </Routes>
//     </div>
//   );
// }

export default App;
