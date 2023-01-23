// import { action, makeAutoObservable, makeObservable } from "mobx";
// import api from "../api/Api";

// class SearchStore {
//   querySearch = "Capybara";
//   cards = [];
//   isSubmitted = false;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   @action handleSubmit = (e) => {
//     e.preventDefault();
//     this.isSubmitted = true;
//     this.fetchData();
//   };

//   @action setQuerySearch = (newQuerySearch) => {
//     this.querySearch = newQuerySearch;
//   };

//   @action fetchData = () => {
//     if (this.isSubmitted) {
//       api.search(this.querySearch).then((data) => {
//         this.cards = data.results.map((item) => ({
//           id: item.id,
//           src: item.urls.regular,
//           alt: item.alt_description,
//           title: item.description,
//           subtitle: item.user.name,
//         }));
//         this.isSubmitted = false;
//       });
//     }
//   };
// }

// export const store = new SearchStore();
