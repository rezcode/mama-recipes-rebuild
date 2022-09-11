import React from "react";
import style from "./RecipesList.module.scss";
import { FiSearch } from "react-icons/fi";

const RecipesList = () => {
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
      <div className="container mt-4">
        <form className="row g-3">
          <div className="col-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <FiSearch />
              </span>
            </div>
          </div>
          <div className="col-4">
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </form>
        <div className="row justify-content-center">
          {dummy?.map((item, index) => (
            <div key={index} className="col-md-3">
              <div className={style.cardRecipe}>
                <div className="card">
                  <div className={style.recipeImage}>
                    <img
                      src={item.food_image}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5>{item.title}</h5>
                    <p className="text-muted">Category</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipesList;
