import React, { useState } from "react";

const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: "0",
    category: "",
    price: 0,
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  //고유 ID 생성 로직 추가
  //입력 칸 비우는 로직 추가
  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    addProduct(productWithId);
    setNewProduct({ category: "", price: 0, stocked: true, name: "" });
  };

  //deleteProduct

  //editProduct

  return (
    <form>
      <input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <label>Is Stocked</label>
      <input
        type={"checkbox"}
        checked={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type={"button"}>
        {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
        add new prduct
      </button>
    </form>
  );
};

export default InputBar;
