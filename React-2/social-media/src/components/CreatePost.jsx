import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store"

export default function CreatePost() {
  const {addPost}=useContext(PostList)

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userID=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userID,postTitle,postBody,reactions,tags);

  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">
          User Id
        </label><br></br>
        <input
          type="text"
          ref={userIdElement}
          className="htmlForm-control"
          id="userID"
          placeholder="Enter Your Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">
          Post Title
        </label><br></br>
        <input
          type="text"
          ref={postTitleElement}
          className="htmlForm-control"
          id="title"
          placeholder="Enter your post title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">
          Post Content
        </label><br></br>
        <textarea rows="4"
          type="text"
          ref={postBodyElement}
          className="htmlForm-control"
          id="body"
          placeholder="Enter your post content"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="htmlForm-label">
          Number of reactions
        </label><br></br>
        <input
          type="text"
          ref={reactionsElement}
          className="htmlForm-control"
          id="reactions"
          placeholder="how many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="htmlForm-label">
          Hash Tag
        </label><br></br>
        <input
          type="text"
          ref={tagsElement}
          className="htmlForm-control"
          id="tags"
          placeholder="Enter Your Tags With Space"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
