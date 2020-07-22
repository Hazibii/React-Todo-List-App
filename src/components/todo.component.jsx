import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_input: "",
      items: [],
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
    this.setState((prev) => {
      return {
        item_input: "",
        items: prev.items.concat(prev.item_input),
      };
    });
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
        <h4>
          todo list for {this.props.name} ({this.state.items.length} items)
        </h4>

        <div className="todo">
          <input
            type="text"
            value={this.state.item_input}
            onChange={this.update}
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
