let Header = () => {
    return <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""  />
      Bootstrap
    </a>
  </nav>
}
let Article = () => {
    return <div>
            <p>
                Ghetto fizzle. Aliquizzle sagittis massa da bomb maurizzle. Vestibulum sure fo shizzle primis in faucibus orci luctizzle sheezy ultricizzle posuere cubilia Stuff; Fo shizzle vestibulizzle.
                 Ghetto habitant morbi things senectizzle izzle shizzle my nizzle crocodizzle nizzle malesuada sizzle izzle turpis egestas. Donec tempizzle my shizz velizzle. My shizz erizzle volutpat. 
                 Vivamizzle for sure enim, scelerisque yippiyo, stuff a, bizzle vizzle, mammasay mammasa mamma oo sa. Nulla elit. Shizznit pimpin', est izzle sheezy fo shizzle, magna mammasay mammasa mamma oo sa ultricizzle bizzle, nizzle fizzle urna bow wow wow daahng dawg pizzle.
                  Vivamus tellus neque, the bizzle izzle, hizzle izzle, vulputate bow wow wow, my shizz. Praesent purizzle sem, sheezy sizzle its fo rizzle, interdizzle shizzle my nizzle crocodizzle, dignissim malesuada, arcu. eget ipsum est ullamcorpizzle break it down. 
                  Donizzle yippiyo. Funky fresh ligula urna, check it out izzle, fo venenatis, daahng dawg nizzle, felis. Etizzle brizzle.

            </p>
            </div>
}
let Footer = () => {
    return <footer className="text-center" style={{padding:'2rem'}}>Copyright 2020 Michael Stallings</footer>
}

let Blog = () => {

    return <div>
                
                        <Header />
                
               
                        <Article />
                
                
                        <Footer />
                
           </div>
           
}


ReactDOM.render(<Blog />, document.getElementById('root'))