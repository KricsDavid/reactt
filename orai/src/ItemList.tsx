
    const items = ["Item 1", "Item 2", "Item 3"];
export default function Itemlist(){
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
    

