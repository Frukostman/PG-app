import {data} from "../../assets/response.json";

import './style.css'

const array06 = data.filter( (e) => e.date === '2022-06')
const array05 = data.filter( (e) => e.date === '2022-05')
const array04 = data.filter( (e) => e.date === '2022-04')

// console.log(array06.length)
// console.log(array05.length)
// console.log(array04.length)




export const Table = ({tableTitle}) => {

  return (
        <>
            <h2 className="tableTitle mt-3">{tableTitle}</h2>
            

            <table className="table">

                <thead>

                    <tr className="tableHeadings">
                        <th scope="row">Partition</th>
                        <th scope="col">0</th>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                        <th scope="col">6</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        {/* {
                            array06.map()
                        } */}
                        <th scope="row">2022-06</th>
                        <td className="cellData">1</td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                    </tr>

                    <tr>
                        <th scope="row">2022-05</th>
                        <td className="cellData">6</td>
                        <td className="cellData">1</td>
                        <td className="cellData">0</td>
                        <td className="cellData">1</td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                        <td className="cellData"></td>
                    </tr>

                    <tr>
                        <th scope="row">2022-04</th>
                        <td className="cellData">9</td>
                        <td className="cellData">7</td>
                        <td className="cellData">0</td>
                        <td className="cellData">3</td>
                        <td className="cellData">3</td>
                        <td className="cellData">1</td>
                        <td className="cellData">1</td>
                    </tr>

                </tbody>

            </table>




        </>
    
  )
}
