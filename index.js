@@ -14,8 +14,10 @@ function validate(e) {

  if (!isEmail(inputValue)) {
    error.style.display = "block"
    label.style.display = "block"
  } else {
    error.style.display = "none"
    label.style.display = "none"
  }
}
