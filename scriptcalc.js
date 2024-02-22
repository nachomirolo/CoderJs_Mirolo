document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('personForm');
    const resultsContainer = document.getElementById('results');
    const totalPersonsElement = document.getElementById('totalPersons');
    const totalMenElement = document.getElementById('totalMen');
    const totalWomenElement = document.getElementById('totalWomen');
    const averageAgeElement = document.getElementById('averageAge');
    const maxAgeElement = document.getElementById('maxAge');
    const minAgeElement = document.getElementById('minAge');
    
    let totalPersons = 0;
    let totalMen = 0;
    let totalWomen = 0;
    let totalAge = 0;
    let maxAge = -Infinity;
    let minAge = Infinity;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;

        totalPersons++;
        totalAge += age;
        maxAge = Math.max(maxAge, age);
        minAge = Math.min(minAge, age);

        if (gender === 'masculino') {
            totalMen++;
        } else {
            totalWomen++;
        }

        updateResults();
        form.reset();
    });

    function updateResults() {
        totalPersonsElement.textContent = totalPersons;
        totalMenElement.textContent = totalMen;
        totalWomenElement.textContent = totalWomen;
        averageAgeElement.textContent = (totalAge / totalPersons).toFixed(2);
        maxAgeElement.textContent = maxAge;
        minAgeElement.textContent = minAge;
    }

    // Condicionales y ciclos
    function countGender() {
        for (let i = 0; i < totalPersons; i++) {
            const gender = document.getElementById(`gender${i}`).value;
            
            if (gender === 'masculino') {
                totalMen++;
            } else {
                totalWomen++;
            }
        }
    }

    function calculateAverageAge() {
        for (let i = 0; i < totalPersons; i++) {
            const age = parseInt(document.getElementById(`age${i}`).value);
            totalAge += age;
        }
        return totalAge / totalPersons;
    }

    function findMaxAge() {
        for (let i = 0; i < totalPersons; i++) {
            const age = parseInt(document.getElementById(`age${i}`).value);
            if (age > maxAge) {
                maxAge = age;
            }
        }
        return maxAge;
    }

    function findMinAge() {
        for (let i = 0; i < totalPersons; i++) {
            const age = parseInt(document.getElementById(`age${i}`).value);
            if (age < minAge) {
                minAge = age;
            }
        }
        return minAge;
    }
});