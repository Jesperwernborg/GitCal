import React, { useState, useContext } from "react";
import { GithubContext } from "../context/Context";
import { Link } from "react-router-dom";
import "./SearchUser.scss";

function SearchUser() {
  const [user, setUser] = useState("");

  const { searchGitUser, error, loading } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGitUser(user);
      //setUser(""); input blank efter sök
    }
  };

  return (
    <div className="searchContainer">
     
      <form >
        <div className="form-control">
          <div className="input-field">
            <input placeholder="Github username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          {!loading && (<Link className="linkBtn" to={`/${user}`} onSubmit={handleSubmit} type="submit">
            Result
          </Link>)}
          
        </div>
      </form>
      {error.show && (
        <div className="errorMsg">
          {error.msg}
          <p>{error.name}</p>
        </div>
      )}
    </div>
  );
}
export default SearchUser;
