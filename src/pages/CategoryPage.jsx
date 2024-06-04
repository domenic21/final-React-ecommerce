import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItems from "../components/CardItems";
// firebase to iterate thru the id of each product
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const CategoryPage = () => {
  
  const { categoria } = useParams();
  // check the variable to return each id in the console console.log(id);

  const [productData, setProductdata] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),

        where("categoria", "==", categoria)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductdata(docs);
      //console.log(); //test for the db in console
    };
    getProducts();
  }, [categoria]);

  return (
    <div className="grid grid-cols-2 lg:grid   xs:grid-cols-1 lg:justify-items-center  rounded-lg lg:grid-cols-3 gap-6 pt-16 border shadow-lg">
      {productData.map((data) => {
        return (
          <div key={data.id}>
            
              <CardItems data={data} />
            
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
