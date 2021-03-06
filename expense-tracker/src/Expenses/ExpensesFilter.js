import "./ExpensesFilter.css"




// const ExpensesFiltercontrol = (props) => {
//     return(
//         <option value={props.children}>{props.children}</option>
//     )
// }


const ExpensesFilter = (props) => {

    const dropDown = (e) => props.onChangeFilter(e.target.value);

    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="date">Filter by year</label>
                <select onChange={dropDown} value={props.selected}>
                    {/* {props.items.map((item, index) => (
                        <ExpensesFiltercontrol key={index}>{item.date.getFullYear()}</ExpensesFiltercontrol>
                    ))} */}
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                </div>
        </div>
    )
}


export default ExpensesFilter;