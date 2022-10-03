import styled from '../App.module.scss'
function Header(){
    return (
      <header>
        <div>
          <h1 className={styled.logo}>Logo</h1>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Buy</a></li>
              <li><a href="">Sing In</a></li>
              <li><a href="">Sing Up</a></li>
          </ul>
        </div>
      </header>
    )
  }
  function Footer(){
    return (
      <footer>
        <div>
          <h1  className={styled.logo}>Logo</h1>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Buy</a></li>
              <li><a href="">Sing In</a></li>
              <li><a href="">Sing Up</a></li>
          </ul>
          <h1>&#169;All reseved copyright</h1>
        </div>
      </footer>
    )
  }
export {Header , Footer};