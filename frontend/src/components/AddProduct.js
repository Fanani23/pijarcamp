import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [nama_produk, setName] = useState("");
    const [keterangan, setKet] = useState("");
    const [harga, setHarga] = useState("");
    const [jumlah, setJumlah] = useState("");
    const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/produk", {
        nama_produk,
        keterangan,
        harga,
        jumlah,
      });
      console.log(nama_produk,
        keterangan,
        harga,
        jumlah,);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveProduct}>
                    <div className="field">
                        <label className="label">
                            Nama Produk
                        </label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama_produk}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nama Produk"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Keterangan
                        </label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={keterangan}
                                onChange={(e) => setKet(e.target.value)}
                                placeholder="Keterangan"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Harga
                        </label>
                        <div className="control">
                            <input 
                                type="number"
                                className="input"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder="Harga"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Jumlah
                        </label>
                        <div className="control">
                            <input 
                                type="number"
                                className="input"
                                value={jumlah}
                                onChange={(e) => setJumlah(e.target.value)}
                                placeholder="Jumlah"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default AddProduct;
