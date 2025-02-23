

function Badge() {

    return (<svg xmlns="http://www.w3.org/2000/svg" height="20">
            <linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"></stop><stop offset="1" stop-opacity=".1"></stop></linearGradient>
            <rect rx="3" width="250" height="20" fill="#555"></rect>
            <rect rx="3" x="150" width="115" height="20" fill="#4c1"></rect>
            <rect rx="3" height="20" fill="url(#b)"></rect>
            <g text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                <text x="75" y="15" fill="#000" fill-opacity=".8">Class I - Open Science</text>
                <text x="75" y="14" fill="#fff">Class I - Open Science</text>
                <text x="210" y="15" fill="#fff" fill-opacity=".3">Qualified</text>
                <text x="210" y="14" fill="#fff">Qualified</text>
            </g>
        </svg>)
}

export default Badge
