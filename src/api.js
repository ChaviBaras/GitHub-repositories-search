export function getApi(search) {
    return fetch(`https://api.github.com/search/repositories?q=${search}&per_page=100&page=1`)
      .then((res) => res.json())
      .then((res) => {

        const { items } = res

        this.setState({
          repos: items
        })

      })
      .catch((error) =>{
        console.error(error);
      });
}

export function getBookmarks() {
  var archive = [];
  
  Object.keys(sessionStorage).map((key) => (
    archive.push(JSON.parse(sessionStorage.getItem(key)))
  ))

  return archive;
}
