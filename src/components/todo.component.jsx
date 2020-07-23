import React from "react";

import "./styles.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_input: "",
      items: ["Pay Phone Bill", "Call Mum"],
    };

    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  update(event) {
    this.setState({
      item_input: event.target.value,
    });
  }

  add() {
    if (this.state.item_input === "") {
      alert("Please Add Todo Item :)");
    } else {
      this.setState((prev) => {
        return {
          item_input: "",
          items: prev.items.concat(prev.item_input),
        };
      });
    }
  }

  remove(key) {
    this.setState((prev) => {
      let items = [...prev.items];

      items.splice(key, 1);

      return {
        item_input: "",
        items,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h2>
          Todo List For {this.props.name} ({this.state.items.length} items)
        </h2>

        <div className="todo">
          <input
            type="text"
            placeholder="Grocereies, pay bill, feed dogs..."
            value={this.state.item_input}
            onChange={this.update}
            required
          />
          <button className="btn-add" type="button" onClick={this.add}>
            add item
          </button>
          <div className="todo-list">
            <ul>
              {this.state.items.map((item, i) => (
                <li key={i}>
                  {item}{" "}
                  <button
                    className="btn-remv"
                    type="button"
                    onClick={() => this.remove(i)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
