import React, { useState } from 'react';
import { ComponentsWrapper, H1 } from './styles';
import Form from "../components/form";
import List from "../components/table";
import Head from "next/head";

const initialTasks = [{ description: 'terminar el to do list', status: false, id: 1 }, { description: 'terminar el to do list', status: false, id: 2 }];

const Components = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [editedData, setEditedData] = useState(null)

  const createData = (data) => {
    data.id = Date.now();
    setTasks([...tasks, data]);
  }

  const deleteData = (id) => {
    let newTasks = tasks.filter((el) => el.id !== id);
    setTasks(newTasks);
  };

  const updateData = (form) => {
    let newTasks = tasks.map((el) => (el.id === form.id ? form : el));
    setTasks(newTasks);
  };

  return (
    <ComponentsWrapper >
      <Head>
        <title>To do List</title>
      </Head>
      <H1 >To do List</H1>
      <Form setEditedData={setEditedData} editedData={editedData} createData={createData} updateData={updateData} />
      <List tasks={tasks} deleteData={deleteData} setEditedData={setEditedData} />
    </ComponentsWrapper >
  )
}

export default Components
