function displayStoredItems() {
                const container = document.getElementById('listContainer');
                let storedItems = JSON.parse(localStorage.getItem('myLines')) || [];

                // Clear the current display to prevent duplicates
                container.innerHTML = '';

                // 6. Loop through and create HTML elements for each item
                storedItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'list-item';
                    div.textContent = item;
                    container.appendChild(div);
                });
            }



function saveAndDisplay() {
                const inputField = document.getElementById('userInput');
                const newValue = inputField.value.trim();

                if (newValue === '') return; // Don't add empty lines

                // 2. Get existing items or initialize an empty array
                let storedItems = JSON.parse(localStorage.getItem('myLines')) || [];

                // 3. Add the new value to the FRONT of the array (so new is on top)
                storedItems.unshift(newValue);

                // 4. Save the updated array back to localStorage
                localStorage.setItem('myLines', JSON.stringify(storedItems));

                // 5. Refresh the display and clear the input box
                displayStoredItems();
                inputField.value = '';
            }



