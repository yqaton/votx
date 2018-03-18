import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import Teams from "./adminComponents/teamsCard";
import Sessions from "./adminComponents/sessionsCard";
import Rounds from "./adminComponents/roundsCard";
import Viewers from "./adminComponents/viewersCard";
import Button from "./styled/buttton";

const AdminLayout = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  p,
  label,
  input {
    display: block;
    padding: 10px;
  }

  div {
    margin: 20px 0;
  }

  .componentHolder {
    width: 80%;
    max-width: 400px;
  }
`;

const AdminPanel = () => (
  <AdminLayout>
    <h2>Adminka</h2>
    <div>
      <Button>
        <Link to="/admin/team">✚ Комманда</Link>
      </Button>
      <Button>
        <Link to="/admin/session">✚ Игра</Link>
      </Button>
      <Button>
        <Link to="/admin/round">Раунды</Link>
      </Button>
      <Button>
        <Link to="/admin/viewers">Зрители</Link>
      </Button>
    </div>
    <div className="componentHolder">
      <Route path="/admin/team" component={Teams} />
      <Route path="/admin/session" component={Sessions} />
      <Route path="/admin/round" component={Rounds} />
      <Route path="/admin/viewers" component={Viewers} />
    </div>
  </AdminLayout>
);

export default AdminPanel;
