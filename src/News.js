/* eslint-disable jsx-a11y/anchor-is-valid */
export default function News(props) {
    return (
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage} alt="#" />:
                    <img src="https://mjprudor.ac.in/rms/uploads/user_IMG/Blank.png?d=020502" alt="#" />
                }
            </div>
            <h3>{props.article.title}</h3>
            <p>{props.article.description?.substring(0, 100).concat("...")}<a href={props.article.url} target="_blank" rel="noreferrer">Read More</a></p>
            <div className='source'>
                <p>Author :<br /> {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>
        </div>
    )
}