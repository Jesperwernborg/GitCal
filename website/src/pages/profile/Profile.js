import React, { useContext, useEffect, useRef } from "react";
import { Redirect }  from "react-router";
import {Link} from "react-router-dom";
import { GithubContext } from "../../components/context/Context";
import loadingImg from "../../img/loading-12.gif";

import "./Profile.scss";

const Profile = (props) => {
  const handle = useRef(props.match.params.id);

  const { githubUser } = useContext(GithubContext);
  const getUser = useRef(useContext(GithubContext));
  const {
    login,
    name,
    avatar_url,
    public_repos,
    followers,
    following,
  } = githubUser;

  useEffect(() => {
    getUser.current.searchGitUser(handle.current);
  }, []);

  const { loading } = useContext(GithubContext);

  if (loading) {
    return (
      <div className="dashboard-container">
        <img src={loadingImg} className="loadingImg" alt="loading"></img>
      </div>
    );
  }

  if (!githubUser.login) {
    return <Redirect to="/"></Redirect>;
  } else {
    return (
      <React.Fragment>
        <div className="linkToDashboard">
        <Link className="Link" to="/"><span>&laquo;</span></Link></div>
      <div id="profilePage">
        <div id="profile-container">
          <img className="userImg" src={avatar_url} alt={name} />
          <h1>{login}</h1>
          <ul>
            <li>
              <span>Repositories</span>
              <p>{public_repos}</p>
            </li>
            <li>
              <span>Followers</span>
              <p>{followers}</p>
            </li>
            <li>
              <span>Following</span>
              <p>{following}</p>
            </li>
          </ul>
        </div>
      </div>
      </React.Fragment>
    );
  }
};
//};
export default Profile;
