
const NO_DATA_FRIENDS_ELEMENT = `<div id="display-container" class="center-center">
                                  <h4>Search a friend and share movies</h4>
                                </div>`

let friendsResult = []
let friendsPage = 1
let friendsPageLimit = 10

const displayFriends = async () => {
  let movies = null

  initFriendsDisplay()
  
  if (!movies || !movies.length) {
    display.innerHTML = NO_DATA_FRIENDS_ELEMENT 
    return
  } 

  // movies = await getMovies(movies)  
  // movies = movies.map(WatchMovie)
  // const displayContainer = `<div id="display-container" class="cenger-center">
  //                             ${movies.join()}
  //                           </div>`

  display.innerHTML = displayContainer
  
  
}

const initFriendsDisplay = () => {
  clearSearch()
  screenTitle.innerHTML = "Friends"
  input.onkeyup = searchFriends
  actionIcon.click = searchFriends
  input.placeholder = "Search for friends..."
}

const searchFriends = () => {

  if (searchString.length < 4) 
    return []

  friendsResult = []

  actionIcon.innerHTML = cancelIcon

  friendsResult = friendsResult.concat(getFriendsPage(searchString, friendsPage, friendsPageLimit ))

  let friendElements = ""
  for (friend of friendsResult){
    friendElements += FriendSearchElement({ 
      id: friend.id, 
      username: friend.username
    })
  }

  populateSearchList(friendElements, ViewmoreFriends)
}

const getFriendsPage = (friendName, page, limit) => {
  let result = []
  for ( user of users.slice(0,50)) {
    console.log(user.username.includes(friendName));
    if (user.username.includes(searchString)){
      result.push(user)
    }
  }

  if (page === 1) page = 0

  console.log(page, (page+1) * limit);

  return result.slice(page, (page+1) * limit)
}

const FriendListElement = (user) => {
  return `<div class="movie-watch"> 
            <img src="https://via.placeholder.com/70" alt="">
            <div class="movie-watch-info">
              <div>
                <h5>${user.username}</h5>
              </div>
              <div>
                tags
              </div>
            </div>
            <div class="movie-watch-controller">
              <div>
                subir
              </div>
              <div>
                bajar
              </div>
            </div>
          </div>`
}

const FriendSearchElement = ({id, username }) => {
  return `<li >
            <img src="https://via.placeholder.com/30" alt="">
            <a class="search-friend-a-element">
              ${username}
            </a>
            <button onclick="addFriend('${id}')">Add</button>
          </li>`
}

const ViewmoreFriends = () => {
  return []
}