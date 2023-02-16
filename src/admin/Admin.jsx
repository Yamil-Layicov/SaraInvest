import React from "react";
import { useEffect, useState } from "react";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [sizes,setSizes] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  const handleItem = (item) => {
    setSizes(item.id)
  }
  
  console.log(sizes)

  return (
    <div>
      {items.map((item) => {
        return (
          <div onClick={() => handleItem(item)}
            style={{
              width: item.width,
              height: item.height,
              backgroundColor: item.color,
              position: "absolute",
              top: item.top,
              left: item.left,
            }}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
