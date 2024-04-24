import "./index.css"

const recentList = [
    {
        date:'Fabruary 12, 2024',
        recentTitle:"Industrial Production",
        recentDescription:'Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last ye Electricity has seen the slowest growth of 1.2% YoY In December as compared to 10.44 YoY growth in the same month last year'
    },
    {
        date:'Fabruary 12, 2024',
        recentTitle:'CPI Inflation',
        recentDescription:"India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.5% in Dec 23 to 8.3% in"
    },
    {
        date:'Fabruary 12, 2024',
        recentTitle:"Industrial Production",
        recentDescription:'Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last ye Electricity has seen the slowest growth of 1.2% YoY In December as compared to 10.44 YoY growth in the same month last year'
    },
    {
        date:'Fabruary 12, 2024',
        recentTitle:'CPI Inflation',
        recentDescription:"India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFPI) declined from 9.5% in Dec 23 to 8.3% in"
    }

]

const RecentReleases = () =>{
    return(
        <div className="recent-container">
            <div className="top-order">
                <h2 className="recent-header">Recent Releases</h2>
                <select className="select">
                    <option className="options">India</option>
                    <option className="options">USA</option>
                </select>
            </div>
            <hr />
            <ul className="recent-list">
                {recentList.map(eachRecent =>(
                    <li className="recent-card">
                        <p className="recent-date">{eachRecent.date}</p>
                        <h3 className="recent-head">{eachRecent.recentTitle}</h3>
                        <p className="recent-para">{eachRecent.recentDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecentReleases