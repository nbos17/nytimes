import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "19cb45771a5d461b904231d78c35ab1b";


export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  search: function(query) {
    console.log("full query: " + BASEURL + APIKEY + query);
    return axios.get(BASEURL + APIKEY + query);
  }

};


// import axios from "axios";

// const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const queryFix = "&q=";

// const API = {
//   // Retrieves all articles from the db
//   getArticles: function() {
//     return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
//   },
//   // Saves a new article to the db
//   saveArticle: function(article) {
//     return axios.post(process.env.REACT_APP_API_HOST + "/api/articles", { article });
//   },
//   // Deletes an article from the db
//   deleteArticle: function(id) {
//     console.log('in API delete article ')
//     return axios.delete(process.env.REACT_APP_API_HOST + `/api/articles/${id}`);
//   },
//   // Toggles an article's favorite property in the db
//   favoriteArticle: function(article) {
//     article.favorited = !article.favorited;
//     const { _id, favorited } = article;
//     return axios.patch(process.env.REACT_APP_API_HOST + `/api/articles/${_id}`, { favorited });
//   },
//   search: function(query) {
//     console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
//     return axios.get(BASEURL + APIKEY + queryFix + query);
//   }
// };

// export default API;