import qs from 'qs';
import {useEffect, useState} from 'react';
import {api} from '../../hooks/useApi';

const RestaurantApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getApiRestaurants();
  }, []);

  const getApiRestaurants = async () => {
    try {
      const params = {
        user: 'asgeriFood',
      };
      const response = await api.post(
        '/get_products_by_user.php',
        qs.stringify(params),
      );
      if (response?.ok) {
        setData(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error};
};

export default RestaurantApi;
