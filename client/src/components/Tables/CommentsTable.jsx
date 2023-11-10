import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, deleteComment } from "../../redux/commentsSlice";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const CommentsTable = () => {
  const dispatch = useDispatch();
  const isPortalVisible = useSelector((state) => state.portal.isVisible);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleDeleteComment = (commentId) => {
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
        dispatch(deleteComment(commentId));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
        console.log(commentId);
      }
    });
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Set the number of items per page
  const totalPages = Math.ceil(comments.data.length / perPage);

  const offset = currentPage * perPage;
  const currentComments = comments.data.slice(offset, offset + perPage);

  let counter = offset + 1;

  return (
    <>

    </>
  );
};

export default CommentsTable;