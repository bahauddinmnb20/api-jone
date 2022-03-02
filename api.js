
  
  function getJson(){

      fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json,"ji amar sunar banlag"))   ;
    }

    function loadData(){
        fetch("https://jsonplaceholder.typicoe.com/users")
        .then(date => date.json())
        .then(user => console.log(user));
    }
    loadData()
    // displayUsers();

    function loadPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then(posts => displayUsers(posts))
    }

    function displayUsers(posts){
        const title = document.getElementById("title");
        for(const post of posts){
            const div = document.createElement("div");
            div.classList.add("po")
            div.innerHTML = `
            <h3>${post.id}</h3>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;


    
            // h3.innerText = `ìd: ${post.id}, Title: ${post.title}`;

            title.appendChild(div);

        }
    }