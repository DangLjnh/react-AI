import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  const commentList = [
    {
      id: 1,
      comment: "i love this book",
    },
    {
      id: 2,
      comment: "i hate this book",
    },
  ];
  return (
    <div>
      {commentList.map((content) => {
        return (
          <>
            <ReviewItem content={content}></ReviewItem>
          </>
        );
      })}
    </div>
  );
};

export default ReviewList;
