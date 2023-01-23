import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import api from "../api/Api";

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  querySearch = "Capybara";
  cards = [];
  isSubmitted = false;

  handleSubmit = (e) => {
    e.preventDefault();
    this.isSubmitted = true;
    this.search();
  };

  setQuerySearch = (newQuerySearch) => {
    this.querySearch = newQuerySearch;
  };

  search = async () => {
    if (this.isSubmitted) {
      api.search(this.querySearch).then((data) => {
        this.cards = data.results.map((item) => ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        }));
        this.isSubmitted = false;
      });
    }
  };
}

export const searchStore = new SearchStore();
