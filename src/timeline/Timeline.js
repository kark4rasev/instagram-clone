import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstions';
import Post from "./posts/Post";

function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "redian",
        postImage: "https://avatars.mds.yandex.net/i?id=461b65173b871584c6ddec1cca0784efae52a18c-10089679-images-thumbs&n=13",
        likes: 12,
        timestamp: "2d",
      },
      {
        user: "johndoe",
        postImage: "https://avatars.mds.yandex.net/i?id=73f6ae069535ea2df3f865def9272d4758841dd8-9858449-images-thumbs&n=13",
        likes: 40,
        timestamp: "12h",
      },
      {
        user: "cdow",
        postImage: "https://avatars.mds.yandex.net/i?id=a14641668e97ca5adc7e9511e84c459c4673322c-10158105-images-thumbs&n=13",
        likes: 46,
        timestamp: "10h",
      },
      {
        user: "dort",
        postImage: "https://avatars.mds.yandex.net/i?id=1ae75a6d9bf1f75bd3aadeec422d92e4ee3697c9-9744150-images-thumbs&n=13",
        likes: 56,
        timestamp: "7h",
      },
      {
        user: "rasder",
        postImage: "https://avatars.mds.yandex.net/i?id=c88153af10b7efb4b0772857e6480e52421b1af5-9870747-images-thumbs&n=13",
        likes: 88,
        timestamp: "34min",
      },
    ]);
  return <div className="timeline">
    <div className="timeline__left">
      <div className="timeline__posts">
        {posts.map(post => (
          <Post 
            user={post.user}  
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp}/>
        ))}
      </div>
    </div>
    <div className="timeline__right">
        <Sugesstions />
    </div>
  </div>  
}

export default Timeline;
