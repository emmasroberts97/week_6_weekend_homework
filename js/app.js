document.addEventListener('DOMContentLoaded', () => {

  const createAnimal = function(event) {
    const animalTable = document.querySelector('#animal-table');

    const animalRow = animalTable.insertRow(1);
    const name = animalRow.insertCell(0);
    const type = animalRow.insertCell(1);
    const status = animalRow.insertCell(2);
    const cuteness = animalRow.insertCell(3);

    name.innerHTML = `${event.target.name.value}`;
    type.innerHTML = `${event.target.type.value}`;
    status.innerHTML = `${event.target.endangered.value}`;

    if (document.getElementById('ofcourse').checked) {
      cuteness.innerHTML = `${event.target.ofcourse.value}`;
    } else if (document.getElementById('yes').checked) {
      cuteness.innerHTML = `${event.target.yes.value}`;
    };
  };

  const animalFormSubmit = function(event) {
    event.preventDefault();
    createAnimal(event);

    console.log(event);
    document.getElementById('animal-form').reset();
  };

  const animalForm = document.querySelector('#animal-form');
  animalForm.addEventListener('submit', animalFormSubmit);

  const deleteAllAnimals = function() {
    const animalTable = document.getElementById('animal-table');
    while (animalTable.rows.length > 1) {
      animalTable.deleteRow(1);
    };
  };

  const deleteTable = document.querySelector('#heading');
  deleteTable.addEventListener('click', deleteAllAnimals);

  const deleteAllButton = document.createElement('button');
  deleteAllButton.innerHTML = "Delete All";
  deleteTable.appendChild(deleteAllButton);

});
