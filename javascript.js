// 1. Your Firebase Configuration (From your previous step)
const firebaseConfig = {
  apiKey: "AIzaSyDskSyrBOZawGGr-2yKNRWv0w6wK8KA7UI",
  authDomain: "techsprint-lostfound-f2e17.firebaseapp.com",
  projectId: "techsprint-lostfound-f2e17",
  storageBucket: "techsprint-lostfound-f2e17.firebasestorage.app",
  messagingSenderId: "1010092971772",
  appId: "1:1010092971772:web:72bf0cf8123b0a26faa979"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const itemsCol = db.collection('items');

// 3. Select Elements
const form = document.getElementById('lost-found-form');
const itemGrid = document.getElementById('itemGrid');

// 4. LISTEN for Real-time Updates from Google Cloud
itemsCol.orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
    itemGrid.innerHTML = ''; 
    snapshot.forEach((doc) => {
        const item = doc.data();
        const id = doc.id;
        
        itemGrid.innerHTML += `
            <div class="item-card ${item.type}">
                <span class="badge">${item.type.toUpperCase()}</span>
                <h3>${item.name}</h3>
                <p>📍 ${item.location}</p>
                <p>${item.desc}</p>
                <button class="btn-delete" onclick="removeItem('${id}')">Delete</button>
            </div>
        `;
    });
});

// 5. ADD Item to Cloud
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await itemsCol.add({
        type: document.getElementById('type').value,
        name: document.getElementById('itemName').value,
        location: document.getElementById('location').value,
        desc: document.getElementById('description').value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert("Success! Your report has been posted to the cloud.");
    form.reset();
});

// 6. DELETE Item from Cloud
window.removeItem = async (id) => {
    if(confirm("Item found/returned?")) {
        await itemsCol.doc(id).delete();
    }
};

/**
 * REAL-TIME LISTENER:
 * Listens for any changes in the 'items' collection on Google Cloud Firestore.
 * If the database is empty, it displays a placeholder message.
 * Otherwise, it triggers the UI update to show live lost/found reports.
 */
itemsCol.onSnapshot((snapshot) => {
    if (snapshot.empty) {
        itemGrid.innerHTML = '<p class="text-center">No reports found yet. All items are safe!</p>';
        return;
    }
});
    