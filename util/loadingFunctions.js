export function turnOnLoadingScreen() {
  document
    .getElementById("app_wrapper_none_loading_screen")
    .classList.add("blur-sm");
  document.getElementById("loading_screen_div").classList.remove("invisible");
}

export function turnOffLoadinScreen() {
  document
    .getElementById("app_wrapper_none_loading_screen")
    .classList.remove("blur-sm");

  document.getElementById("loading_screen_div").classList.add("invisible");
}
