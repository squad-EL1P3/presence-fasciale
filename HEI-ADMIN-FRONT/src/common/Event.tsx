import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";


function BasicExample() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
      axios
          .get("http://localhost:8080/Event/", {
              headers: {
                  "admin-auth-token": localStorage.token,
                  "Content-Type": "application/json",
              },
          })
          .then((response) => {
            if (response.data != null) {
              this.setState({
                id: response.data.id,
                event_name: response.data.event_name,
                event_type: response.data.event_type,
                start_date: response.data.start_date,
                end_date: response.data.end_date,
                responsible: response.data.responsible,
                place: response.data.place,
              });
            }
          })
          .catch((error) => console.log(error));
      return () => setLoading(false);
  }, [isLoading]);

  updateEvent = (event) => {
    event.preventDefault();

    const event = {
      id: this.state.id,
      event_name: this.state.event_name,
      event_type: this.state.event_type,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      responsible: this.responsible,
      place: this.state.place,
    };

    axios.put("http://localhost:8080/Event", event).then((response) => {
      if (response.data != null) {
        this.setState({ show: true, method: "put" });
        setTimeout(() => this.setState({ show: false }), 3000);
        setTimeout(() => this.place(), 3000);
      } else {
        this.setState({ show: false });
      }
    });

    this.setState(this.initialState);
  };



  if (isLoading) {
    
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>event_name</th>
            <th>event_type</th>
            <th>start_date</th>
            <th>end_date</th>
            <th>responsible</th>
            <th>place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>6</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>7</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
  

  );  
}
export default BasicExample;