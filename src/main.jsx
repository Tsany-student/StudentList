import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Store";

import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import UpdateTodo from "./UpdateTodo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/StudentList">
      <Routes>
        <Route path="/" element={<ListStudent />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);