const borderValues = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

function changeVal(value, className) {
  borderValues[className] = value;
  document.querySelector(".border").style.borderRadius =
    values.top +
    "% " +
    values.top +
    "% " +
    values.right +
    "% " +
    values.right +
    "% / " +
    values.bottom +
    "% " +
    values.bottom +
    "% " +
    values.right +
    "% " +
    values.right +
    "%";
}
