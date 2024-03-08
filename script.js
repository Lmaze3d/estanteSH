document.addEventListener("DOMContentLoaded", function () {
    const shelf1 = document.getElementById("shelf1");
    const shelf2 = document.getElementById("shelf2");
    const searchInput = document.getElementById("searchInput");
    const bookDropdown = document.getElementById("bookDropdown");
    const books = [  
      "hugo",
"maría",
"brasil",
"tokio",
"perro",
"manzana",
"juan",
"lucía",
"canadá",
"parís",
"gato",
"plátano",
"pedro",
"ana",
"alemania",
"londres",
"elefante",
"fresa",
"luis",
"sofía",
"españa",
"roma",
"leon",
"naranja",
"carlos",
"laura",
"estados unidos",
"berlín",
"tigre",
"uva",
"pablo",
"claudia",
"francia",
"madrid",
"oso",
"sandía",
"fernando",
"andrea",
"méxico",
"amsterdam",
"ballena",
"kiwi",
"raúl",
"julia",
"italia",
"lisboa",
"cebra",
"piña",
"diego",
"diana",
"argentina --",
"atenas",
"jirafa",
"limón",
"ricardo",
"elena",
"rusia",
"moscú",
"mono",
"mango",
"josé",
"natalia",
"portugal",
"varsovia",
"rinoceronte",
"cereza",
"manuel",
"marina",
"china",
"pekin",
"pingüino",
"oscar",
"valeria",
"japón",
"sidney",
"koala",
"papaya",
"miguel",
"chile",
"santiago",
"zorro",
"pomelo",
"alberto",
"rocío",
"colombia",
"bogotá",
"delfín",
"frambuesa",
"marco",
"luisa",
"india",
"delhi",
"león",
"pera",
"javier",
"elisa",
"australia",
"canberra",
"águila",
"ciruela",
"roberto",
"anabel",
"inglaterra",
"liverpool",
"tortuga",
"mandarina",
"andrés",
"silvia",
"holanda",
"david",
"teresa",
"seúl",
"mora",
"mario",
"eduardo",
"carolina",
"egipto",
"elcairo",
"suiza",
"tiburón",
"sergio",
"lima",
"guayaba",
"malasia",
"kuala lumpur",
"panda",
"ankara",
"conejo",
"luciana",
"grecia",
"jaguar",
"alejandro",
"ecuador",
"quito",
"gorila",
"rafael",
"mónica",
"argelia",
"canguro",
"lucas",
"martha",
"filipinas",
"manila",
"singapur",
"cocodrilo",
"martín",
"vietnam",
"hanói",
"israel",
"jerusalén",
"octavio",
"guatemala",
"ciudad de guatemala",
"rubén",
"nigeria",
"abuja",
"noruega",
"jorge",
"irlanda",
"nepal",
"katmandú",
"alicia",
"haití",
"puerto príncipe",
"bulgaria",
"sofía",
"cabra",
"suecia",
"árabe",
"venezuela",
"caracas",
"pakistán",
"islamabad",
"kazajistán",
"austria",
"nueva zelanda",
"bangladesh",
"uganda",
"kenia",
"sudáfrica",
"rumania",
"polonia",
"república checa",
"bahréin",
"bahamas",
"barbados",
"belice",
"benín",
"bhután",
"bolivia",
"botswana",
"brunei",
"burkina faso",
"burundi",
"bután",
"caballo",
"caboverde",
"camboya",
"camerún",
"caniche",
"chihuahua",
"chipre",
"cisne",
"comoras",
"congo",
"coreadelnorte",
"coreadelsur",
"costademarfil",
"costarica",
"croacia",
"cuba",
"dinamarca",
"dominica",
"ecuatorial",
"eritrea",
"escocia",
"escorpión",
"eslovaquia",
"eslovenia",
"estonia",
"etiopía",
"fiji",
"filipinas",
"finlandia",
"gabón",
"gambia",
"georgia",
"ghana", 
  
      
]; //comienza desde arriba a la izquierda 
 


    // Ordenar alfabéticamente la lista desplegable de libros
    function sortDropdown() {
      // Obtener el array de opciones del elemento select
      let options = Array.from(bookDropdown.options);
      // Ordenar el array según el texto de las opciones
      options.sort((a, b) => a.text.localeCompare(b.text));
      // Vaciar el elemento select
      bookDropdown.innerHTML = "";
      // Añadir las opciones ordenadas al elemento select
      options.forEach((option) => bookDropdown.appendChild(option));
    }
  
    // Llenar las estanterías con los libros
    books.forEach((book, index) => {
      const bookElement = document.createElement("div");
      bookElement.className = "book";
      bookElement.textContent = book;
      bookElement.id = "book" + (index + 1);
      if (index < 228) { //cantidad de espacios_libros
        //limite de rectangulos
        shelf1.appendChild(bookElement);
      } else {
        shelf2.appendChild(bookElement);
      }
  
      // Agregar opciones a la lista desplegable
      const option = document.createElement("option");
      option.value = bookElement.id;
      option.textContent = book;
      bookDropdown.appendChild(option);
    });
  
    // Ordenar alfabéticamente la lista desplegable de libros
    sortDropdown();
  
    // Manejar la selección de libros desde la lista desplegable
    bookDropdown.addEventListener("change", function () {
      const selectedBookId = this.value;
      handleBookSelection(selectedBookId);
    });
  
    // Manejar la selección de libros desde la búsqueda
    const handleBookSelection = (bookId) => {
      // Quitar la clase 'selected' de cualquier libro que la tenga
      document.querySelectorAll(".book.selected").forEach((book) => {
        book.classList.remove("selected");
      });
      // Agregar la clase 'selected' al libro seleccionado
      const selectedBook = document.getElementById(bookId);
      if (selectedBook) {
        selectedBook.classList.add("selected");
      }
    };
  
    // Manejar la búsqueda de libros
    const handleSearch = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const allBooks = document.querySelectorAll(".book");
      const matchingBooks = [];
  
      allBooks.forEach((book) => {
        const bookTitle = book.textContent.toLowerCase();
        if (bookTitle.includes(searchTerm)) {
          book.style.visibility = "visible";
          matchingBooks.push(book);
        } else {
          book.style.visibility = "hidden";
        }
      });
  
      // Actualizar la lista desplegable con los libros que coinciden con la búsqueda
      bookDropdown.innerHTML = ""; // Limpiar la lista desplegable
      matchingBooks.forEach((book) => {
        const option = document.createElement("option");
        option.value = book.id;
        option.textContent = book.textContent;
        bookDropdown.appendChild(option);
      });
  
      // Seleccionar el primer libro que coincide con la búsqueda
      if (matchingBooks.length > 0) {
        handleBookSelection(matchingBooks[0].id);
      }
    };
  
    // Asignar los event listeners
    searchInput.addEventListener("input", handleSearch);
    document.querySelectorAll(".book").forEach((book) => {
      book.addEventListener("click", () => handleBookSelection(book.id));
    });
  });
  
