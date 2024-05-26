import { ref } from "vue";
// import authStore from "./store";
import { toast } from "vue3-toastify";

// User Menu
const showDdMenu = ref(false);
const togDdMenu = () => {
  showDdMenu.value = !showDdMenu.value;
};
// Category Menu
const showCategoryMenu = ref(false);
const togCategoryMenu = () => {
  showCategoryMenu.value = !showCategoryMenu.value;
};
// Message Box

const showWelcomeToast = (userName) => {
  console.log(userName);
  toast(`Welcome ${userName} 💐`, {
    theme: "dark",
    type: "success",
    autoClose: 2000,
    position: "bottom-center",
    dangerouslyHTMLString: true,
  });
};
const showSignUpToast = (userName) => {
  console.log(userName);
  toast(`Congratulations you have successfully created an account💐`, {
    theme: "colored",
    type: "success",
    position: "bottom-center",
    autoClose: 2000,
    transition: "flip",
    dangerouslyHTMLString: true,
  });
};

const loader = ref(false);

export {
  showDdMenu,
  togDdMenu,
  showCategoryMenu,
  togCategoryMenu,
  showWelcomeToast,
  showSignUpToast,
  loader,
};
