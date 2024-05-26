import { reactive, ref } from "vue";
import {
  togDdMenu,
  showWelcomeToast,
  showSignUpToast,
  loader,
} from "./controller";
import router from "../router";
import axios from "axios";
import { data } from "./data";

// States_--_-_-_-___-_-_-_--__-_----_-__-___-_-----____-
const apiBase = "http://localhost:8000";

const isAuthenticated = ref(localStorage.getItem("auth") == 1);
const user = ref(JSON.parse(localStorage.getItem("user")));

const errors = ref(null);

// Actions_--_-_-_-___-_-_-_--__-_----_-__-___-_-----____-
const fetchPublicApi = async (
  endPoint = "",
  params = {},
  requestType = "GET"
) => {
  let request = {
    method: requestType.toUpperCase(),
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  };
  if (
    requestType.toUpperCase() == "POST" ||
    "PUT" == requestType.toUpperCase()
  ) {
    request.body = JSON.stringify(params);
  }

  const res = await fetch(apiBase + endPoint, request);
  const response = await res.json();
  return response;
};

const fetchAuthorizedApi = async (
  endPoint = "",
  params = {},
  requestType = "GET"
) => {
  const token = getUserToken();
  let request = {
    method: requestType.toUpperCase(),
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${token}`,
    },
  };
  if (
    requestType.toUpperCase() == "POST" ||
    "PUT" == requestType.toUpperCase()
  ) {
    request.body = JSON.stringify(params);
  }

  const res = await fetch(apiBase + endPoint, request);

  const response = await res.json();
  return response;
};

// to Upload Admin's Contents
// --------------------------

const fetchUploadApi = async (endPoint = "", params = {}) => {
  const token = getUserToken();

  const res = await axios.post(apiBase + endPoint, params, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await res.data;
  return response;
};

//
// ------------------------------------

const login = (email, password) => {
  loader.value = true;
  fetchPublicApi("/api/login", { email, password }, "POST").then((res) => {
    if (res.status) {
      isAuthenticated.value = true;
      user.value = res.data;
      console.log(res);
      localStorage.setItem("auth", 1);
      localStorage.setItem("user", JSON.stringify(res.data));

      if ("admin" == res.data.type) {
        router.push("/admin");
        loader.value = false;
        setTimeout(function () {
          showWelcomeToast(user.value.name);
        }, 1000);
      } else {
        router.push("/");
        loader.value = false;
        setTimeout(function () {
          showWelcomeToast(user.value.name);
        }, 1000);
      }
    } else {
      console.log(res);
      errors.value = res.message;
      console.log(errors);
    }
  });
};

const register = (name, email, password) => {
  fetchPublicApi("/api/register", { name, email, password }, "POST").then(
    (res) => {
      if (res.status) {
        router.push("/login");
        setTimeout(function () {
          showSignUpToast(user.value.name);
        }, 1000);
        // errors.value = null;
      } else {
        errors.value = res.errors;
        console.log(errors);
      }
    }
  );
};

const logout = () => {
  isAuthenticated.value = false;
  user.value = {};
  localStorage.setItem("auth", 0);
  localStorage.setItem("user", "{}");
  togDdMenu();
  router.push("/login");
};

const getUserType = () => {
  return user.value.type;
};

const getUserToken = () => {
  return user.value.accessToken;
};

const getCategories = () => {
  const res = fetchPublicApi("/api/categories", {}, "GET");
  res.then((response) => {
    // console.log(response.data);
    data.categories = response.data;
  });
};

const getProducts = () => {
  const res = fetchPublicApi("/api/products", {}, "GET");
  res.then((response) => {
    console.log(response.data);
    data.products = response.data;
  });
};

const getUsers = () => {
  const res = fetchAuthorizedApi("/api/admin/users", {}, "GET");
  res.then((response)=> {
    console.log(response.data);
  })
};
export {
  isAuthenticated,
  errors,
  user,
  loader,
  apiBase,
  login,
  register,
  logout,
  getUserType,
  fetchPublicApi,
  fetchAuthorizedApi,
  fetchUploadApi,
  getCategories,
  getProducts,
  getUsers
};
