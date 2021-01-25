import React from "react";
import Grid from "@material-ui/core/Grid";

import Tareas from "../components/tareas/Tareas";
import TareaForm from "../components/tareas/TareaForm";

const TareasPage = () => {

  return (
    <Grid container spacing={2} style={{ width: "100%" }}>
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "center",
        }}
      >
        <Tareas />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "center",
        }}
      >
        <TareaForm />
      </Grid>
    </Grid>
  );
};

export default TareasPage;
