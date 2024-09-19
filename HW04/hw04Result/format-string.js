function formatStringtoUpperCase(str) {
  return str.trim().toUpperCase();
}
console.log(formatStringtoUpperCase("   hello world   "));
console.log(formatStringtoUpperCase("  JavaScript   "));
console.log(formatStringtoUpperCase("    openai  "));

// КОРОТКИЙ ВАРИАНТ ------------------------------------------------------------------

const formatIsToUpperCase = (str) => str.trim().toUpperCase();

console.log(formatIsToUpperCase("   hello world   "));
console.log(formatIsToUpperCase("   JavaScript   "));
console.log(formatIsToUpperCase("   openai   "));
