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
        <Route exact path="/test-task-react" element={<Main />} />
        <Route
          exact
          path="/test-task-react/photo/:id"
          element={<Photo photos={searchStore.cards} />}
        ></Route>
      </Routes>
    </div>
  );
});
export default App;
