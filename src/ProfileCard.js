function ProfileCard({title, handle, image, content}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={title + " logo"} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title is-4">{title}</h2>
                    <h2 className="subtitle is-6">{handle}</h2>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;