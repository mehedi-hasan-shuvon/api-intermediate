// url = 'https://randomuser.me/api/?results=5';

const loadBuddes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}
loadBuddes();
const displayBuddy = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    console.log(buddies);
    for (const buddy of buddies) {
        // console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email:${buddy.email}`;
        buddiesContainer.appendChild(p);
    }
}