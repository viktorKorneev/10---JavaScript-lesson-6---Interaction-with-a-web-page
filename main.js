const title = document.getElementById("course-title")
console.dir(title);

const colorBtn = document.querySelector('#color-button')
console.log(colorBtn);

const list = document.querySelector(".list")
console.log(list);

const domItem = document.querySelector("#dom")
console.log(domItem);

const items = document.querySelectorAll(".item")
console.log(items);
console.log([1,2,3,4]);

domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'


title.textContent = "Обновленное содержание курса 📘"

const a = document.createElement("a")
console.log(a);
a.setAttribute("href", "https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction")

domItem.append(a)

colorBtn.setAttribute("title", "Сгенерировать случайные цвета")
console.log(colorBtn.getAttribute("title"));
 
