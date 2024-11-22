"use client";
import { useEffect, useState } from "react";
import { firebaseDB } from "@/lib";
import { ref, get } from "firebase/database";

const useFetchData = (type: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * FETCH DATA FROM FIREBASE REALTIME DATABASE
   * @param key
   */
  const fetchData = async (key: string) => {
    try {
      const categoryRef = ref(firebaseDB, `${key}`);
      const snapshot = await get(categoryRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        // Transform object to array if needed
        const dataRes = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as object),
        }));

        setData(dataRes);
        setLoading(false);
      } else {
        console.log("No data found");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // FETCH DATA
  useEffect(() => {
    setLoading(true);
    fetchData(type);
  }, []);

  return [data, loading];
};

export default useFetchData;
