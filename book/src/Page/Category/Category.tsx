import React, { useEffect, useState } from "react";
import "./category.css";
import { MdDelete } from "react-icons/md";
import { projectAPI } from "../../Components/projectAPI";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState([]);
  // const [view, setView] = useState(true);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const data = await projectAPI.get();
      // console.log(data.data);
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/category/delete/${id}`);
      loadCategory();
    } catch (error) {
      console.log(error);
    }
  };

  let count = 1;

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
              <div className="ctl"></div>
              {/* <div className="ctl"></div> */}
            </div>
            <ul className="category_body ">
              {category.map((d: any) => {
                return (
                  <div className="cb category_list" key={d.id}>
                    <div className=" clv">{count++}</div>
                    <div className="category_name clv">{d.name}</div>
                    <div className="clv">
                      <button onClick={() => deleteCategory(d.id)}>
                        <MdDelete />
                      </button>
                    </div>

                    {/* <div className="clv">
                      <NavLink to={`/updatacategory/${d.id}`}>
                        <button>
                          <MdEdit />
                        </button>
                      </NavLink>
                    </div> */}
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
