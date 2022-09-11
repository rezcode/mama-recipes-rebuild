import React from "react";
import ProfileRecipeMenu from "../../components/ProfileRecipeMenu/ProfileRecipeMenu";
import style from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h5 className="text-muted">Profile</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="row mt-4 justify-content-center">
              <div className="col-6">
                <div className={style.userProfile}>
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    alt="profile"
                  />
                </div>
                <h5 className="text-muted text-center mt-3">
                  Rezha Riansyah R.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className={`card ${style.recipeProfile}`}>
              <div className="card-body">
                <ProfileRecipeMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
