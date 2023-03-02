export function Fav(id) {
  console.log(id);
  const local = localStorage.getItem("Favourite");
  console.log(JSON.stringify(local));
  localStorage.setItem("Favourite", [...local, id]);
}


