var posts=["2024/09/03/hello-world/","2024/10/06/Failed to connect to github.com port 443 after 21058 ms Couldn't connect to server/","2024/09/12/maven/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };