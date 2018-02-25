import React from 'react';
import styled from 'styled-components';

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
`;

const AdminPanel = () => (
  <AdminLayout>
    <h2>Adminka</h2>

    <div>
      <h4>Создание новой пары</h4>
      <label>Команда 1</label>
      <input type="text" placeholder="Название" />
      <label>Ссылка на изображение</label>
      <input type="text" />
      <br />
      <label>Команда 2</label>
      <input type="text" placeholder="Название" />
      <label>Ссылка на изображение</label>
      <input type="text" />
      <br />
      <button type="button">Сохранить</button>
    </div>

    <div>
      <h4>Создание новой игры</h4>
      <label>Название</label>
      <input type="text" placeholder="" />
      <button type="button">Сохранить</button>
    </div>
  </AdminLayout>
);

export default AdminPanel;
