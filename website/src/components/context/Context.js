import React, {useState, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import axios from "axios";
const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos] = useState(mockRepos);
  const [loading, setLoading] = useState(false);

  //error
  const [error, setError] = useState({ show: false, msg: '', name: githubUser.login});

  //Search user

  const searchGitUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log("You have passed your limited amount of requests (60-per-hour)")
    );

    if(response) {
      setGithubUser(response.data);
    } else {
      setGithubUser({})
      toggleError(true, 'There is no user with the name: ', user);
    }
    setLoading(false);
  }

  //Error function
  function toggleError(show = false, msg = '', name = '') {
    setError({ show, msg, name });
  }


  return (
    <GithubContext.Provider value={{githubUser, repos, error,searchGitUser, loading }}>{children}</GithubContext.Provider>
  );
};


export{GithubContext, GithubProvider};