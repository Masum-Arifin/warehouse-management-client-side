import { useEffect, useState } from "react";

const useSection = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetch("https://warehouse-management-server-side-ten.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);
  return [sections, setSections];
};
export default useSection;
