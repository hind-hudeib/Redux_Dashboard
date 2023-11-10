import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  deletePostData,
  addPostData,
} from "../../redux/postsSlice";

import Swal from "sweetalert2";

const PostsTable = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // you are dispatching an action creator (function that returns an action) from your component.
  // This action creator (fetchPosts) is responsible for initiating an asynchronous operation,
  // like fetching data from an API.
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // State for form input values
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input values (you can add more validation if needed)

    // Create an object with the new post data
    const newPostData = {
      author: author,
      title: title,
      description: description,
    };

    console.log(newPostData);
    // Dispatch the action to add the new post
    dispatch(addPostData(newPostData));

    // Clear the form after submission
    setAuthor("");
    setTitle("");
    setDescription("");
  };

  const handleDeletePost = (postId) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePostData(postId));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Set the number of items per page
  const totalPages = Math.ceil(posts.data.length / perPage);

  const offset = currentPage * perPage;
  const currentPosts = posts.data.slice(offset, offset + perPage);

  // Auto numbering
  let counter = offset + 1;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Add Post</h2>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter post description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add Post
        </button>
      </form>
    </>
  );
};

export default PostsTable;
