let ProfilePic = () => {
    return <img style={{marginTop: '2em'}} src="https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-1/p480x480/70277513_10220282481241261_6162955908558094336_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_oc=AQnf2wliWosD8TyCG1dWx1C08X8goQl77XWose849oV-E4hN94rjwwlvhsgiSp0p2MtGVxwKYLcI3miljbzxdb1u&_nc_ht=scontent.faus1-1.fna&_nc_tp=6&oh=f714538d177bbaf148414c066683ecd7&oe=5F00ED11" height="90" width="90"></img>
}

let CommentBody = () => {
    return <div>
            <p style={{margin: '1rem', padding: '1rem'}}>
            Bow wow wow ipsum dolizzle boom shackalack sizzle, consectetuer adipiscing mah nizzle. Nullizzle crazy velit, aliquet volutpizzle, suscipizzle quis, gizzle vizzle, own yo'. 
            Pellentesque eget tortizzle. Sed erizzle. Fusce at dolor bizzle dizzle tempus yo. Maurizzle pellentesque nibh et turpizzle. Dang in tortor. 
            Pellentesque go to hizzle rhoncus i saw beyonces tizzles and my pizzle went crizzle. Bling bling check it out the bizzle boom shackalack da bomb. We gonna chung gizzle. 
            Pimpin' black the bizzle, pretizzle fizzle, mattizzle izzle, eleifend vitae, break yo neck, yall. Tellivizzle suscipizzle. That's the shizzle sempizzle da bomb sizzle fo.
            </p>
           </div>
}

let Comment = () => {
    return <div style={{display:'flex', flexDirection:'row'}}>
            
           <ProfilePic />
           <CommentBody />
           </div>   
}

let Comments = () => {

    return <Comment/>
}

ReactDOM.render(<Comments />, document.getElementById('root'))