import Flex from "./styles/styledComponents/flex";
import Text from "./styles/styledComponents/text";

const Table = ({ data }) => {
  return (
    <table id="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Coin</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
          <th>Weekly</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={row.name}>
              <td>{index + 1}</td>
              <td>
                <Flex css={{ "& img": { padding: "0 $1" } }}>
                  <img src={row.icon} />
                  <Text>{row.name}</Text>
                  <Text size="sHead3" weight="300" css={{ padding: "0 $1" }}>
                    ({row.subName})
                  </Text>
                </Flex>
              </td>
              <td>{row.price}</td>
              <td style={{ color: row.hour1.isGreen ? "green" : "red" }}>
                {row.hour1.value}
              </td>
              <td style={{ color: row.hour24.isGreen ? "green" : "red" }}>
                {row.hour24.value}
              </td>
              <td style={{ color: row.day7.isGreen ? "green" : "red" }}>
                {row.day7.value}
              </td>
              <td>{row.Hour24Volume}</td>
              <td>{row.marketCap}</td>
              <td>
                <img src={row.weeklyStat} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
