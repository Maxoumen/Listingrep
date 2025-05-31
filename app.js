// Connexion
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => document.getElementById('message').innerText = err.message);
}

// Inscription
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(err => document.getElementById('message').innerText = err.message);
}

// Déconnexion
function logout() {
  auth.signOut().then(() => window.location.href = 'index.html');
}

// Dashboard : ajouter une séance
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trainingForm');
  const history = document.getElementById('history');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const exercise = document.getElementById('exercise').value;
      const weight = parseInt(document.getElementById('weight').value);
      const reps = parseInt(document.getElementById('reps').value);
      const user = auth.currentUser;

      if (user) {
        await db.collection('trainings').add({
          uid: user.uid,
          exercise,
          weight,
          reps,
          date: new Date()
        });
        form.reset();
        loadTrainings(); // Refresh
      }
    });

    auth.onAuthStateChanged(user => {
      if (!user) window.location.href = 'index.html';
      else loadTrainings();
    });
  }
});

async function loadTrainings() {
  const user = auth.currentUser;
  const history = document.getElementById('history');
  if (!user) return;

  const querySnapshot = await db.collection('trainings')
    .where('uid', '==', user.uid)
    .orderBy('date', 'desc')
    .get();

  history.innerHTML = '';
  querySnapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement('li');
    li.textContent = `${data.exercise} - ${data.weight}kg x ${data.reps} reps`;
    history.appendChild(li);
  });
}
