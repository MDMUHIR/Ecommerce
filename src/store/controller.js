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
    theme: "auto",
    type: "success",
    position: "top-center",
    dangerouslyHTMLString: true,
  });
};

export {
  showDdMenu,
  togDdMenu,
  showCategoryMenu,
  togCategoryMenu,
  showWelcomeToast,
};
