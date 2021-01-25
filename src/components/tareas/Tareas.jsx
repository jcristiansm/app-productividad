import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Tareas = () => {
  return (
    <section>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Lista de tareas
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.8rem",
          width: "98%",
          margin: "0 auto",
          padding: "1rem",
          border: "1px solid black"
        }}
      >
        <div>
          <p>Tarea 1</p>
          <p>01:21:05</p>
        </div>

        <div>
          <Button>
            <PlayArrowIcon />
          </Button>
          <Button>
            <EditIcon />
          </Button>
          <Button>
            <DoneIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tareas;
