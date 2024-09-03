var posts=["2024/09/03/hello-world/","2024/09/03/docker-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };