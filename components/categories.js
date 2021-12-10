import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Tìm kiếm</h3>
      <div className="sidebar-item search-form">
        <form action="">
          <input type="text" />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <h3 className="sidebar-title">Danh mục</h3>
      <div className="sidebar-item categories">
        <ul>
          {categories.map((category) => {
            const { articles } = category || {};
            return (
              <li key={category.id}>
                <Link href={`/category/${category.slug}`}>{category.name}</Link>
                <span
                  style={{ color: "#aaaaaa", fontSize: 14, paddingLeft: 5 }}
                >{`(${articles.length})`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
