const loadData = (searchText) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.drinks));
}
const displayData = (drinks) => {
    const drinksContainer = document.getElementById('drinks-container');
    drinksContainer.textContent = '';
    drinks.forEach(drink => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('col')
        cocktailDiv.innerHTML = `
                    <div class="card" style="height: 600px;">
                        <img src="${drink.strDrinkThumb}" class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${drink.strDrink}</h5>
                            <p class="card-text">${drink.strInstructions}</p>
                        </div>
                    </div>
        `;
        drinksContainer.appendChild(cocktailDiv);
    })
}
const searchFood = () => {
    const searchField = document.getElementById('drink-search');
    const searchText = searchField.value;
    loadData(searchText);
    searchText.value = '';
}

loadData('');