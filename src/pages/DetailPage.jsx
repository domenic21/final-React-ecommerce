import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails  from '../components/ItemDetail/ItemDetails'
// firebase to iterate thru the id of each product
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const DetailPage = () => {
  const { id } = useParams();
  // check the variable to return each id in the console console.log(id);

  const [product, setProductdata] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductdata(docs);
      //console.log(docs); //test for the db in console
    };
    getProducts();
  }, [id]);

  return (
    <div>
      {product.map((product) => {
        return (
          <div key={product.id}>
            
              <ItemDetails   data={product} />
            
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
