function ProfileCard(props){
    return(
        <div style={{border: "2px solid black"}}>
            <h3>Profile card</h3>
            <h2>Title: {props.title}</h2>
            <h2>Name: {props.handle}</h2>
        </div>
    )
}

export default ProfileCard;