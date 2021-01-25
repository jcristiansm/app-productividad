import React from "react";

const TareaForm = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Nueva tarea
      </h3>

      <form className="form-tarea">
        <input type="text" placeholder="Terminar maquetado..." />
        <input type="time" />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default TareaForm;
