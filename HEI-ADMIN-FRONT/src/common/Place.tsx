import Table from 'react-bootstrap/Table';
import Presence from './Presence';
import Button from 'react-bootstrap/Button';
function ResponsiveExample() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Id</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Name</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>location {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>location {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>location {index}</td>
          ))}
        </tr>
      </tbody>
      <Button variant="info">Who is Prese</Button>{<Presence />}
    </Table>
   

  );
}

export default ResponsiveExample;