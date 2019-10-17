import React from "react";
import BookList from "../components/BookList.js";
import PageHeader from "../components/PageHeader.js";

const Apollo = () => {
  return (
    <PageHeader title="Book List">
      <BookList />
    </PageHeader>
  );
};

export default Apollo;
