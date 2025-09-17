async function getData1() {
  const res = await fetch(
    "https://opulent-space-spoon-vx7qrv4rx4wfw44q-8080.app.github.dev/products"
  );
  const data = await res.json();
  console.table(data);
}
async function getData2() {
  const res = await fetch(
    "https://opulent-space-spoon-vx7qrv4rx4wfw44q-8080.app.github.dev/sold-products"
  );
  const data = await res.json();
  console.table(data);
}

getData1();
getData2();
