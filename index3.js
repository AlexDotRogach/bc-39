// Є масив об'єктів потрібно на перебір виводити лише
// 2 ключі isPublic, rating
// додатково вивести середне число рейтингу

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "Jacques Gluke",
    author: "Author",
    genres: ["adventure"],
    isPublic: false,
    rating: 6.38,
  },
];
function avgRating(books) {
  for (const { isPublic, rating } of books) {
    const publicBook = isPublic ? "Публічний" : "Непублічний";
    const info = `Тип книги - ${publicBook}, рейтинг - ${rating}`;
    console.log(info);
  }
}
avgRating(books);
