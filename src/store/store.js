import { ref, reactive } from "vue";
import { togDdMenu, showWelcomeToast } from "./controller";
import router from "../router";
const authStore = reactive({
  apiBase: "http://localhost:8000",
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),
  async fetchPublicApi(endPoint = "", params = "", requestType = "GET") {
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

    const res = await fetch(authStore.apiBase + endPoint, request);

    const response = await res.json();
    return response;
  },

  async login(email, password) {
    try {
      const res = await authStore.fetchPublicApi(
        "/api/login",
        { email, password },
        "Post"
      );
      if (res.error == 0) {
        authStore.isAuthenticated = true;
        authStore.user = res;
        localStorage.setItem("auth", 1);
        localStorage.setItem("user", JSON.stringify(res));

        router.push("/");
        setTimeout(function () {
          showWelcomeToast(authStore.user.name);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  },

  logout() {
    authStore.isAuthenticated = false;
    authStore.user = {};
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    togDdMenu();
    router.push("/login");
  },
});

export default authStore;
