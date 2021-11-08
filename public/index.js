const socket = io();

socket.on("message_back", (data) => {
  console.log(data);
  render(data);
  socket.emit("message_client", "gracias soy el cliente");
});

const render = (data) => {
  let html = data
    .map((e) => {
      return `<p> <b>${e.nombre}: ${e.msn}</b> </p>`;
    })
    .join(" ");
  document.querySelector("#caja").innerHTML = html;
};

const addInfo = () => {
  let obj = {
    nombre: document.querySelector("#nm").value,
    msn: document.querySelector("#msn").value,
  };
  socket.emit("dataMsn", obj);
  document.querySelector("#msn").value = " ";
  //hace que no recarga la pag
  return false;
};
