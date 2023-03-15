({form:document.querySelector("#search-box")}).form.addEventListener("input",(function(e){e.preventDefault()})),fetch("https://restcountries.com/v3.1/name/Ukraine").then((e=>{e.json})).then((e=>console.log(e))),console.log(responce.json);
//# sourceMappingURL=index.6d3a4c33.js.map
