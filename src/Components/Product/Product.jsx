import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import "./Product.css"

function Product() {

    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        axios.get('./data.json')
            .then(res => {
                setDataTable(res.data)
            })
            .catch(erro => console.log(erro))
    }, [])



    const columns = [
        {
            name: 'Model',
            selector: (row) => <img width={100} height={100} src={row.phone_images[3]} />,
        },
        {
            selector: (row) => `${row.phone_details.model} / ${row.brand} `,
        },
        {
            name: 'Ram/Rom',
            selector: (row) => `${row.phone_details.ram}/ ${row.phone_details.internal_storage} `,
            wrap: true,
            responsive: true,
        },
        {
            name: 'Tag',
            selector: row => `${row.speciality[0]} ${row.speciality[1]} ${row.speciality[2]}`,
        },
        {
            name: 'Price',
            selector: row => `TK ${row.phone_price}`,
        },
    ];

    return (
        <div className='container'>
            <div className="row">
                <DataTable
                    columns={columns}
                    data={dataTable}
                    pagination
                />

            </div>
        </div>
    )
}

export default Product