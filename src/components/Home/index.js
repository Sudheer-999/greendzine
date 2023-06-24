import { Component } from "react";
import CardItem from "../CardItem";
import { BiSearch } from "react-icons/bi";

import "./index.css";

class Home extends Component {
  state = { listItems: [], searchInput: "" };

  componentDidMount() {
    this.getListItems();
  }

  onSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  getListItems = async () => {
    const url = "https://reqres.in/api/users?page=2";

    const response = await fetch(url);

    const data = await response.json();

    const responseData = data.data;

    const updatedData = responseData.map((eachItem) => ({
      id: eachItem.id,
      email: eachItem.email,
      firstName: eachItem.first_name,
      lastName: eachItem.last_name,
      avatar: eachItem.avatar,
    }));

    this.setState({ listItems: updatedData });
  };

  render() {
    const { listItems, searchInput } = this.state;
    const filteredItems = listItems.filter((eachItem) => {
      return eachItem.firstName
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    return (
      <div className="bg-container">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={this.onSearchInput}
          />
          <BiSearch className="search-icon" />
        </div>
        <ul className="list-container">
          {filteredItems.map((eachItem) => (
            <CardItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
