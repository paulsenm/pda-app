function ProfileCard({title, handle}){
    return(
        <div style={{border: "2px solid black"}}>
            <h3>Profile card</h3>
            <h2>Title: {title}</h2>
            <h2>Name: {handle}</h2>
        </div>
    )
}

export default ProfileCard;