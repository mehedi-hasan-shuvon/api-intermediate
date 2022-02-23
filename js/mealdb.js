const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);


    //clear data
    searchField.value = '';
    if (searchText == '') {
        //write something to display
        const serachResult = document.getElementById('search-result');
        const p = document.createElement('p');
        p.innerText = "please write something to display";
        serachResult.appendChild(p);
    } else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }


}

const displaySearchResult = (meals) => {
    console.log(meals);
    const serachResult = document.getElementById('search-result');
    serachResult.textContent = '';
    if (meals.length == null) {
        //show no result found
        const p = document.createElement('p');
        p.innerText = "No result found";
        serachResult.appendChild(p);
    } else {
        for (const meal of meals) {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetails('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
            `;
            serachResult.appendChild(div);
        }
    }

}

const loadMealDetails = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div);
}