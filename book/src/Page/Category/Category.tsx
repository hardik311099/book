import React, { useEffect, useState } from "react";
import "./category.css";
import { projectAPI } from "../../Components/projectAPI";
import { NavLink } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    loadCategory();
  });
  const loadCategory = async () => {
    try {
      const data = await projectAPI.get();
      console.log(data.data);
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="categorys">
        <div className="categorywrapper">
          <div className="category_add">
            <div className="categorysadd_buttons">
              <NavLink to="/addcategory" className={"buttonaddcategory"}>
                Add Category
              </NavLink>
            </div>
          </div>
          <div className="categorybox">
            <div className="categorys_heders cb">
              <div className="category_id ctl"> Id</div>
              <div className="category_name ctl">Name</div>
            </div>
            <ul className="category_body ">
              {category.map((d: any) => {
                console.log("d", d);
                return (
                  <div className="cb category_list">
                    <div className=" clv">{d.id}</div>
                    <div className="category_name clv">{d.name}</div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
