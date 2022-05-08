import { useEffect, useState } from "react";

const useSection = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-thicket-62870.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);
  return [sections, setSections];
};
export default useSection;
