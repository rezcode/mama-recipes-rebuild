import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import recipeImg from "../../assets/images/banner-image.png";
import style from "./ProfileRecipeMenu.module.scss";

function ProfileRecipeMenu() {
  return (
    <Tabs
      defaultActiveKey="my-recipe"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab
        eventKey="my-recipe"
        title={<span className="text-muted">My Recipe</span>}
      >
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img src={recipeImg} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <div className={style.textResponsive}>
                  <h5 className="card-title display-8">Card title</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={recipeImg} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <div className={style.textResponsive}>
                  <h5 className="card-title display-8">Card title</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={recipeImg} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <div className={style.textResponsive}>
                  <h5 className="card-title display-8">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab
        eventKey="liked-recipe"
        title={<span className="text-muted">Liked Recipe</span>}
      >
        <p>Liked</p>
      </Tab>
    </Tabs>
  );
}

export default ProfileRecipeMenu;
