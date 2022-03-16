import {useState, useEffect} from 'react';
import cafeApi from '../api/cafeApi';
import {Categoria, CategoriesResponse} from '../interfaces/appInterfaces';

export const useCategories = () => {
  const [categories, setCategpies] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const resp = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategpies(resp.data.categorias);
    setIsLoading(false);
  };

  return {
    categories,
    isLoading,
  };
};
