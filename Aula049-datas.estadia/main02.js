function getStatement(hours) {
  if (hours >= 12 && hours < 18) {
    return "Good afternoon";
  }
  if (hours >= 18 && hours < 22) {
    return "Good evering";
  }
  if (hours >= 22 || hours < 5) {
    return "Good night";
  }
  return "Good morning";
}

function greetings(name, hours) {
  const statement = getStatement(hours);

  return `Hello ${name}, ${statement}`;
}

document.getElementById("app").innerHTML = `
<h1>${greetings("John", new Date().getHours())}</h1>`;
