export const fetchDataProduct = async () => {
  const response = await fetch("http://localhost:8080/products");
  const data = await response.json();

  return data;
};
