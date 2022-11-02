


export const DataInput = () => {
  return (
    <>
        <h2 className="tableTitle mt-3">Data Input</h2>
        <form action="">
            {/* <input type="text" /> */}

            <div className="input-group">
                <span className="input-group-text">Load data...</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>  

            <button className="btn btn-outline-secondary btn-lg btn-block my-3 ">
                Cargar 
            </button>

        </form>
    </>
  )
}
