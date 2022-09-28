import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [produk, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/produk");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/produk/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 mr-5 mb-5 ml-5 is-center">
            <div className="column is-full">
                <Link to={`add`} className="button is-success">
                    Add product
                </Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Nama Produk</th>
                            <th>Keterangan</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produk.map((prod, index) => (
                            <tr key={(prod.id)}>
                                <td>{index + 1}</td>
                                <td>{prod.id}</td>
                                <td>{prod.nama_produk}</td>
                                <td>{prod.keterangan}</td>
                                <td>{prod.harga}</td>
                                <td>{prod.jumlah}</td>
                                <td>
                                    <Link
                                        to={`edit/${prod.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <button 
                                        onClick={() => deleteProduct(prod.id)}
                                        className="button is-small is-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default ProductList;
