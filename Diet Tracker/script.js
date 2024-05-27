document.addEventListener('DOMContentLoaded', () => 
{
    const foodInput = document.getElementById('foodInput');
    const caloriesInput = document.getElementById('caloriesInput');
    const addButton = document.getElementById('addButton');
    const foodList = document.getElementById('foodList');
    const totalCalories = document.getElementById('totalCalories');
    let total = 0;

    addButton.onclick = () => 
    {
        const foodText = foodInput.value.trim();
        const caloriesText = caloriesInput.value.trim();

        if ((foodText && caloriesText) !=='') 
        {
            const foodItem = document.createElement('li');
            foodItem.className = 'food-item';
            foodItem.innerHTML = `
                ${foodText} - ${caloriesText} Calories 
                <button class="delete-button">Remove</button>
            `;
            foodList.appendChild(foodItem);

            total += parseInt(caloriesText);
            updateTotalCalories();

            foodInput.value = '';
            caloriesInput.value = '';

            foodItem.querySelector('.delete-button').onclick = () =>
            {
                total -= parseInt(caloriesText);
                updateTotalCalories();
                foodItem.remove();
            };
        }
    };

    function updateTotalCalories() 
    {
        totalCalories.textContent = `Total Calories: ${total}`;
    }
});
// document.addEventListener('DOMContentLoaded', () => {
//     const foodInput = document.getElementById('foodInput')
//     const caloriesInput = document.getElementById('caloriesInput')
//     const addButton = document.getElementById('addButton')
//     const foodList = document.getElementById('addButton')
//     const totalCalories = document.getElementById('totalCalories')
//     let total = 0;

//     addButton.onclick = () => {
//         const foodText = foodInput.value.trim()
//         const caloriesText = caloriesInput.value.trim()

//         if ((foodText && caloriesText) !== '') {
//             const foodItem = document.createElement('li')
//             foodItem.className = 'food-item'
//             foodItem.innerHTML = `
//             ${foodText} - ${caloriesText} Calories
//             <button class="delete-button">Remove</button>
//             `
//             foodList.appendChild(foodItem)

//             total += parseInt(caloriesText)
//             updateTotalCalories();

//             foodInput.value = ''
//             caloriesInput.value = ''

//             foodItem.querySelector('.delete-button').onclick = () => {
//                 total -= parseInt(caloriesText)
//                 updateTotalCalories();
//                 foodItem.remove()
//             };
//         }
//     }
//     function updateTotalCalories() {
//         totalCalories.textContent = `Total Calories: ${total}`
//     }

// })