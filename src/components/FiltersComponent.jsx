import React, {useState} from "react";


export default function FiltersComponent({handleSearch}) {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    return (
        <>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
    <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
    </select>
    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
    <button onClick={()=>handleSearch(title,type,year)}>Search</button>
        </>
    )
}
