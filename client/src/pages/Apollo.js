import React from "react";
import BookList from "../components/BookList.js";
import AuthorList from "../components/AuthorList.js";
import PageHeader from "../components/PageHeader.js";

const Apollo = () => {
  return (
    <PageHeader title="Book List">
      <BookList />
      <AuthorList />
    </PageHeader>
  );
};

export default Apollo;
