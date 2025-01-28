/* scripts.js */
const donorForm = document.getElementById('donorForm');
const searchResults = document.getElementById('searchResults');

let donors = [];

donorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const donor = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        bloodGroup: document.getElementById('bloodGroup').value
    };
    donors.push(donor);
    donorForm.reset();
    alert('Donor registered successfully!');
});

function searchDonors() {
    const searchBloodGroup = document.getElementById('searchBloodGroup').value;
    const results = donors.filter(donor => donor.bloodGroup === searchBloodGroup);
    searchResults.innerHTML = results.map(donor => `
        <div>
            <p>Name: ${donor.name}</p>
            <p>Phone: ${donor.phone}</p>
            <p>Address: ${donor.address}</p>
            <p>Blood Group: ${donor.bloodGroup}</p>
        </div>
    `).join('');
}

function sendSOS() {
    alert('SOS notification sent to all registered donors!');
}
