import React, { useState } from 'react'

function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [tableData, setTableData] = useState<any>([])
    const reset = () => {
        setTitle("")
        setDescription("");
    }
    const add = (e: any) => {
        e.preventDefault()
        if (title && description) {
            const newTableRow: any = {
                title, description
            }
            setTableData([...tableData, newTableRow]);
            reset()
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 mt-5'>
                        <div className="card">
                            <div className="card-body ">
                                <h2 className='text-center'>Add New</h2>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" value={title} onChange={e => { setTitle(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <input type="text" className="form-control" value={description} onChange={e => { setDescription(e.target.value) }} />
                                    </div>
                                    <div className='text-center'>
                                        <button className="btn btn-success"
                                            disabled={!title || !description} onClick={add}>Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 mt-5'>
                        <div className="card">
                            <div className="card-body ">
                                <h2 className='text-center'>Page Data</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData && tableData.map((row: any, index: number) =>
                                            <tr >
                                                <th scope="row">{(index + 1)}</th>
                                                <td>{row.title}</td>
                                                <td>{row.description}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home