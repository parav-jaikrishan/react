import "./countries.css";

export default function Countries(props) {
    let countries = props.data.country;
    let name = props.data.name[0].toUpperCase() + props.data.name.slice(1);
    let text = countries.length ? `Name: ${name}` : `No results found for ${name}`;
    let showTable = countries.length ? "" : "hide";
    
    return (
        <div className="countries">
            <h3>{text}</h3>
            <table className={showTable}>
                <thead>
                    <th>No.</th>
                    <th>Country</th>
                    <th>Probability</th>
                </thead>
                <tbody>
                    {countries.map((country, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{country.country_id}</td>
                            <td>{Math.round(country.probability * 100 + Number.EPSILON) / 100}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}