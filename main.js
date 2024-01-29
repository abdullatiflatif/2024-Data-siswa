
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deletDoc,
  doC,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
apiKey: "AIzaSyCdgAITXTldockRB_wgxOrbNUPKzSVBhDs",
  authDomain: "insan-cemerlang-c9554.firebaseapp.com",
  projectId: "insan-cemerlang-c9554",
  storageBucket: "insan-cemerlang-c9554.appspot.com",
  messagingSenderId: "753628555075",
  appId: "1:753628555075:web:7a72b2d1e8ae89716931f6",
  measurementId: "G-KMJZ5V0B8H"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function ambilDaftarSiswa () {
  const siswaref = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach(() => {
    rerval.push({ id: doc.id, nama: doc.data().nama });
  }
    )
    return retval;
}
