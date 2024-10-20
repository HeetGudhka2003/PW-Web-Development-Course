document.addEventListener('DOMContentLoaded', () => {

    // Get DOM elements

    const addItemButton = document.getElementById('addItemButton');

    const itemInput = document.getElementById('itemInput');

    const shoppingList = document.getElementById('shoppingList');

    // Add item to the list

    addItemButton.addEventListener('click', addItem);

    itemInput.addEventListener('keypress', function (event) {

        // If the enter key was pressed then run the addItem function

        if (event.key === 'Enter') {

            addItem();
        }
    });

    function addItem() {

        // Validate input

        const itemText = itemInput.value.trim();

        // Check if input is not empty

        if (itemText !== '') {

            // Create list item

            const listItem = document.createElement('li');

            // Add text to list item

            listItem.textContent = itemText;

            // Create delete button

            const deleteButton = document.createElement('button');

            // Add text to delete button

            deleteButton.textContent = 'Delete';

            // Add delete button to list item

            deleteButton.className = 'delete-button';

            // Remove item from the list when delete button is clicked

            deleteButton.addEventListener('click', () => {

                shoppingList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);

            shoppingList.appendChild(listItem);

            // Clear input field and focus

            itemInput.value = '';

            itemInput.focus();
        }
    }
});