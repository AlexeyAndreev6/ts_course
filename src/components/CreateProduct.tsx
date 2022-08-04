import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../modals";
import Error from "./Error";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const onChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="border py-2 px-4 mb-2 w-full"
        type="text"
        placeholder="Enter product title"
        value={value}
        onChange={onChangeHandler}
      ></input>

      {error && <Error error={error} />}

      <button
        type="submit"
        className="ml-[42%] py-2 px-4 border bg-yellow-400 hover:text-white hover:bg-black"
      >
        Create
      </button>
    </form>
  );
}

export default CreateProduct;
