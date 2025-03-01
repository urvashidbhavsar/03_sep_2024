import React from 'react'
import Logo from '../Navbar/Logo'
import Nav from '../Navbar/Nav'
import Search from '../Navbar/Search'

const Footer = () => {
    return (
        <>
            <footer style={{ padding: "20px 0", background: "gray" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
                        <div>
                            <Logo />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti illo similique laborum cum possimus suscipit ut alias at sit molestias, vitae nostrum, maiores fugiat maxime doloremque voluptate tenetur doloribus ex.
                            </p>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <ul style={{ listStyle: "none" }}>
                                <Nav />
                            </ul>
                        </div>
                        <div>
                            <Search />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
