import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./NewRecipes.module.scss";

const NewRecipes = () => {
  const dummy = [
    {
      id: 1,
      title: "Prawn Tikkala",
      ingredients:
        "1 large onion , roughly chopped\r\n1 thumb-sized piece ginger , peeled and grated\r\n2 large garlic cloves\r\n1 tbsp rapeseed oil\r\n2-3 tbsp tikka curry paste\r\n400g can chopped tomatoes\r\n2 tbsp tomato purée\r\n½ tbsp light brown soft sugar\r\n3 cardamom pods , bashed\r\n200g brown basmati rice",
      food_image:
        "http://res.cloudinary.com/dll4afml9/image/upload/v1662544309/npigejpdk0hcigcqjivj.webp",
      user_id: 1,
      id_category: 3,
    },
    {
      id: 2,
      title: "Beef Burritos",
      ingredients:
        "1 large onion , roughly chopped\r\n1 thumb-sized piece ginger , peeled and grated\r\n2 large garlic cloves\r\n1 tbsp rapeseed oil\r\n2-3 tbsp tikka curry paste\r\n400g can chopped tomatoes\r\n2 tbsp tomato purée\r\n½ tbsp light brown soft sugar\r\n3 cardamom pods , bashed\r\n200g brown basmati rice",
      food_image:
        "http://res.cloudinary.com/dll4afml9/image/upload/v1662472564/irklxuqfkjg8zntu9jd6.webp",
      user_id: 1,
      id_category: 3,
    },
    {
      id: 3,
      title: "Beef Ragout",
      ingredients:
        "1 large onion , roughly chopped\r\n1 thumb-sized piece ginger , peeled and grated\r\n2 large garlic cloves\r\n1 tbsp rapeseed oil\r\n2-3 tbsp tikka curry paste\r\n400g can chopped tomatoes\r\n2 tbsp tomato purée\r\n½ tbsp light brown soft sugar\r\n3 cardamom pods , bashed\r\n200g brown basmati rice",
      food_image:
        "http://res.cloudinary.com/dll4afml9/image/upload/v1662472512/xdxjw8muosmdzsguab7x.webp",
      user_id: 1,
      id_category: 3,
    },
    {
      id: 4,
      title: "Strawberry Mousse",
      ingredients:
        "1 large onion , roughly chopped\r\n1 thumb-sized piece ginger , peeled and grated\r\n2 large garlic cloves\r\n1 tbsp rapeseed oil\r\n2-3 tbsp tikka curry paste\r\n400g can chopped tomatoes\r\n2 tbsp tomato purée\r\n½ tbsp light brown soft sugar\r\n3 cardamom pods , bashed\r\n200g brown basmati rice",
      food_image:
        "http://res.cloudinary.com/dll4afml9/image/upload/v1662472335/ntxtcbvfzdk3tbl2n4az.webp",
      user_id: 1,
      id_category: 3,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <h5 className="text-muted">New Recipes</h5>
          </div>
          <div className="col-6 text-end">
            <Link
              className={style.link}
              id="RouterNavLink"
              to={"/recipes-list"}
            >
              <span className="text-muted">
                See more <BsArrowRightShort size={20} />
              </span>
            </Link>
          </div>
          <div className="container mb-3">
            <hr />
          </div>
        </div>
        {dummy.map((item, index) => (
          <div className="row justify-content-center" key={index}>
            <div className="container">
              <div className="card mb-3 p-0">
                <div className="row g-0">
                  <div className="col-md-3">
                    <div className={style.cardImage}>
                      <img
                        src={item.food_image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewRecipes;
