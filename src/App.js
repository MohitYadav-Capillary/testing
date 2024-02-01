import { useRef, useState } from "react";
import "./App.css";
import { notification, Badge, Card, Button, Flex } from "antd";
import lodash from "lodash";
import { DeleteOutlined } from "@ant-design/icons";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  // console.log("****todos", todos);
  const clearInputVal = () => {
    setInputVal("");
  };
  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>

        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            if (inputVal === "") {
              notification.error({
                message: "Error",
                description: "Error in creating new todo",
              });
              clearInputVal();
            } else {
              setTodos([
                ...todos,
                {
                  id: lodash.uniqueId("uniqueId-"),
                  name: inputVal,
                },
              ]);
              clearInputVal();
              notification.success({
                message: "Create Success",
                description: `created todo named ${inputVal}`,
              });
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div style={{ maxWidth: "500px", marginLeft: "35%", marginTop: "5%" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "20px" }}>
            <Badge.Ribbon color="pink">
              <Card title="Pushes open the window" size="small">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {todo.name}
                  <Button
                    data-testid="delete-button"
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      notification.success({
                        message: "Delete success",
                        description: `deleted todo named ${todo.name}`,
                      });
                      setTodos(todos.filter((item) => item.id !== todo.id));
                    }}
                  />
                </div>
              </Card>
            </Badge.Ribbon>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
