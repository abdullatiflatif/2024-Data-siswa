
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
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
const db = getFirestore(app);
export async function ambilDaftarSiswa () {
  const siswaref = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach((doc) => {
    rerval.push({ id: doc.id, nama: doc.data().nama });
  }
    );
    return retval;
}

export async function tambahSiswa(val){
  try {
  const docRef = await addDoc(collection(db, "siswa"), {
    nama: val
  });
  console.log('Berhasil menyimpen dokumen dengan id: ' + docRef.id);
  } catch (e) {
    console.log('Error menambah dokumen: ' + e);
    
  }
}
export async function hapusSiswa(docld) {
  await deleteDoc(doc(db, "siswa", docld));
}

export async function ubahSiswa(docld, val) {
 await updateDoc(doc(db, "siswa",docld),{ nama: val});
 
}
export async function ambilSiswa(docld) {
  const docRef = await doc()
}