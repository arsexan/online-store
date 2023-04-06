import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productsFetch } from "../../api/products";
import { TOKEN } from "../../api/utils/constants";

export const Products = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({ total: 0, products: [] });

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) navigate("/signin");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productsFetch();
      const response = await res.json();
      // проверки
    };

    fetchData();
  }, []);

  return <div>Products</div>;
};
