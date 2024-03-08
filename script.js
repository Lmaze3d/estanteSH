document.addEventListener("DOMContentLoaded", function () {
    const shelf1 = document.getElementById("shelf1");
    const shelf2 = document.getElementById("shelf2");
    const searchInput = document.getElementById("searchInput");
    const bookDropdown = document.getElementById("bookDropdown");
    const books = [  
      "a-bts 1301 letras", 
      "a-c   ", 
      "a-c a   ", 
      "a-c b   ", 
      "a-c c   ", 
      "a-c logo ", 
      "a-c logo ac dc", 
      
      
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
  
