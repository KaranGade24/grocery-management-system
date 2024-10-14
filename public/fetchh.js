async function getData1() {
    const res = await fetch("https://grocerymanagementsystem-production.up.railway.app/products");
    const data = await res.json();
    console.table(data);
  }
  async function getData2() {
    const res = await fetch("https://grocerymanagementsystem-production.up.railway.app/sold-products");
    const data = await res.json();
    console.table(data);
  }
  
  getData1();
  getData2();